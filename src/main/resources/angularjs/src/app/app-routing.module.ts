import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }      from './component/home.component';
import { DashboardComponent }   from './component/dashboard.component';
import { PageNotFoundComponent }   from './component/page-not-found.component';

const routes: Routes = [
  { path: 'home',     component: HomeComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
