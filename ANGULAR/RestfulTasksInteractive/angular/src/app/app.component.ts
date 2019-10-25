import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    constructor(private _httpService: HttpService){}
    title = "Restful Tasks Interactive";
    tasks = [];
    onetsk = {};
    show = false;

    ngOnInit(){
      this.allTask();
    }

    toggle(){
      if(this.show == false){
        this.show = true;
      } else {
        this.show = false;
      }
    }
    allTask(){
      const observable = this._httpService.getTasks();
      observable.subscribe(data =>
        {
          console.log("data", data)
          this.tasks = data['data'];
          console.log("task", this.tasks)

        });
    }
    oneTask(id){
      console.log("one task")
      const observable = this._httpService.getTasksById(id);
      observable.subscribe(data =>
        {
          //console.log("data", data)
          this.onetsk = data;
          console.log(this.onetsk);
        });
    }


    // info(idx){
    //   this.task = this.tasks[idx];
    //
    // }
}
