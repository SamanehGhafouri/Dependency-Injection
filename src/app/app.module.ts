import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDemoInjectorComponent } from './user-demo/user-demo.injector.component';
import {UserDemoComponent} from "./user-demo/user-demo.component";
import {UserService} from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    UserDemoInjectorComponent,
    UserDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
