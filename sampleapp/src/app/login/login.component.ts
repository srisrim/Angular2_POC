import { Component, EventEmitter, Output, Input } from '@angular/core';
declare var $: any;

@Component({
    selector: '<login>',
    templateUrl: './login.component.html'
})

export class LoginComponent {

    isLoggedIn: boolean;

    @Input() set  value(value: any){
        if(value !== null){
            debugger;
            let isLoggedIn = value;
        }
    };
    constructor() {  }

    userName: string;
    password: string;
    passwordErr: boolean = false;
    @Output() change = new EventEmitter();


    login() {
        debugger;
        console.log(this.userName, this.password)
        if (this.userName === 'tavantui' && this.password === 'Demo@123') {
            this.isLoggedIn = true;
            this.change.emit(this.isLoggedIn);

        } else {
            this.passwordErr = true;
        }
    }

}