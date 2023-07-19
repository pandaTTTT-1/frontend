import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home.component';

import { FAndDComponent } from './f-and-d/f-and-d.component';
import { HeaderComponent } from './header/header.component';

import { MentorComponent } from './mentor/mentor.component';
import { ServicesComponent } from './services/services.component';
import { SlideComponent } from './slide/slide.component';

import { Collection4SeasonsComponent } from './collection4-seasons/collection4-seasons.component';

import { HomeRoutingModule } from './home-routing';
import { BAndFComponent } from './b-and-f/b-and-f.component';
import { Check1Component } from './check1/check1.component';
import { FilterByMenuIdPipe } from '../model/filterByMenuId.pipe';
import { watchmoreComponent } from './watchmore/watchmore.component';





@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      NgbModule,
      NouisliderModule,
      RouterModule,
      JwBootstrapSwitchNg2Module,
      BrowserModule,
      AppRoutingModule,
      HomeRoutingModule,
      HomeRoutingModule,
      NgbCarouselModule

  ],
  declarations: [
     HomeComponent,
  
     FAndDComponent,
     HeaderComponent,
  
     MentorComponent,
   
     ServicesComponent,
     SlideComponent,
   
     Collection4SeasonsComponent,
    
     BAndFComponent,
     FilterByMenuIdPipe,
     watchmoreComponent,
     
     
   ],
  exports:[ HomeComponent ]
})
export class HomeModule {}
