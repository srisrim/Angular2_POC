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

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, layoutComponent, filterComponent, LoginComponent, SignUpComponent,qalistComponent, supportComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}
