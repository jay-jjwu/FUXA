// the start/root module that tells Angular how to assemble the application.

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'ngx-color-picker';
import { MaterialModule } from './material.module';

import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularDraggableModule } from 'angular2-draggable';
import { ToastrModule } from 'ngx-toastr';
import { NgxDaterangepickerMd } from './gui-helpers/daterangepicker';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AuthGuard } from './auth.guard';

import { Calc } from './_helpers/calc';
import { Define } from './_helpers/define';
import { Dictionary } from './_helpers/dictionary';
import { EnumToArrayPipe, EscapeHtmlPipe, Utils } from './_helpers/utils';
import { WindowRef } from './_helpers/windowref';
import { AppService } from './_services/app.service';
import { AuthService } from './_services/auth.service';
import { DiagnoseService } from './_services/diagnose.service';
import { HmiService } from './_services/hmi.service';
import { PluginService } from './_services/plugin.service';
import { ProjectService } from './_services/project.service';
import { ResClientService } from './_services/rcgi/resclient.service';
import { ResDemoService } from './_services/rcgi/resdemo.service';
import { ResWebApiService } from './_services/rcgi/reswebapi.service';
import { ResourcesService } from './_services/resources.service';
import { ScriptService } from './_services/script.service';
import { SettingsService } from './_services/settings.service';
import { UserService } from './_services/user.service';
import { AlarmListComponent } from './alarms/alarm-list/alarm-list.component';
import { AlarmPropertyComponent } from './alarms/alarm-property/alarm-property.component';
import { AlarmViewComponent } from './alarms/alarm-view/alarm-view.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { DeviceListComponent } from './device/device-list/device-list.component';
import { DeviceMapComponent } from './device/device-map/device-map.component';
import { DevicePropertyComponent } from './device/device-property/device-property.component';
import { DeviceComponent } from './device/device.component';
import { TagOptionsComponent } from './device/tag-options/tag-options.component';
import { TopicPropertyComponent } from './device/topic-property/topic-property.component';
import { AppSettingsComponent } from './editor/app-settings/app-settings.component';
import { CardConfigComponent } from './editor/card-config/card-config.component';
import { ChartConfigComponent, DialogChartLine } from './editor/chart-config/chart-config.component';
import { DialogLinkProperty, EditorComponent } from './editor/editor.component';
import { DialogGraphSource, GraphConfigComponent } from './editor/graph-config/graph-config.component';
import { DialogHeaderItem, DialogMenuItem, LayoutPropertyComponent } from './editor/layout-property/layout-property.component';
import { PluginsComponent } from './editor/plugins/plugins.component';
import { SetupComponent } from './editor/setup/setup.component';
import { FuxaViewComponent } from './fuxa-view/fuxa-view.component';
import { BitmaskComponent } from './gui-helpers/bitmask/bitmask.component';
import { ConfirmDialogComponent } from './gui-helpers/confirm-dialog/confirm-dialog.component';
import { DaterangeDialogComponent } from './gui-helpers/daterange-dialog/daterange-dialog.component';
import { EditNameComponent } from './gui-helpers/edit-name/edit-name.component';
import { NgxFabButtonComponent } from './gui-helpers/fab-button/ngx-fab-button.component';
import { NgxFabItemButtonComponent } from './gui-helpers/fab-button/ngx-fab-item-button.component';
import { NgxSwitchComponent } from './gui-helpers/ngx-switch/ngx-switch.component';
import { RangeNumberComponent } from './gui-helpers/range-number/range-number.component';
import { SelOptionsComponent } from './gui-helpers/sel-options/sel-options.component';
import { TreetableComponent } from './gui-helpers/treetable/treetable.component';
import { DialogInfo, HeaderComponent } from './header/header.component';
import { TutorialComponent } from './help/tutorial/tutorial.component';
import { HomeComponent } from './home/home.component';
import { IframeComponent } from './iframe/iframe.component';
import { LabComponent } from './lab/lab.component';
import { LogsViewComponent } from './logs-view/logs-view.component';
import { NotificationListComponent } from './notifications/notification-list/notification-list.component';
import { NotificationPropertyComponent } from './notifications/notification-property/notification-property.component';
import { LibImagesComponent } from './resources/lib-images/lib-images.component';
import { ScriptEditorComponent } from './scripts/script-editor/script-editor.component';
import { ScriptListComponent } from './scripts/script-list/script-list.component';
import { ScriptPermissionComponent } from './scripts/script-permission/script-permission.component';
import { ScriptSchedulingComponent } from './scripts/script-scheduling/script-scheduling.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TesterComponent } from './tester/tester.component';
import { TesterService } from './tester/tester.service';
import { DialogItemText, TextListComponent } from './text-list/text-list.component';
import { ViewComponent } from './view/view.component';

import { DialogDraggableDirective } from './_directives/dialog-draggable.directive';
import { LazyForDirective } from './_directives/lazyFor.directive';
import { ModalPositionCache } from './_directives/modal-position.cache';
import { DraggableDirective } from './_directives/ngx-draggable.directive';
import { NumberOnlyDirective, NumberOrNullOnlyDirective } from './_directives/number.directive';

import { ValueComponent } from './gauges/controls/value/value.component';
import { GaugeBaseComponent } from './gauges/gauge-base/gauge-base.component';
import { GaugesManager } from './gauges/gauges.component';

import { GaugeProgressComponent } from './gauges/controls/gauge-progress/gauge-progress.component';
import { GaugeSemaphoreComponent } from './gauges/controls/gauge-semaphore/gauge-semaphore.component';
import { HtmlBagComponent } from './gauges/controls/html-bag/html-bag.component';
import { HtmlButtonComponent } from './gauges/controls/html-button/html-button.component';
import { ChartPropertyComponent } from './gauges/controls/html-chart/chart-property/chart-property.component';
import { HtmlChartComponent } from './gauges/controls/html-chart/html-chart.component';
import { HtmlGraphComponent } from './gauges/controls/html-graph/html-graph.component';
import { HtmlIframeComponent } from './gauges/controls/html-iframe/html-iframe.component';
import { HtmlInputComponent } from './gauges/controls/html-input/html-input.component';
import { HtmlSelectComponent } from './gauges/controls/html-select/html-select.component';
import { HtmlSwitchComponent } from './gauges/controls/html-switch/html-switch.component';
import { HtmlTableComponent } from './gauges/controls/html-table/html-table.component';
import { FlexActionComponent } from './gauges/gauge-property/flex-action/flex-action.component';
import { FlexAuthComponent } from './gauges/gauge-property/flex-auth/flex-auth.component';
import { FlexEventComponent } from './gauges/gauge-property/flex-event/flex-event.component';
import { FlexHeadComponent } from './gauges/gauge-property/flex-head/flex-head.component';
import { FlexInputComponent } from './gauges/gauge-property/flex-input/flex-input.component';
import { FlexVariableMapComponent } from './gauges/gauge-property/flex-variable-map/flex-variable-map.component';
import { FlexVariableComponent } from './gauges/gauge-property/flex-variable/flex-variable.component';
import { FlexVariablesMappingComponent } from './gauges/gauge-property/flex-variables-mapping/flex-variables-mapping.component';
import { DialogGaugePermission, GaugePropertyComponent } from './gauges/gauge-property/gauge-property.component';
import { ApeShapesComponent } from './gauges/shapes/ape-shapes/ape-shapes.component';
import { ProcEngComponent } from './gauges/shapes/proc-eng/proc-eng.component';
import { ShapesComponent } from './gauges/shapes/shapes.component';
import { MatSelectSearchModule } from './gui-helpers/mat-select-search/mat-select-search.module';
import { DialogUserInfo } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

import { BagPropertyComponent } from './gauges/controls/html-bag/bag-property/bag-property.component';
import { HtmlSwitchPropertyComponent } from './gauges/controls/html-switch/html-switch-property/html-switch-property.component';
import { PipePropertyComponent } from './gauges/controls/pipe/pipe-property/pipe-property.component';
import { PipeComponent } from './gauges/controls/pipe/pipe.component';
import { SliderPropertyComponent } from './gauges/controls/slider/slider-property/slider-property.component';
import { SliderComponent } from './gauges/controls/slider/slider.component';
import { NgxGaugeComponent } from './gui-helpers/ngx-gauge/ngx-gauge.component';
import { NgxNouisliderComponent } from './gui-helpers/ngx-nouislider/ngx-nouislider.component';

import { ChartUplotComponent } from './gauges/controls/html-chart/chart-uplot/chart-uplot.component';
import { NgxUplotComponent } from './gui-helpers/ngx-uplot/ngx-uplot.component';

import { GridsterModule } from 'angular-gridster2';

import { MAT_LEGACY_TOOLTIP_DEFAULT_OPTIONS as MAT_TOOLTIP_DEFAULT_OPTIONS, MatLegacyTooltipDefaultOptions as MatTooltipDefaultOptions } from '@angular/material/legacy-tooltip';
import { NgChartsModule } from 'ng2-charts';
import { ResizeDirective } from './_directives/resize.directive';
import { StopInputPropagationDirective } from './_directives/stop-input-propagation.directive';
import { httpInterceptorProviders } from './_helpers/auth-interceptor';
import { SvgUtils } from './_helpers/svg-utils';
import { CommandService } from './_services/command.service';
import { DataConverterService } from './_services/data-converter.service';
import { HeartbeatService } from './_services/heartbeat.service';
import { MyFileService } from './_services/my-file.service';
import { RcgiService } from './_services/rcgi/rcgi.service';
import { ToastNotifierService } from './_services/toast-notifier.service';
import { DeviceWebapiPropertyDialogComponent } from './device/device-map/device-webapi-property-dialog/device-webapi-property-dialog.component';
import { DeviceTagSelectionComponent } from './device/device-tag-selection/device-tag-selection.component';
import { TagPropertyEditBacnetComponent } from './device/tag-property/tag-property-edit-bacnet/tag-property-edit-bacnet.component';
import { TagPropertyEditEthernetipComponent } from './device/tag-property/tag-property-edit-ethernetip/tag-property-edit-ethernetip.component';
import { TagPropertyEditInternalComponent } from './device/tag-property/tag-property-edit-internal/tag-property-edit-internal.component';
import { TagPropertyEditModbusComponent } from './device/tag-property/tag-property-edit-modbus/tag-property-edit-modbus.component';
import { TagPropertyEditOpcuaComponent } from './device/tag-property/tag-property-edit-opcua/tag-property-edit-opcua.component';
import { TagPropertyEditS7Component } from './device/tag-property/tag-property-edit-s7/tag-property-edit-s7.component';
import { TagPropertyEditServerComponent } from './device/tag-property/tag-property-edit-server/tag-property-edit-server.component';
import { TagPropertyEditWebapiComponent } from './device/tag-property/tag-property-edit-webapi/tag-property-edit-webapi.component';
import { EditorViewsListComponent } from './editor/editor-views-list/editor-views-list.component';
import { SvgSelectorComponent } from './editor/svg-selector/svg-selector.component';
import { TagsIdsConfigComponent } from './editor/tags-ids-config/tags-ids-config.component';
import { ViewPropertyComponent } from './editor/view-property/view-property.component';
import { FrameworkModule } from './framework/framework.module';
import { FuxaViewDialogComponent } from './fuxa-view/fuxa-view-dialog/fuxa-view-dialog.component';
import { GraphBarComponent } from './gauges/controls/html-graph/graph-bar/graph-bar.component';
import { GraphBaseComponent } from './gauges/controls/html-graph/graph-base/graph-base.component';
import { GraphPieComponent } from './gauges/controls/html-graph/graph-pie/graph-pie.component';
import { GraphPropertyComponent } from './gauges/controls/html-graph/graph-property/graph-property.component';
import { IframePropertyComponent } from './gauges/controls/html-iframe/iframe-property/iframe-property.component';
import { HtmlImageComponent } from './gauges/controls/html-image/html-image.component';
import { DataTableComponent } from './gauges/controls/html-table/data-table/data-table.component';
import { DialogTableCell, TableCustomizerComponent } from './gauges/controls/html-table/table-customizer/table-customizer.component';
import { TablePropertyComponent } from './gauges/controls/html-table/table-property/table-property.component';
import { PanelPropertyComponent } from './gauges/controls/panel/panel-property/panel-property.component';
import { PanelComponent } from './gauges/controls/panel/panel.component';
import { FlexDeviceTagComponent } from './gauges/gauge-property/flex-device-tag/flex-device-tag.component';
import { FlexWidgetPropertyComponent } from './gauges/gauge-property/flex-widget-property/flex-widget-property.component';
import { MetaShapesComponent } from './gauges/shapes/meta-shapes/meta-shapes.component';
import { NgxSchedulerComponent } from './gui-helpers/ngx-scheduler/ngx-scheduler.component';
import { WebcamPlayerDialogComponent } from './gui-helpers/webcam-player/webcam-player-dialog/webcam-player-dialog.component';
import { WebcamPlayerComponent } from './gui-helpers/webcam-player/webcam-player.component';
import { ReportEditorComponent } from './reports/report-editor/report-editor.component';
import { ReportItemAlarmsComponent } from './reports/report-editor/report-item-alarms/report-item-alarms.component';
import { ReportItemChartComponent } from './reports/report-editor/report-item-chart/report-item-chart.component';
import { ReportItemTableComponent } from './reports/report-editor/report-item-table/report-item-table.component';
import { ReportItemTextComponent } from './reports/report-editor/report-item-text/report-item-text.component';
import { ReportListComponent } from './reports/report-list/report-list.component';
import { ScriptEditorParamComponent } from './scripts/script-editor/script-editor-param/script-editor-param.component';
import { ScriptModeComponent } from './scripts/script-mode/script-mode.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
    showDelay: 1750,
    hideDelay: 1000,
    touchendHideDelay: 1000,
};

@NgModule({
    declarations: [
        HomeComponent,
        EditorComponent,
        HeaderComponent,
        SidenavComponent,
        IframeComponent,
        AppComponent,
        LabComponent,
        DeviceComponent,
        DeviceTagSelectionComponent,
        TagPropertyEditS7Component,
        TagPropertyEditServerComponent,
        TagPropertyEditModbusComponent,
        TagPropertyEditInternalComponent,
        TagPropertyEditOpcuaComponent,
        TagPropertyEditBacnetComponent,
        TagPropertyEditWebapiComponent,
        TagPropertyEditEthernetipComponent,
        TagOptionsComponent,
        TopicPropertyComponent,
        DevicePropertyComponent,
        DeviceWebapiPropertyDialogComponent,
        LayoutPropertyComponent,
        TagsIdsConfigComponent,
        PluginsComponent,
        AppSettingsComponent,
        SetupComponent,
        DialogMenuItem,
        DialogHeaderItem,
        DeviceListComponent,
        DeviceMapComponent,
        FuxaViewComponent,
        FuxaViewDialogComponent,
        ViewPropertyComponent,
        DialogLinkProperty,
        EditNameComponent,
        ConfirmDialogComponent,
        DialogInfo,
        DaterangeDialogComponent,
        GaugeBaseComponent,
        HtmlInputComponent,
        HtmlButtonComponent,
        HtmlSelectComponent,
        HtmlChartComponent,
        HtmlGraphComponent,
        HtmlIframeComponent,
        HtmlImageComponent,
        HtmlBagComponent,
        GaugeProgressComponent,
        GaugeSemaphoreComponent,
        GaugePropertyComponent,
        DialogGaugePermission,
        SvgSelectorComponent,
        ChartPropertyComponent,
        BagPropertyComponent,
        PipePropertyComponent,
        SliderPropertyComponent,
        HtmlSwitchPropertyComponent,
        ShapesComponent,
        ProcEngComponent,
        ApeShapesComponent,
        TesterComponent,
        TutorialComponent,
        FlexInputComponent,
        FlexDeviceTagComponent,
        FlexAuthComponent,
        FlexHeadComponent,
        FlexEventComponent,
        FlexActionComponent,
        FlexVariableComponent,
        FlexVariablesMappingComponent,
        FlexVariableMapComponent,
        FlexWidgetPropertyComponent,
        ValueComponent,
        DialogDraggableDirective,
        EnumToArrayPipe,
        EscapeHtmlPipe,
        DraggableDirective,
        NumberOnlyDirective,
        StopInputPropagationDirective,
        NumberOrNullOnlyDirective,
        NgxFabButtonComponent,
        NgxFabItemButtonComponent,
        TreetableComponent,
        BitmaskComponent,
        SelOptionsComponent,
        LazyForDirective,
        NgxSwitchComponent,
        ChartConfigComponent,
        GraphConfigComponent,
        CardConfigComponent,
        AlarmListComponent,
        AlarmViewComponent,
        AlarmPropertyComponent,
        NotificationListComponent,
        NotificationPropertyComponent,
        ScriptListComponent,
        ScriptEditorComponent,
        ScriptSchedulingComponent,
        ScriptPermissionComponent,
        ScriptModeComponent,
        ReportListComponent,
        ReportEditorComponent,
        ScriptEditorParamComponent,
        TextListComponent,
        LogsViewComponent,
        NgxGaugeComponent,
        NgxNouisliderComponent,
        NgxSchedulerComponent,
        DialogChartLine,
        DialogGraphSource,
        UsersComponent,
        UserEditComponent,
        LoginComponent,
        DialogUserInfo,
        ViewComponent,
        DialogItemText,
        NgxUplotComponent,
        ChartUplotComponent,
        CardsViewComponent,
        GraphBarComponent,
        GraphPieComponent,
        GraphPropertyComponent,
        GraphBaseComponent,
        IframePropertyComponent,
        TablePropertyComponent,
        TableCustomizerComponent,
        DialogTableCell,
        DataTableComponent,
        RangeNumberComponent,
        LibImagesComponent,
        ReportItemTextComponent,
        ReportItemTableComponent,
        ReportItemAlarmsComponent,
        ReportItemChartComponent,
        PanelComponent,
        PanelPropertyComponent,
        WebcamPlayerComponent,
        WebcamPlayerDialogComponent,
        ResizeDirective,
        EditorViewsListComponent,
        MetaShapesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        MaterialModule,
        BrowserAnimationsModule,
        ColorPickerModule,
        AngularDraggableModule,
        MatSelectSearchModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: false
        }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        GridsterModule,
        NgChartsModule,
        CodemirrorModule,
        NgxDaterangepickerMd.forRoot(),
        FrameworkModule
    ],
    providers: [
        // providersResourceService,
        ResClientService,
        ResWebApiService,
        ResDemoService,
        HmiService,
        RcgiService,
        AppService,
        ProjectService,
        UserService,
        DiagnoseService,
        CommandService,
        HeartbeatService,
        DataConverterService,
        ScriptService,
        ResourcesService,
        PluginService,
        SettingsService,
        TesterService,
        httpInterceptorProviders,
        AuthService,
        GaugesManager,
        WindowRef,
        Utils,
        SvgUtils,
        Calc,
        HtmlSwitchComponent,
        PipeComponent,
        SliderComponent,
        HtmlTableComponent,
        Dictionary,
        ModalPositionCache,
        Define,
        AuthGuard,
        ToastNotifierService,
        MyFileService,
        {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
