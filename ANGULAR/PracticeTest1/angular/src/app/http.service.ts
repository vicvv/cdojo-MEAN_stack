import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  getPrObjects(){
    return this.http.get('/allobjects');
  }
  getPrObjecById(id: string){
    return this.http.get('/onep/' + id);
  }

  addPrObject(newPObject){
    console.log('I am sending new object to my mongoose router', newPObject);
    return this.http.post('/newp', newPObject);
  }

  deletePrObject(id) {
    return this.http.delete('/deletp/' + id);
  }

  editPrObject(id,obj) {
    return this.http.put(`/editp/${id}`, obj);
  }

  addScObject(newSObject){
    console.log('I am sending new object to my mongoose to create secondary component',newSObject);
    return this.http.post('/news', newSObject);
  }

}
