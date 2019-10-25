import { Component } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _httpService: HttpService){}

  mytitle = 'List of Tasks';
  newTask: any;
  editTask: any;
  viewOneTask: any;
  togleEdit = false;
  togleView = false;
  togleNew = false;
  tasks = [];
  task = '';

  ngOnInit() {
    this.newTask = { title: "", description: "" }
    //this.editTask = { title: "", description:  }
    //this.allTasks();
  }

  allTasks(){
    const observable = this._httpService.getTasks();
    observable.subscribe((data) =>
      {
        console.log("data", data)
        this.tasks = data['data'];
        console.log("tasks", this.tasks);
      });
  }

  editTaskForm(task){
    this.editTask = {_id: task._id, title: task.title, description: task.description};
    this.togleEdit = true;
  }

  onEditTask(){
    let observable = this._httpService.editTaskById(this.editTask);
    observable.subscribe(data =>{
      this.allTasks();
      console.log(data);
      this.togleEdit = false;

    })

  }

  viewTask(task){
    this.viewOneTask = {_id: task._id, title: task.title, description: task.description};
    if(this.togleView == false){
      this.togleView = true;
    }
    else{
      this.togleView = false;
    }
  }

  addNewTask(){
    this.togleNew = true;
  }

  createNewTask(){
      let observable = this._httpService.addTask(this.newTask);
      observable.subscribe(data => {
      console.log("Create New Task!!!");
      this.newTask = { title: "", description: "" }
      this.allTasks();
      this.togleNew = false;
    });
  }
  deleteTask(id){
    let observable = this._httpService.deleteTask(id);
    observable.subscribe (data =>{
    this.allTasks()
    });
  }
}


