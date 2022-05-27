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

  subscribers(payload: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + '/subscribers.php', payload).subscribe(data => {
        resolve(data);
      }, (err: any) => {
        reject(err);
      });
    });
  }
  users(payload: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + '/getuser.php', payload).subscribe(data => {
        resolve(data);
      }, (err: any) => {
        reject(err);
      });
    });
  }
  login(payload: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + '/login.php', payload).subscribe(data => {
        resolve(data);
      }, (err: any) => {
        reject(err);
      });
    });
  }
  
  // For set data inside the local Storage
  setStorage(key: any, value:any) {
    localStorage.setItem(key, value);

  }
  // For get data from local Storage
  getStorage(key:any) {
    if(localStorage.getItem(key)){
      return localStorage.getItem(key);
    }else{
      return false;
    }
  }

  removeStorage(key:any) {
    localStorage.removeItem(key);
  }
}



