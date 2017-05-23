import { Component } from '@angular/core';
import { SignUpDetails } from '../signUp/signUp.typeDef'


@Component({
    selector: '<profile>',
    templateUrl: './profile.component.html'
})

export class profileComponent {

    checkRegisteredUser: SignUpDetails[];
    signUpDetails: SignUpDetails;


    ngOnInit() {
        this.checkRegisteredUser = JSON.parse(localStorage.getItem("names"))
        this.signUpDetails = this.checkRegisteredUser[0];
    }

}