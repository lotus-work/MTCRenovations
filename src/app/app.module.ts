import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { SimpleNavbarComponent } from './components/simple-navbar/simple-navbar.component';
import { BasementComponent } from './components/basement/basement.component';
import { CareerComponent } from './components/career/career.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    HowItWorksComponent,
    SimpleNavbarComponent,
    BasementComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
