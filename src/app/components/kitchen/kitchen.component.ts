import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { GetAQuoteService } from 'src/app/services/get-a-quote/get-a-quote.service';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { createMask } from '@ngneat/input-mask';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent {


  @ViewChild('nameInput')
  nameInput!: ElementRef;
  @ViewChild('addressInput')
  addressInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('phoneInput') phoneInput!: ElementRef;


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

  quoteFormData(form : NgForm) {
    console.log(form.value);
    console.log(this.selectedServiceRequiredGetQuote);
    if (this.selectedServiceRequiredGetQuote == '') {
        this.selectedServiceRequiredGetQuote = 'Basement';
    }
    this.spinner.show();

    console.log(this.fullAddress);

    // if(this.fullAddress == ''){
    //   this.fullAddress = form.value.address;
    // }

    
form.value.yourName  = this.nameInput.nativeElement.value;
form.value.email  = this.emailInput.nativeElement.value;
form.value.phoneNumber  = this.phoneInput.nativeElement.value;
this.fullAddress = this.addressInput.nativeElement.value;
console.log(this.fullAddress);

    this._getaquote.sendGetQuoteData(form.value.yourName, form.value.email, form.value.phoneNumber, this.fullAddress, this.selectedServiceRequiredGetQuote,).subscribe(res => {


      if (res.status == "success") {
  

        setTimeout(() => {

          this.spinner.hide();
      }, 1000);
      this._toast.success({detail: "SUCCESS", summary: 'Form successfully submitted', position: 'br'});
      setTimeout(function () {
        window.location.href = '/thank-you'
      }, 1000);

    } else if (res.status == "error") {
      alert(res.message);
      location.reload;
        setTimeout(() => {
            this.spinner.hide();
            window.location.reload();
        }, 1000);

    } else if (res.status == "timeout") {
      alert(res.message);
      location.reload;
        setTimeout(() => {
            this.spinner.hide();
            window.location.reload();
        }, 1000);

      }

    }, err => { // this._toast.warning({ detail: " FAILED", summary: 'Please try after sometime', position: 'br' });

      var errMsg = "";
      var arrErr = [];
      if(form.value.yourName == ""){
        arrErr.push("Your Name");
      }else if(form.value.email == ""){
        arrErr.push("Email");
      }else if(form.value.phoneNumber == ""){
        arrErr.push("Phone Number");
      }else if(this.fullAddress == ""){
        arrErr.push("Address");
      }else{
        errMsg = "Unable to submit. Please re-enter the details manually, in the form. Avoid selecting from pre filled options."
      }

      if(arrErr.length == 0)
      {
        errMsg = "Unable to submit. Maybe enter the details manually in the webform instead of Pre-filled options. or please try after sometime! ";
      }
      else{
        errMsg = "Unable to submit. Please re-enter " + arrErr + ", and try again. Try to enter the details manually."
      }


        alert(errMsg);
        location.reload;
        setTimeout(() => {
            this.spinner.hide();
            window.location.reload();
        }, 1000);
    }, () => console.log("QUOTE FORM SUMBITTED SUCCESSFULLY"))
}
}
