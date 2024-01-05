import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BasementGetFreeQuoteComponent } from './components/basement-get-free-quote/basement-get-free-quote.component';
import { BasementOurProcessComponent } from './components/basement-our-process/basement-our-process.component';
import { BasementOurWorkComponent } from './components/basement-our-work/basement-our-work.component';
import { BasementComponent } from './components/basement/basement.component';
import { BathroomAboutUsComponent } from './components/bathroom-about-us/bathroom-about-us.component';
import { BathroomGetFreeQuoteComponent } from './components/bathroom-get-free-quote/bathroom-get-free-quote.component';
import { BathroomHowItWorksComponent } from './components/bathroom-how-it-works/bathroom-how-it-works.component';
import { BathroomOurWorkComponent } from './components/bathroom-our-work/bathroom-our-work.component';
import { BathroomWhyUsComponent } from './components/bathroom-why-us/bathroom-why-us.component';
import { BathroomComponent } from './components/bathroom/bathroom.component';
import { CareerComponent } from './components/career/career.component';
import { FinancialComponent } from './components/financial/financial.component';
import { FlooringAboutUsComponent } from './components/flooring-about-us/flooring-about-us.component';
import { FlooringGetFreeQuoteComponent } from './components/flooring-get-free-quote/flooring-get-free-quote.component';
import { FlooringHowItWorksComponent } from './components/flooring-how-it-works/flooring-how-it-works.component';
import { FlooringOurWorkComponent } from './components/flooring-our-work/flooring-our-work.component';
import { FlooringWhyUsComponent } from './components/flooring-why-us/flooring-why-us.component';
import { FlooringComponent } from './components/flooring/flooring.component';
import { HomeComponent } from './components/home/home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { KitchenAboutUsComponent } from './components/kitchen-about-us/kitchen-about-us.component';
import { KitchenGetFreeQuoteComponent } from './components/kitchen-get-free-quote/kitchen-get-free-quote.component';
import { KitchenHowItWorksComponent } from './components/kitchen-how-it-works/kitchen-how-it-works.component';
import { KitchenOurWorkComponent } from './components/kitchen-our-work/kitchen-our-work.component';
import { KitchenWhyUsComponent } from './components/kitchen-why-us/kitchen-why-us.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { PaintingAboutUsComponent } from './components/painting-about-us/painting-about-us.component';
import { PaintingGetFreeQuoteComponent } from './components/painting-get-free-quote/painting-get-free-quote.component';
import { PaintingHowItWorksComponent } from './components/painting-how-it-works/painting-how-it-works.component';
import { PaintingOurWorkComponent } from './components/painting-our-work/painting-our-work.component';
import { PaintingWhyUsComponent } from './components/painting-why-us/painting-why-us.component';
import { PaintingComponent } from './components/painting/painting.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { PaintingCareerComponent } from './components/painting-career/painting-career.component';
import { FlooringCareerComponent } from './components/flooring-career/flooring-career.component';
import { KitchenCareerComponent } from './components/kitchen-career/kitchen-career.component';
import { BathroomCareerComponent } from './components/bathroom-career/bathroom-career.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'basement/how-it-works', component: HowItWorksComponent  },
  { path: 'basement/about-us', component: AboutUsComponent},
  { path: 'basement', component: BasementComponent},
  { path: 'basement/careers', component: CareerComponent},
  {path: 'basement/financing', component: FinancialComponent},
  {path: 'basement/why-mtc', component: WhyUsComponent},
  {path: 'basement/our-clients', component:OurClientsComponent},
  {path: 'basement/our-work', component: BasementOurWorkComponent},
  {path: 'basement/get-free-quote', component: BasementGetFreeQuoteComponent},

  {path: 'basement/our-process', component: BasementOurProcessComponent},
  {path: 'bathroom', component: BathroomComponent},
  {path: 'bathroom/how-it-works', component: BathroomHowItWorksComponent},
  {path: 'bathroom/about-us', component: BathroomAboutUsComponent},
  {path: 'bathroom/why-mtc', component: BathroomWhyUsComponent},
  {path: 'bathroom/our-work', component: BathroomOurWorkComponent},
  {path: 'bathroom/get-free-quote', component: BathroomGetFreeQuoteComponent},
  { path: 'bathroom/careers', component: BathroomCareerComponent},

  {path: 'kitchen', component: KitchenComponent},
  {path: 'kitchen/about-us', component: KitchenAboutUsComponent},
  {path: 'kitchen/why-mtc', component: KitchenWhyUsComponent},
  {path: 'kitchen/how-it-works', component: KitchenHowItWorksComponent},
  {path: 'kitchen/our-work', component: KitchenOurWorkComponent},
  {path: 'kitchen/get-free-quote', component: KitchenGetFreeQuoteComponent},
  { path: 'kitchen/careers', component: KitchenCareerComponent},

  {path: 'flooring', component: FlooringComponent},
  {path: 'flooring/about-us', component: FlooringAboutUsComponent},
  {path: 'flooring/why-mtc', component: FlooringWhyUsComponent},
  {path: 'flooring/how-it-works', component: FlooringHowItWorksComponent},
  {path: 'flooring/our-work', component: FlooringOurWorkComponent},
  {path: 'flooring/get-free-quote', component: FlooringGetFreeQuoteComponent},
  {path: 'flooring/careers', component: FlooringCareerComponent},

  {path: 'painting', component: PaintingComponent},
  {path: 'painting/about-us', component: PaintingAboutUsComponent},
  {path: 'painting/why-mtc', component: PaintingWhyUsComponent},
  {path: 'painting/how-it-works', component: PaintingHowItWorksComponent},
  {path: 'painting/our-work', component: PaintingOurWorkComponent},
  {path: 'painting/get-free-quote', component: PaintingGetFreeQuoteComponent},
  {path: 'painting/careers', component: PaintingCareerComponent},

  {path: 'thank-you', component: ThankYouComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
