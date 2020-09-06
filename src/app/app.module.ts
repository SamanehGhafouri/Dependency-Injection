import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDemoInjectorComponent } from './user-demo/user-demo.injector.component';
import {UserDemoComponent} from "./user-demo/user-demo.component";
import {UserService} from "./services/user.service";
import {AnalyticsDemoComponent} from "./analytics-demo/analytics-demo.component";
import {AnalyticsService} from "./services/analytics.service";
import {AnalyticsDemoModule} from "./analytics-demo/analytics-demo.module";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {IntroComponent} from "./intro/intro.component";
import {ExampleDef} from "./example.model";

export const examples: ExampleDef[] = [
  {label: 'Intro', name: 'Root', path: '', component: IntroComponent},
  {label: 'Injector', name: 'Injector', path: 'injector', component: UserDemoInjectorComponent},
  {label: 'useClass (UserService)', name: 'UseClass', path: 'use-class', component: UserDemoComponent},
  {label: 'factory (AnalyticsService)', name: 'UseClass', path: 'factory', component: AnalyticsDemoComponent},
];

const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full' },
  { path: 'injector', component: UserDemoInjectorComponent, pathMatch: 'full' },
  { path: 'use-class', component: UserDemoComponent, pathMatch: 'full' },
  { path: 'factory', component: AnalyticsDemoComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    UserDemoInjectorComponent,
    UserDemoComponent,
    AnalyticsDemoComponent,
    IntroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnalyticsDemoModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

  ],
  providers: [UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
