import { Component, OnInit } from '@angular/core';
import { ApiProvider } from '../../../providers/utilities/utility';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userdata:any ={};
  constructor(public api: ApiProvider) { 
   if(this.api.getStorage('userdata')) {
     var userdata: any = this.api.getStorage('userdata')   
     this.userdata = JSON.parse(userdata) ;
   }
  }
  ngOnInit(): void {
  }
    islogin(){
      if(this.api.getStorage('isLogin')){
      return true;
    }else{
      return false;
    }
  }
 logout(){
    this.api.removeStorage('isLogin');
    window.location.href = '/login';
  }
}
