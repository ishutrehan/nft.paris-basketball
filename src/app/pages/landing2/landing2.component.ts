import { Component, OnInit } from '@angular/core';
import { ApiProvider } from '../../../providers/utilities/utility';

@Component({
  selector: 'app-landing2',
  templateUrl: './landing2.component.html',
  styleUrls: ['./landing2.component.css']
})
export class Landing2Component implements OnInit {
  userPayload: any = {};
  error : any = {};
  successmessage: any;
  errormessage: any;
  loader: any;
  constructor(public api: ApiProvider) { }

  ngOnInit(): void {
    this.userPayload = {
      receive_news: true
    }
  }
  subscribe() {
    this.error = {};
    if(!this.userPayload.first_name) this.error.first_name = true;
    if(!this.userPayload.last_name) this.error.last_name = true;
    if(!this.userPayload.email) this.error.email = true;
    if(Object.keys(this.error).length) return;
    var re = /\S+@\S+\.\S+/;
    if(!re.test(this.userPayload.email)){
      this.error.invalidemail = true;
      return;
    }
    if(Object.keys(this.error).length) return;
    
    this.loader = true;
    this.api.subscribe(this.userPayload)
    .then((result: any) => {
      this.loader = false;
      if(result.error){
        this.errormessage = result.message;
      }else{
        this.successmessage = "Vous avez été abonné avec succès.";
        this.userPayload = {
          first_name: '',
          last_name: '',
          email: '',
          receive_news: true
        }
        
      }
      }, err => {
        //console.log("err", err);
      })
  }
  closeError(){
    this.errormessage = '';
  }
  closeSuccess(){
    this.successmessage = '';
  }

}
