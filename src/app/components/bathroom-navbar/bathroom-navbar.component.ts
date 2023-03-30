import { Component } from '@angular/core';

@Component({
  selector: 'app-bathroom-navbar',
  templateUrl: './bathroom-navbar.component.html',
  styleUrls: ['./bathroom-navbar.component.css']
})
export class BathroomNavbarComponent {

  logo: string = "../../../assets/img/logo.png";
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true)
  }
  scroll = (): void => {

    let scrollHeigth;
 
    if(window.innerWidth < 350){
     scrollHeigth = 150;
    }else if(window.innerWidth < 500 && window.innerWidth > 350){
     scrollHeigth = 250;
    }else if(window.innerWidth < 700 && window.innerWidth > 500){
     scrollHeigth = 350;
    }else if(window.innerWidth < 1000 && window.innerWidth > 700){
     scrollHeigth = 500;
    }else{
      scrollHeigth = 650;
    }
    if(window.scrollY >= scrollHeigth){
      document.body.style.setProperty('--navbar-scroll', "white");
      document.body.style.setProperty('--navbar-scroll-text', "black");
      document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 12px -5px #000000");
      document.body.style.setProperty('--navlink-scroll-text', "black");
      
      this.logo = "../../../assets/img/logo.png";
      
    }else if(window.scrollY < scrollHeigth){
      document.body.style.setProperty('--navbar-scroll', "transparent");
      document.body.style.setProperty('--navbar-scroll-text', "black");
      document.body.style.setProperty('--navbar-scroll-shadow', "none");
      document.body.style.setProperty('--navlink-scroll-text', "black");
      this.logo = "../../../assets/img/logo.png";
   
    }
   }
}