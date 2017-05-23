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
var LoginComponent = (function () {
    function LoginComponent() {
        this.passwordErr = false;
        this.change = new core_1.EventEmitter();
    }
    Object.defineProperty(LoginComponent.prototype, "value", {
        set: function (value) {
            if (value !== null) {
                var isLoggedIn = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    LoginComponent.prototype.login = function () {
        debugger;
        this.checkRegisteredUser = JSON.parse(localStorage.getItem("names"));
        if (this.userName === this.checkRegisteredUser[0].userName && this.password === this.checkRegisteredUser[0].password) {
            this.isLoggedIn = true;
            this.change.emit(this.isLoggedIn);
        }
        else {
            this.passwordErr = true;
        }
    };
    return LoginComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LoginComponent.prototype, "value", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "change", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: '<login>',
        templateUrl: './login.component.html'
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map