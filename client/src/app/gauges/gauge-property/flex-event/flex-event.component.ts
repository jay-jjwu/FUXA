import {Component, Input, OnInit} from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import {
    GaugeEvent,
    GaugeEventActionType,
    GaugeEventSetValueType,
    GaugeEventType,
    GaugeProperty,
    GaugeSettings,
    View
} from '../../../_models/hmi';

@Component({
    selector: 'flex-event',
    templateUrl: './flex-event.component.html',
    styleUrls: ['./flex-event.component.css']
})
export class FlexEventComponent implements OnInit {

    @Input() property: GaugeProperty;
    @Input() views: View[];
    @Input() inputs: GaugeSettings[];
    @Input() data: any;

    events: GaugeEvent[];
    eventType: any;
    setValueType = GaugeEventSetValueType;
    actionType: any;

    constructor(private translateService: TranslateService) {
    }

    ngOnInit() {
        this.eventType = GaugeEventType;
        this.actionType = GaugeEventActionType;

        Object.keys(this.eventType).forEach(key => {
            this.translateService.get(this.eventType[key]).subscribe((txt: string) => { this.eventType[key] = txt });
        });
        Object.keys(this.actionType).forEach(key => {
            this.translateService.get(this.actionType[key]).subscribe((txt: string) => { this.actionType[key] = txt });
        });
        Object.keys(this.setValueType).forEach(key => {
            this.translateService.get(this.setValueType[key]).subscribe((txt: string) => { this.setValueType[key] = txt });
        });

        if (this.property) {
            this.events = this.property.events;
            // compatibility with <= 1.0.4
            this.events.forEach(element => {
                if (!element.actoptions || Object.keys(element.actoptions).length == 0) {
                    element.actoptions = {variablesMapping: []};
                }
            });
        }
        if (!this.events || this.events.length <= 0) {
            this.onAddEvent();
        }
    }

    getEvents() {
        let result = [];
        if (this.events) {
            this.events.forEach(element => {
                if (element.type) {
                    result.push(element);
                }
            });
        }
        return result;
    }

    onAddEvent() {
        let ga: GaugeEvent = new GaugeEvent();
        this.addEvent(ga);
    }

    onRemoveEvent(index: number) {
        this.events.splice(index, 1);
    }

    withDestination(action) {
        let a = Object.keys(this.actionType).indexOf(action);
        let b = Object.values(this.actionType).indexOf(GaugeEventActionType.onpage);
        let c = Object.values(this.actionType).indexOf(GaugeEventActionType.onwindow);
        let d = Object.values(this.actionType).indexOf(GaugeEventActionType.ondialog);
        return a === b || a === c || a === d;
    }

    withSetValue(action) {
        let a = Object.keys(this.actionType).indexOf(action);
        let b = Object.values(this.actionType).indexOf(GaugeEventActionType.onSetValue);
        return a === b;
    }

    withToggleValue(action) {
        let a = Object.keys(this.actionType).indexOf(action);
        let b = Object.values(this.actionType).indexOf(GaugeEventActionType.onToggleValue);
        return a === b;
    }

    withSetInput(action) {
        let a = Object.keys(this.actionType).indexOf(action);
        let b = Object.values(this.actionType).indexOf(GaugeEventActionType.onSetInput);
        return a === b;
    }

    withAddress(action) {
        let a = Object.keys(this.actionType).indexOf(action);
        let b = Object.values(this.actionType).indexOf(GaugeEventActionType.oniframe);
        let c = Object.values(this.actionType).indexOf(GaugeEventActionType.oncard);
        return a === b || a === c;
    }

    withScale(action) {
        let a = Object.keys(this.actionType).indexOf(action);
        let b = Object.values(this.actionType).indexOf(GaugeEventActionType.oniframe);
        return a === b;
    }

    getView(viewId: any) {
        return this.views.find(function (item) {
            return item.id == viewId
        })
    }

    private addEvent(ge: GaugeEvent) {
        if (!this.events) {
            this.events = [];
        }
        this.events.push(ge);
    }
}
