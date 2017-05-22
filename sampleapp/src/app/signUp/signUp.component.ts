import { Component } from '@angular/core';
import { SignUpDetails } from './signUp.typeDef'


@Component({
    selector: '<signUp>',
    templateUrl: './signUp.component.html'
})

export class SignUpComponent {

    signUpDetails: SignUpDetails;

    constructor() { 
        this.signUpDetails= {
            email : '',
            firstName: '',
            lastName : '',
            phoneNumber: null,
            userName: '',
            password: ''
        }
    }

    signUp(){
        console.log(this.signUpDetails)
        debugger;
    }

}