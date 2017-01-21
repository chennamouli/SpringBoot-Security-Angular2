import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home.component';
import { HeroComponent } from './component/hero.component';
import { DashboardComponent } from './component/dashboard.component';
import { HeroAddComponent } from './component/hero-add.component';
import { HeroViewComponent } from './component/hero-view.component';
import { PageNotFoundComponent } from './component/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add', component: HeroAddComponent },
  { path: 'view/:id', component: HeroViewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
