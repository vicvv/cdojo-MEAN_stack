import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _httpService: HttpService){}

  mytitle = 'RATE My cake!';
  newCake: any;
  editCake = { rating: "", comment: "" };
  // viewOneTask: any;
  // togleEdit = false;
  // togleView = false;
  // togleNew = false;
  cakes = [];
  cake = {};
  parentVar:any;


  ngOnInit() {
    this.newCake = { title: "", imageurl: "" }
    this.editCake = { rating: "", comment: "" };
    this.allCakes();

  }

  allCakes(){
    console.log("I am in all cackes")
    const observable = this._httpService.getTasks();
    observable.subscribe((data) =>
      {
        //console.log("data", data)
        this.cakes = data['data'];
        //console.log("cakes", this.cakes);
      });
  }

  createNewCake(event: Event, form: NgForm){
    event.preventDefault();
    const observable = this._httpService.addTask(this.newCake);
    observable.subscribe(data => {
      this.cake = data;
      console.log("Create New Task!!!", this.cake);
      this.newCake= { title: "", imageurl: "" }
      this.allCakes();
      // this.togleNew = false;
      // form.reset();
  });
  }

  cakeToShow(cake){
    if (this.parentVar === cake){
      this.parentVar = null;
    }
    else{
      this.parentVar = cake;
    }
  }


onEditCake(cake_id, cakeEForm){
  console.log(cake_id, cakeEForm.value, { ...cakeEForm.value, _id: cake_id});
  // event.preventDefault();
  // this is only if  I do not want to have subcomponets
  let observable = this._httpService.editTaskById({ ...cakeEForm.value, _id: cake_id});
  observable.subscribe(data =>{
  // this.allTasks();
  console.log(data);
  // this.togleEdit = false;
  cakeEForm.reset();
//
  });

}

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


  // deleteTask(id){
  //   let observable = this._httpService.deleteTask(id);
  //   observable.subscribe (data =>{
  //   this.allTasks()
  //   });
  // }
}


