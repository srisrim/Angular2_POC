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
var SignUpComponent = (function () {
    function SignUpComponent() {
        this.isSignedIn = false;
        this.registeredUsers = new Array();
        this.registeredUsersCount = 0;
        this.isUserNameExist = false;
        this.resetForm();
    }
    SignUpComponent.prototype.ngOnInit = function () {
        // debugger;
        // let count = JSON.parse(localStorage.getItem("names")).length;
        // if (count > 0) {
        //     this.registeredUsersCount = count + 1;
        // } else {
        //     this.registeredUsersCount = 0
        // }
    };
    SignUpComponent.prototype.signUp = function () {
        debugger;
        this.checkRegisteredUser = JSON.parse(localStorage.getItem("names"));
        if (!this.checkRegisteredUser || (this.checkRegisteredUser && this.checkRegisteredUser[0].userName !== this.signUpDetails.userName)) {
            this.registeredUsers[this.registeredUsersCount] = this.signUpDetails;
            localStorage.setItem("names", JSON.stringify(this.registeredUsers));
            this.resetForm();
            this.isSignedIn = true;
        }
    };
    SignUpComponent.prototype.resetForm = function () {
        this.signUpDetails = {
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: null,
            userName: '',
            password: ''
        };
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    core_1.Component({
        selector: '<signUp>',
        templateUrl: './signUp.component.html'
    }),
    __metadata("design:paramtypes", [])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=signUp.component.js.map