"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var foundation = require('contents/js/vendor/foundation.js');
var layoutComponent = (function () {
    function layoutComponent(el) {
        this.el = el;
        if (JSON.parse(localStorage.getItem('isLoggedIn'))) {
            debugger;
            this.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
            this.checkRegisteredUser = JSON.parse(localStorage.getItem("names"));
        }
        else {
            this.isLoggedIn = false;
        }
    }
    // Loading Foundation JS Here
    layoutComponent.prototype.ngAfterViewInit = function () {
        $(this.el.nativeElement.ownerDocument).foundation();
    };
    layoutComponent.prototype.isUserLoggedIn = function (event) {
        this.isLoggedIn = event;
        localStorage.setItem('isLoggedIn', event);
    };
    layoutComponent.prototype.login = function () {
        this.isLoggedIn = false;
    };
    layoutComponent.prototype.logOut = function () {
        localStorage.setItem('isLoggedIn', 'false');
        this.isLoggedIn = false;
    };
    return layoutComponent;
}());
layoutComponent = __decorate([
    core_1.Component({
        selector: '<layout>',
        templateUrl: './layout.component.html'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], layoutComponent);
exports.layoutComponent = layoutComponent;
//# sourceMappingURL=layout.component.js.map