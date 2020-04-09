import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {NavbarComponent} from './navbar/navbar.component'

const routes : Routes = [
  { path: '', redirectTo:'/Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'navbar',component:NavbarComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
