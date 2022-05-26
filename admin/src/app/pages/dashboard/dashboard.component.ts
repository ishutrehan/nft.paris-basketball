import { Component, OnInit } from '@angular/core';
import { ApiProvider } from '../../../providers/utilities/utility';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public api: ApiProvider) {
    if(!this.api.getStorage('isLogin')){
      window.location.href = '/login';
    }
   }

  ngOnInit(): void {
  }

}
