import { Component , OnInit} from '@angular/core';
import { HttpService } from './http.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  info: string;
  tasks = [];
  task: string;
  last: string;
  lastesxt: string;
  ngOnInit() {
    this.title = 'Restful Tasks API';
    this.info = 'All the tasks';
    this.tasks = [];
    this.last ='';
    this.getObjects();

  }
  constructor(private _httpService: HttpService) {}

// connection to my httpService

  getObjects() {
    const observable = this._httpService.getTasks();
    observable.subscribe((data:any) => {
      //console.log(data);
      for (var item of data) {
        this.tasks.push(item.title);
      }
      this.last = this.tasks[this.tasks.length - 1];
      this.lastesxt = "The " + (this.tasks.length - 1) + " task is " + this.last;

    });
  }
}
