import { Component } from '@angular/core';
import { GaugeAction, GaugeActionsType, GaugeRangeProperty, GaugeSettings, GaugeStatus, Variable } from '../../../_models/hmi';
import { GaugeBaseComponent } from '../../gauge-base/gauge-base.component';
import { GaugeDialogType } from '../../gauge-property/gauge-property.component';

import { Utils } from '../../../_helpers/utils';

declare var SVG: any;

@Component({
    selector: 'gauge-value',
    templateUrl: './value.component.html',
    styleUrls: ['./value.component.css']
})
export class ValueComponent extends GaugeBaseComponent {


    static TypeTag = 'svg-ext-value';
    static LabelTag = 'Value';

    static actionsType = { hide: GaugeActionsType.hide, show: GaugeActionsType.show, blink: GaugeActionsType.blink };

    constructor() {
        super();
    }

    static getSignals(pro: any) {
        // --------------------------------------------------------------------
        // modifed by J, allocate the first action tag link as tagPrefix, check if 1st action link start as meta, then use it as tagPrefix; if not, set as null
        let tagPrefix = '';
        if (pro) {
            if (pro.actions?.length > 0 && pro.actions[0].variableId?.startsWith('meta')) {
                tagPrefix = pro.actions[0].variableId;
            }
        }
        // --------------------------------------------------------------------
        let res: string[] = [];
        if (pro.actions && pro.actions.length) {
            pro.actions.forEach(act => {
                //modified by J, add tag prefix to the variableId, check only actions not starting with variableId = 'meta'
                if (!act.variableId.startsWith('meta')) {
                    res.push(tagPrefix + act.variableId);
                }
            });
        }
        if (pro.ranges) {
            pro.ranges.forEach((range: GaugeRangeProperty) => {
                if (range.textId) {
                    res.push(tagPrefix + range.textId); // modified by J, add tag prefix to the textId, for getting units
                }
                if (range['fractionDigitsId']) {
                    res.push(tagPrefix + range['fractionDigitsId']);    // modified by J, add tag prefix to the fractionDigitsId, for getDigits
                }
            });
        }
        if (pro.variableId) {
            res.push(tagPrefix + pro.variableId);   // modifed by J, add tag prefix
        }
        return res;
    }

    static getDialogType(): GaugeDialogType {
        return GaugeDialogType.ValueAndUnit;
    }

    static getActions(type: string) {
        return this.actionsType;
    }

    static processValue(ga: GaugeSettings, svgele: any, sig: Variable, gaugeStatus: GaugeStatus) {
        try {
            // --------------------------------------------------------------------
            // modifed by J, allocate the first action tag link as tagPrefix, check if 1st action link start as 'meta', then use it as tagPrefix; if not, set as null
            let tagPrefix = '';
            let gaCopy = ga.property ? JSON.parse(JSON.stringify(ga)) : ga;
            // let gaCopy = JSON.parse(JSON.stringify(ga));
            if (ga.property) {
                if (ga.property.actions?.length > 0 && ga.property.actions[0].variableId?.startsWith('meta')) {
                    tagPrefix = ga.property.actions[0].variableId;
                    gaCopy.property.variableId = tagPrefix + ga.property.variableId;
                    gaCopy.property.ranges[0].textId = ga.property.ranges[0].textId? tagPrefix + ga.property.ranges[0].textId : null;   // modified by J, add tag prefix to the textId, for getting units
                    gaCopy.property.ranges[0].fractionDigitsId = ga.property.ranges[0].fractionDigitsId? tagPrefix + ga.property.ranges[0].fractionDigitsId : null;   // modified by J, add tag prefix to the fractionDigitsId, for getDigits
                }
            }
            // --------------------------------------------------------------------
            if (svgele.node && svgele.node.children && svgele.node.children.length <= 1) {
                let g = svgele.node.children[0];
                let val: any = parseFloat(sig.value);
                switch (typeof (sig.value)) {
                    case 'undefined':
                        break;
                    case 'boolean':
                        val = Number(sig.value);
                        break;
                    case 'number':
                        val = parseFloat(val.toFixed(5));
                        break;
                    case 'string':
                        val = sig.value;
                        break;
                    default: break;
                }
                if (gaCopy.property) {
                    let unit = GaugeBaseComponent.getUnit(gaCopy.property, gaugeStatus);    // modified by J, add tag prefix to the textId, for getting units
                    let digit = GaugeBaseComponent.getDigits(gaCopy.property, gaugeStatus);    // modified by J, add tag prefix to the fractionDigitsId, for getDigits
                    if (!Utils.isNullOrUndefined(digit) && Utils.isNumeric(val)) {
                        val = parseFloat(sig.value).toFixed(digit);
                    }
                    if (tagPrefix + ga.property.variableId === sig.id) {    //modified by J, add tag prefix to the variableId
                        try {
                            g.textContent = val;
                            if (unit) {
                                g.textContent += ' ' + unit;
                            }
                        } catch (err) {
                            console.error(ga, sig, err);
                        }
                    }
                    // check actions
                    if (ga.property.actions) {
                        ga.property.actions.forEach(act => {
                            if (!act.variableId.startsWith('meta') && tagPrefix + act.variableId === sig.id) {    //modified by J, add tag prefix to the variableId, check only actions not starting with variableId = 'meta'
                                ValueComponent.processAction(act, svgele, parseFloat(val), gaugeStatus);
                            }
                        });
                    }
                }
            }
        } catch (err) {
            console.error(err);
        }
    }

    static processAction(act: GaugeAction, svgele: any, value: any, gaugeStatus: GaugeStatus) {
        if (this.actionsType[act.type] === this.actionsType.hide) {
            if (act.range.min <= value && act.range.max >= value) {
                let element = SVG.adopt(svgele.node);
                this.runActionHide(element, act.type, gaugeStatus);
            }
        } else if (this.actionsType[act.type] === this.actionsType.show) {
            if (act.range.min <= value && act.range.max >= value) {
                let element = SVG.adopt(svgele.node);
                this.runActionShow(element, act.type, gaugeStatus);
            }
        } else if (this.actionsType[act.type] === this.actionsType.blink) {
            let element = SVG.adopt(svgele.node.children[0]);
            let inRange = (act.range.min <= value && act.range.max >= value);
            this.checkActionBlink(element, act, gaugeStatus, inRange, false);
        }
    }
}

export class ValueProperty {
    signalid = '';
    format = '##.##';
}
