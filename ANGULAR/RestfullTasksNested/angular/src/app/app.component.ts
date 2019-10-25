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
  parentVar:any
  togleView = false;
  tasks = [];
  headElements =[ "Title", "Description", "Action"]

  ngOnInit() {
    // this.newTask = { title: "", description: "" }
    // this.editTask = { title: "", description:  }
    this.allTasks();
  }

  allTasks(){
    const observable = this._httpService.getTasks();
    observable.subscribe((data) => {
        console.log('data', data );
        this.tasks = data[ 'data' ];
        console.log('tasks', this.tasks);
      });
  }
  taskToShow(task) {
  //   if (this.parentVar === task){
  //     this.parentVar = null;
  //   }
  //   else{
  //     this.parentVar = task;
  //   }

  // }
  (this.parentVar === task) ? this.parentVar = null : this.parentVar = task;
  }

  invoke(event) {
    console.log('invoke', event);
  }
}


