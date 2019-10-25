import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly pbase = '/api/primes';
  private readonly sbase = '/api/sec';
  constructor(private http: HttpClient) { }

  getPobjects() {
    return this.http.get(this.pbase);
    // return of(BOOKS);
  }

  getPobject(id: string) {
    console.log('Getting one p object ', id);
    return this.http.get(`${this.pbase}/${id}`);
  }

  updatePobject(pobj) {
    console.log ('Sending data for update:', pobj._id, pobj);
    return this.http.put(`${this.pbase}/${pobj._id}`, pobj);
  }

  createPobject(pobj) {
    return this.http.post(this.pbase, pobj);
  }

  removePobject(id: string) {
    console.log("service for delete object id: ", id);
    return this.http.delete(`${this.pbase}/${id}`);
  }

}
