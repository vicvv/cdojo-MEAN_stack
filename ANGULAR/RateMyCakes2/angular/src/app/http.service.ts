import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getCakes(){
    return this._http.get('/cakes');
  }
  newCake(cake){
    return this._http.post('/cakes', cake);
  }
  newComment(id, comment){
    return this._http.post('/cakes/comment/'+id, comment)
  }
  findOneCake(id){
    return this._http.get('/cakes/'+id);
  }
}



  // getTasks(){
  //   return this._http.get('/tasks');
  // }
  // getTasksById(id:string){
  //   return this._http.get("/tasks/" + id);
  // }
  // addTask(newTask){
  //   return this._http.post('/tasks', newTask);
  // }
  // editTaskById(editTask){
  //   return this._http.put(`/tasks/${editTask._id}`, editTask);
  // }
  // deleteTask(task){
  //   return this._http.delete(`/tasks/${task._id}`, task);
  // }
//}
