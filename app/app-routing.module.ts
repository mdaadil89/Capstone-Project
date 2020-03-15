import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {PageNotFoundComponent} from './page-not-found.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'login', component:LoginComponent},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
