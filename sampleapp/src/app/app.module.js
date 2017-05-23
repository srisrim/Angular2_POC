"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var layout_component_1 = require("./layout/layout.component");
var login_component_1 = require("./login/login.component");
var signUp_component_1 = require("./signUp/signUp.component");
var filter_component_1 = require("./filter/filter.component");
var qalist_component_1 = require("./qalist/qalist.component");
var support_component_1 = require("./support/support.component");
var profile_component_1 = require("./profile/profile.component");
//Routing
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var router_1 = require("@angular/router");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(app_routing_1.appRoutes)],
        declarations: [app_component_1.AppComponent, layout_component_1.layoutComponent, filter_component_1.filterComponent, login_component_1.LoginComponent, signUp_component_1.SignUpComponent, qalist_component_1.qalistComponent, support_component_1.supportComponent, profile_component_1.profileComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map