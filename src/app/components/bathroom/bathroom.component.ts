import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { GetAQuoteService } from 'src/app/services/get-a-quote/get-a-quote.service';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { createMask } from '@ngneat/input-mask';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-bathroom',
  templateUrl: './bathroom.component.html',
  styleUrls: ['./bathroom.component.css']
})
export class BathroomComponent {



  options: any = {
    componentRestrictions: { country: 'CA' }
  }
  
  selectedServiceRequiredGetQuote: any = [];

  fullAddress: string = "";

  phoneNumberInputMask = createMask({
    mask: '(999) 999-9999',
  });
  addPhoneNumberInputMask = createMask({
    mask: '(999) 999-9999',
  });
  quotePhoneNumberInputMask = createMask({
    mask: '(999) 999-9999',
  });
  selectChangeHandler1(event: any) {
    // this.selectedServiceRequiredGetQuote = event.target.value;
    this.selectedServiceRequiredGetQuote.push(event.target.value);
    console.log(this.selectedServiceRequiredGetQuote);
  }

  removeRev(indexNumber: number, indexVal:string) {
    
    if(this.selectedServiceRequiredGetQuote[indexNumber] == indexVal)
    {
     this.selectedServiceRequiredGetQuote.splice(indexNumber,1);
    }
    console.log(this.selectedServiceRequiredGetQuote);
 
   }
   
  handleAddressChange(address: Address) {
    this.fullAddress = address.formatted_address;
    
  }
  
  getAQuoteServicesReq = [
    { id: 1, label: "Choose From Below", status: true },
    { id: 2, label: "Basement", status: false },
    { id: 3, label: "Bathroom", status: false },
    { id: 4, label: "Kitchen", status: false },
    { id: 5, label: "Flooring/Stairs", status: false },
    { id: 6, label: "Painting", status: false }
  ];

  constructor(private spinner: NgxSpinnerService, private http: HttpClient, private _getaquote: GetAQuoteService, private _toast: NgToastService) {}

  quoteFormData(form: NgForm) {
    console.log(form.value);
    console.log(this.selectedServiceRequiredGetQuote);
    if (this.selectedServiceRequiredGetQuote == '') {
      this.selectedServiceRequiredGetQuote = 'Basement';
    }
    this.spinner.show();

    this._getaquote.sendGetQuoteData(form.value.yourName, form.value.email, form.value.phoneNumber, this.fullAddress, this.selectedServiceRequiredGetQuote,).subscribe(
      res => {
        setTimeout(() => {
         
          this.spinner.hide();
        }, 1000);
        this._toast.success({ detail: "SUCCESS", summary: 'Form successfully submitted', position: 'br' });
        setTimeout(function () {
          window.location.reload();
        }, 1000);

      },
      err => {
        this._toast.warning({ detail: " FAILED", summary: 'Please try after sometime', position: 'br' });

      }, () => console.log("QUOTE FORM SUMBITTED SUCCESSFULLY"))
  }
}
