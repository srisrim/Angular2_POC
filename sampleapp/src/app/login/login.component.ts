import { Component, EventEmitter, Output, Input } from '@angular/core';
declare var $: any;
import { SignUpDetails } from '../signUp/signUp.typeDef'

@Component({
    selector: '<login>',
    templateUrl: './login.component.html'
})

export class LoginComponent {

    isLoggedIn: boolean;

    checkRegisteredUser: SignUpDetails[];

    @Input() set  value(value: any){
        if(value !== null){
            let isLoggedIn = value;
        }
    };
    constructor() {  }

    userName: string;
    password: string;
    passwordErr: boolean = false;
    @Output() change = new EventEmitter();


    login() {
        debugger
        this.checkRegisteredUser = JSON.parse(localStorage.getItem("names"))
        if (this.userName === this.checkRegisteredUser[0].userName && this.password === this.checkRegisteredUser[0].password) {
            this.isLoggedIn = true;
            this.change.emit(this.isLoggedIn);

        } else {
            this.passwordErr = true;
        }
    }

}