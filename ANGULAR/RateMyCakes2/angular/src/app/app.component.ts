import { Component } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Rate my cakes';
  newCake = {name: '', image: ''};
  comment = {rating: '', content: ''};
  cakes = [];
  myCake = {};
  imgClick = false;
  constructor(private httpService: HttpService){}

    ngOnInit() {

      this.getAllCake();
      this.comment = {rating: '', content: ''};
    }

  createCake() {
    let cake = this.httpService.newCake(this.newCake);
    cake.subscribe(data=> {
      console.log('create cake sucess ', data);
      this.newCake = {name: '', image: ''};
      this.getAllCake();
    })
  }
  getAllCake() {
    let cake = this.httpService.getCakes();
    cake.subscribe(data=>{
      console.log('get all cakes', data);
      this.cakes = data['cakes'];
      console.log('cakes : ', this.cakes);
    })
  }
  createComment(id) {
    // console.log('id : ',id, 'comment', this.comment);
    let obs = this.httpService.newComment(id, this.comment);
    obs.subscribe(data => {
      console.log('Create comment ', data);
      this.comment = {rating:'', content:''};
    })
  }
  getOneCake(id) {
    let obs = this.httpService.findOneCake(id);
    obs.subscribe(data => {
      console.log('received a cake that I look for ', data);
      this.myCake = data;
      this.imgClick = true;
    });
  }

  // allTasks(){
  //   const observable = this._httpService.getTasks();
  //   observable.subscribe((data) =>
  //     {
  //       console.log('data', data)
  //       this.tasks = data['data'];
  //       console.log('tasks', this.tasks);
  //     });
  // }

  // editTaskForm(task){
  //   this.editTask = {_id: task._id, title: task.title, description: task.description};
  //   this.togleEdit = true;
  // }

  // onEditTask(){
  //   let observable = this._httpService.editTaskById(this.editTask);
  //   observable.subscribe(data =>{
  //     this.allTasks();
  //     console.log(data);
  //     this.togleEdit = false;

  //   })

  // }

  // viewTask(task){
  //   this.viewOneTask = {_id: task._id, title: task.title, description: task.description};
  //   if(this.togleView == false){
  //     this.togleView = true;
  //   }
  //   else{
  //     this.togleView = false;
  //   }
  // }

  // addNewTask(){
  //   this.togleNew = true;
  // }

  // createNewTask(){
  //     let observable = this._httpService.addTask(this.newTask);
  //     observable.subscribe(data => {
  //     console.log('Create New Task!!!');
  //     this.newTask = { title: '', description: '' }
  //     this.allTasks();
  //     this.togleNew = false;
  //   });
  // }
  // deleteTask(id){
  //   let observable = this._httpService.deleteTask(id);
  //   observable.subscribe (data =>{
  //   this.allTasks()
  //   });
  // }
}


