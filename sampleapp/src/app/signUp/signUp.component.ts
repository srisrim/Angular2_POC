import { Component } from '@angular/core';
import { SignUpDetails } from './signUp.typeDef'


@Component({
    selector: '<signUp>',
    templateUrl: './signUp.component.html'
})

export class SignUpComponent {

    isSignedIn : boolean = false;

    signUpDetails: SignUpDetails;

    constructor() {
        this.resetForm();
    }

    checkRegisteredUser: SignUpDetails[];
    registeredUsers = new Array();
    registeredUsersCount: number = 0;
    isUserNameExist: boolean = false;

    ngOnInit() {
        // debugger;
        // let count = JSON.parse(localStorage.getItem("names")).length;
        // if (count > 0) {
        //     this.registeredUsersCount = count + 1;
        // } else {
        //     this.registeredUsersCount = 0
        // }
    }

    signUp() {
        debugger;
        this.checkRegisteredUser = JSON.parse(localStorage.getItem("names"))
        if (!this.checkRegisteredUser || (this.checkRegisteredUser && this.checkRegisteredUser[0].userName !== this.signUpDetails.userName)) {
            this.registeredUsers[this.registeredUsersCount] = this.signUpDetails;
            localStorage.setItem("names", JSON.stringify(this.registeredUsers));
            this.resetForm();
            this.isSignedIn = true;
        }
    }

    resetForm() {
        this.signUpDetails = {
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: null,
            userName: '',
            password: ''
        }
    }

}