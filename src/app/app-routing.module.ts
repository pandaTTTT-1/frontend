import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AuthGuard} from "./guards/auth.guard";



import { CartComponent } from './cart/cart.component';





import { watchmoreComponent } from './home/watchmore/watchmore.component';

import { HomeComponent } from './home/home.component';
import { SlideComponent } from './home/slide/slide.component';
import { CompareComponent } from './compare/compare.component';
import { BAndFComponent } from './home/b-and-f/b-and-f.component';
import { FAndDComponent } from './home/f-and-d/f-and-d.component';
import { HeaderComponent } from './home/header/header.component';

import { MentorComponent } from './home/mentor/mentor.component';
import { ServicesComponent } from './home/services/services.component';
import { Check1Component } from './home/check1/check1.component';
import { Check2Component } from './home/check2/check2.component';
import { Check3Component } from './home/check3/check3.component';

import { Check5Component } from './home/check5/check5.component';
import { Check6Component } from './home/check6/check6.component';
import { Check7Component } from './home/check7/check7.component';
import { Check8Component } from './home/check8/check8.component';

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import { AdminMentorComponent } from './modules/admin/components/admin-mentor/admin-mentor.component';
import { UserGuardsComponent } from './user/userr/components/user-guards/user-guards.component';
import { AdminGuard } from './modules/admin.guard';
import { UserGuard } from './user/user.guard';
import { LoginadminComponent } from './shared/loginadmin/loginadmin.component';
import { LoginGuard } from './shared/loginadmin/login';





const routes: Routes = [
  { path: '', redirectTo: 'home',pathMatch: 'full'},
  { path: 'home' , component: HomeComponent },
  { path: 'menuProduct/list/:id' , component: CompareComponent},
  { path: 'bandf', component: BAndFComponent},
  { path: 'fandd', component: FAndDComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'mentor', component: MentorComponent},
  { path: 'motification', component: Notification},

  { path: 'services', component: ServicesComponent},
  {path: 'slide', component: SlideComponent},

  { path: 'cart', component: CartComponent},
  // { path: 'detail/:id', component: DetailComponent},
  { path: 'check1' , component: Check1Component},
  { path: 'detail/:id' , component: Check2Component },
  { path: 'check3' , component: Check3Component},

  { path: 'so+do+web' , component: Check5Component},
  { path: 'phap+li+va+bao+mat' , component: Check6Component},
  { path: 'check7' , component: Check7Component},
  { path: 'check8' , component: Check8Component},
  { path: 'search' , component: SearchComponent},
  { path: 'menuProduct2/list/:id' , component: watchmoreComponent},
  { path: 'login-admin' , component: LoginadminComponent},




  {path:'admin',
  canActivate:[AdminGuard,AuthGuard,LoginGuard],
  loadChildren: ()=>
  import('./modules/admin/admin.module').then((m)=>m.AdminModule)},
  {path:'user',
  canActivate:[UserGuard,AuthGuard],
  loadChildren: ()=>
  import('./user/userr/userr.module').then((m)=>m.UserrModule)},


  {path:'**', component:PageNotFoundComponent}

];



@NgModule({

  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    HttpClientModule
    ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
