import { Component, OnInit } from '@angular/core';
import { ApiProvider } from '../../../providers/utilities/utility';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userPayload: any = {};
  error : any = {};
  successmessage: any;
  errormessage: any;
  loader: any;
  constructor(public api: ApiProvider) { }
 
  ngOnInit(): void {
    if(this.api.getStorage('isLogin')){
      window.location.href = '';
    }
  }
login() {
    this.error = {};
    if(!this.userPayload.email) this.error.email = true;
    if(!this.userPayload.password) this.error.password = true;

    if(Object.keys(this.error).length) return;
    var re = /\S+@\S+\.\S+/;
    if(!re.test(this.userPayload.email)){
      this.error.invalidemail = true;
      return;
    }
    if(Object.keys(this.error).length) return;
    
    this.loader = true;
    this.api.login(this.userPayload)
    .then((result: any) => {
      this.loader = false;
      if(result.error){
        this.errormessage = result.message;
      }else{
        localStorage.setItem("isLogin", 'true');
        localStorage.setItem("userdata",JSON.stringify(result.user));

        window.location.href='';
        //this.successmessage = "Vous avez été abonné avec succès.";
        this.userPayload = {
          email: '',
          password: '',
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

