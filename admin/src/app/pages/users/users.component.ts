import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Subject} from 'rxjs';
import { ApiProvider } from '../../../providers/utilities/utility';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  baseUrl: any;
  users: any;
  dtOptions:any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(public http: HttpClient, public api: ApiProvider) { }

  ngOnInit(): void {
    if(!this.api.getStorage('isLogin')){
      window.location.href = '/login';
    }
    this.user(); 
  }
  user(){
    this.api.users({}).then((result: any) => {
      this.users = result.users;
      this.dtTrigger.next(this.users);
    }, err => {
      //console.log("err", err);
    }) 
}
}
