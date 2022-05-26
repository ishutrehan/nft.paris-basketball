import { Component, OnInit } from '@angular/core';
import { ApiProvider } from '../../../providers/utilities/utility';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public api: ApiProvider) { }

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
