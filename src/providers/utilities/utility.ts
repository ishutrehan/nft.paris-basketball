import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  baseUrl: any;
  constructor(public http: HttpClient) {
    this.baseUrl = "https://nft.parisbasketball.paris/api";
  }

  subscribe(payload: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + '/subscribe.php', payload).subscribe(data => {
        resolve(data);
      }, (err: any) => {
        reject(err);
      });
    });
  }
  
}



