import { Component, OnInit } from '@angular/core';
import { ApiProvider } from '../../../providers/utilities/utility';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userdata:any ={};

  constructor(public api: ApiProvider) {
    if(this.api.getStorage('userdata')) {
      var userdata: any = this.api.getStorage('userdata')   
      this.userdata = JSON.parse(userdata) ;
    }
  }

  ngOnInit(): void {

  }


}
