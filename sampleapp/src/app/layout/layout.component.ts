import { Component, ElementRef, ViewChild } from '@angular/core';
declare var $: any;
let foundation = require('contents/js/vendor/foundation.js');
import { SignUpDetails } from '../signUp/signUp.typeDef'

@Component({
    selector: '<layout>',
    templateUrl: './layout.component.html'
})

export class layoutComponent {

    isLoggedIn: boolean;
    checkRegisteredUser: SignUpDetails[];


    constructor(private el: ElementRef) {
        if (JSON.parse(localStorage.getItem('isLoggedIn'))) {
            debugger;
            this.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
            this.checkRegisteredUser = JSON.parse(localStorage.getItem("names"))
        } else {
            this.isLoggedIn = false;
        }
    }


    // Loading Foundation JS Here
    ngAfterViewInit() {
        $(this.el.nativeElement.ownerDocument).foundation();

    }

    isUserLoggedIn(event: any) {
        this.isLoggedIn = event;
        localStorage.setItem('isLoggedIn', event)
    }

    login() {
        this.isLoggedIn = false;
    }

    logOut() {
        localStorage.setItem('isLoggedIn', 'false')
        this.isLoggedIn = false;
    }

}