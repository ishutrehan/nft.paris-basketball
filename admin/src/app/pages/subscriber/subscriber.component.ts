import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Subject} from 'rxjs';
import { ApiProvider } from '../../../providers/utilities/utility';


@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})
export class SubscriberComponent implements OnInit {
baseUrl: any;
persons: any;
dtOptions:any = {};
dtTrigger: Subject<any> = new Subject<any>();
  constructor(public http: HttpClient, public api: ApiProvider) { }

  ngOnInit(): void {
      this.subscriber();

  }
  
  subscriber(){
      this.api.subscribers({}).then((result: any) => {
        this.persons = result.subscribers;
        this.dtTrigger.next( this.persons);
      }, err => {
        //console.log("err", err);
      })

    
  }


}
