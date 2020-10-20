
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NopagesfoundComponent } from './shared/nopagesfound/nopagesfound.component';

const routes: Routes = [
  { path: '', component: PagesComponent,
  children: [
  { path:'dashboard', component: DashboardComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'graficas1', component: Graficas1Component },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagesfoundComponent },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
