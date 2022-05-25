import { Component, OnInit } from '@angular/core';
import { ApiProvider } from '../../../providers/utilities/utility';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  displayStyle: any;
  successmessage: any;
  errormessage: any;
  userPayload: any = {};
  loader: any;
  constructor(public api: ApiProvider) {

    this.displayStyle = "none";
    this.userPayload = {
      email: ""
    }
   }

  ngOnInit(): void {
  }

  subscriberPopup(){
    this.userPayload.email = '';
    this.displayStyle = "block";
  }
  closepopup(){
    this.displayStyle = "none";
  }
  
  subscribe() {
    this.loader = true;
    if(this.userPayload.email == '') {
      this.errormessage = "Adresse e-mail est nécessaire";
      return;
    }
    
    var re = /\S+@\S+\.\S+/;
    if(!re.test(this.userPayload.email)){
      this.errormessage = "S'il vous plaît, mettez une adresse email valide";
      return;
    }
    this.api.subscribe(this.userPayload)
    .then((result: any) => {
      this.loader = false;
      if(result.error){
        this.errormessage = result.message;
      }else{
        this.successmessage = "Vous avez été abonné avec succès.";
        this.userPayload.email = '';
        setTimeout(() => {
          this.displayStyle = "none";
        }, 3000);
        
      }
      }, err => {
        //console.log("err", err);
      })
  }
  closeerrormessage(){
    this.errormessage = null;
  }
  
  closesuccessmessage(){
    this.successmessage = null;
  }
}
