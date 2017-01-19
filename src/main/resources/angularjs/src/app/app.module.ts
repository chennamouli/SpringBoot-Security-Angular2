import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home.component';
import { DashboardComponent } from './component/dashboard.component';
import { NavComponent } from './component/nav.component';
import {PageNotFoundComponent} from './component/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, DashboardComponent,NavComponent,PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
