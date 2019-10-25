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
  getPrObjecById(id: string) {
    return this.http.get('/onep/' + id);
  }

  addPrObject(newPObject) {
    // console.log('I am sending new object to my mongoose router', newPObject);
    return this.http.post('/newp', newPObject);
  }

  deletePrObject(id) {
    // console.log('I am in delete p object service' , id);
    return this.http.delete('/deletep/' + id);
  }

  editPrObject(obj) {
    // console.log('I am sending edit to mongoose router ', obj);
    return this.http.put(`/editp/${obj._id}`, obj);
  }

  addScObject(newSObject) {
    // console.log('I am sending new object to my mongoose to create secondary document', newSObject);
    return this.http.post('/news', newSObject);
  }

  showSec(pid) {
    // console.log( 'sending pid to get secondary object attached to pobject' , pid);
    return this.http.get('/showalls/' + pid);
  }

  deleteSec(id){
    // console.log('deleting secondary:' ,id);
    return this.http.delete('/deletes/' + id);
  }

  editSecd(objject) {
    console.log('Editing secondary', objject);
    return this.http.put(`/editsec/${objject._id}`, objject);
  }

}
