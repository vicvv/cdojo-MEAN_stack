import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getUsers(){
    return this._http.get('/users');
  }
  getOneUser(id:string){
    return this._http.get('/users/' + id);
  }

  postOneUser(){
    let name = '1';
      return this._http.get('/users/new/' + name);
  }


  saveUserData(user_id, gold, log) {
    let data = {
      'gold': gold,
      'log': log
    }
    console.log("data to save",data, "user id", user_id)
    return this._http.put(`/users/edit/${user_id}`, data);
  }

}
