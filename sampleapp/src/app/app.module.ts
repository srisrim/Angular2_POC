import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { layoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signUp/signUp.component';
import { filterComponent } from './filter/filter.component';
import { qalistComponent } from './qalist/qalist.component';
import { supportComponent } from './support/support.component';
import { profileComponent } from './profile/profile.component';

//Routing
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, layoutComponent, filterComponent, LoginComponent, SignUpComponent,qalistComponent, supportComponent, profileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}
