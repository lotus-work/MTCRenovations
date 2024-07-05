import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { SimpleNavbarComponent } from './components/simple-navbar/simple-navbar.component';
import { BasementComponent } from './components/basement/basement.component';
import { CareerComponent } from './components/career/career.component';
import { FinancialComponent } from './components/financial/financial.component';
import { PageIntroComponent } from './components/page-intro/page-intro.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { BathroomComponent } from './components/bathroom/bathroom.component';
import { BathroomNavbarComponent } from './components/bathroom-navbar/bathroom-navbar.component';
import { BathroomHowItWorksComponent } from './components/bathroom-how-it-works/bathroom-how-it-works.component';
import { BathroomAboutUsComponent } from './components/bathroom-about-us/bathroom-about-us.component';
import { BathroomWhyUsComponent } from './components/bathroom-why-us/bathroom-why-us.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { KitchenWhyUsComponent } from './components/kitchen-why-us/kitchen-why-us.component';
import { KitchenHowItWorksComponent } from './components/kitchen-how-it-works/kitchen-how-it-works.component';
import { KitchenAboutUsComponent } from './components/kitchen-about-us/kitchen-about-us.component';
import { KitchenNavbarComponent } from './components/kitchen-navbar/kitchen-navbar.component';
import { FlooringComponent } from './components/flooring/flooring.component';
import { FlooringAboutUsComponent } from './components/flooring-about-us/flooring-about-us.component';
import { FlooringHowItWorksComponent } from './components/flooring-how-it-works/flooring-how-it-works.component';
import { FlooringNavbarComponent } from './components/flooring-navbar/flooring-navbar.component';
import { FlooringWhyUsComponent } from './components/flooring-why-us/flooring-why-us.component';
import { PaintingComponent } from './components/painting/painting.component';
import { PaintingAboutUsComponent } from './components/painting-about-us/painting-about-us.component';
import { PaintingHowItWorksComponent } from './components/painting-how-it-works/painting-how-it-works.component';
import { PaintingNavbarComponent } from './components/painting-navbar/painting-navbar.component';
import { PaintingWhyUsComponent } from './components/painting-why-us/painting-why-us.component';
import { BasementOurWorkComponent } from './components/basement-our-work/basement-our-work.component';
import { BasementOurProcessComponent } from './components/basement-our-process/basement-our-process.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FlooringOurWorkComponent } from './components/flooring-our-work/flooring-our-work.component';
import { PaintingOurWorkComponent } from './components/painting-our-work/painting-our-work.component';
import { KitchenOurWorkComponent } from './components/kitchen-our-work/kitchen-our-work.component';
import { BathroomOurWorkComponent } from './components/bathroom-our-work/bathroom-our-work.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgToastModule } from "ng-angular-popup";
import { InputMaskModule } from "@ngneat/input-mask";
import { BasementGetFreeQuoteComponent } from './components/basement-get-free-quote/basement-get-free-quote.component';
import { BathroomGetFreeQuoteComponent } from './components/bathroom-get-free-quote/bathroom-get-free-quote.component';
import { KitchenGetFreeQuoteComponent } from './components/kitchen-get-free-quote/kitchen-get-free-quote.component';
import { PaintingGetFreeQuoteComponent } from './components/painting-get-free-quote/painting-get-free-quote.component';
import { FlooringGetFreeQuoteComponent } from './components/flooring-get-free-quote/flooring-get-free-quote.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { BathroomCareerComponent } from './components/bathroom-career/bathroom-career.component';
import { FlooringCareerComponent } from './components/flooring-career/flooring-career.component';
import { KitchenCareerComponent } from './components/kitchen-career/kitchen-career.component';
import { PaintingCareerComponent } from './components/painting-career/painting-career.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { NewleadintakeComponent } from './components/newleadintake/newleadintake.component';
import { NewvendorformComponent } from './components/newvendorform/newvendorform.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    HowItWorksComponent,
    SimpleNavbarComponent,
    BasementComponent,
    CareerComponent,
    FinancialComponent,
    PageIntroComponent,
    WhyUsComponent,
    OurClientsComponent,
    BathroomComponent,
    BathroomNavbarComponent,
    BathroomHowItWorksComponent,
    BathroomAboutUsComponent,
    BathroomWhyUsComponent,
    KitchenComponent,
    KitchenWhyUsComponent,
    KitchenHowItWorksComponent,
    KitchenAboutUsComponent,
    KitchenNavbarComponent,
    FlooringComponent,
    FlooringAboutUsComponent,
    FlooringHowItWorksComponent,
    FlooringNavbarComponent,
    FlooringWhyUsComponent,
    PaintingComponent,
    PaintingAboutUsComponent,
    PaintingHowItWorksComponent,
    PaintingNavbarComponent,
    PaintingWhyUsComponent,
    BasementOurWorkComponent,
    BasementOurProcessComponent,
    TestimonialsComponent,
    ContactUsComponent,
    FlooringOurWorkComponent,
    PaintingOurWorkComponent,
    KitchenOurWorkComponent,
    BathroomOurWorkComponent,
    BasementGetFreeQuoteComponent,
    BathroomGetFreeQuoteComponent,
    KitchenGetFreeQuoteComponent,
    PaintingGetFreeQuoteComponent,
    FlooringGetFreeQuoteComponent,
    CopyrightComponent,
    BathroomCareerComponent,
    FlooringCareerComponent,
    KitchenCareerComponent,
    PaintingCareerComponent,
    ThankYouComponent,
    NewleadintakeComponent,
    NewvendorformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GooglePlaceModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgToastModule,
    InputMaskModule.forRoot({ inputSelector: 'input', isAsync: true })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
