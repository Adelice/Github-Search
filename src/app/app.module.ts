import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserFormComponent } from './user-form/user-form.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { StrikethroughDirective } from './strikethrough.directive'
@NgModule({
  declarations: [
    AppComponent,
   
    UserFormComponent,
    UsersComponent,
    StrikethroughDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
