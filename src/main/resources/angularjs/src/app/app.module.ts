import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home.component';
import { HeroComponent } from './component/hero.component';
import { DashboardComponent } from './component/dashboard.component';
import { HeroAddComponent } from './component/hero-add.component';
import { HeroViewComponent } from './component/hero-view.component';
import { HelpComponent } from './component/help.component';
import { EditorComponent } from './component/editor.component';

import { NavComponent } from './component/nav.component';
import { PageNotFoundComponent } from './component/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, HeroComponent,
    DashboardComponent, HeroAddComponent, HeroViewComponent,
    HelpComponent, EditorComponent,
    NavComponent, PageNotFoundComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
