import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ninga Gold';
  user;
  user_id = '';
  gold = 0;
  //log_info = '';
  log = [];
  userchoise ='';

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.createNewUser();
  }
  // connectUserToService(){
  //   let observable = this._httpService.getOneUser("5d7d3011f3c0ab1071975ce5");
  //   observable.subscribe((data:any)=>{
  //   console.log(data['user'].name);
  //   console.log(data['user']._id);
  //   console.log(data['user'].gold);
  //   console.log(data['user'].log);
  //   this.user_id = data['user']._id;
  //   this.gold = data['user'].gold;
  //   this.log = data['user'].log;
  //   })
  // }

  createNewUser(){

    let observable = this._httpService.postOneUser();
    observable.subscribe((data:any) =>{
    //console.log("data:",data)
    this.user = data['user']
    this.user_id = data['user']._id;
    //console.log("User data", this.user);
    console.log("Userid", this.user_id);

    })
  }

  
  save(user_id, gold, log){
    console.log("I am in save user data..." )
      let observable = this._httpService.saveUserData(user_id, gold, log);
      observable.subscribe(data=>{

      });
  }

  random(min, max){
  	return (Math.floor(Math.random() * (min-max))+ max)
  }

  totGold(gold) {
    this.gold += gold;
  }

  farm() {
    let goldEarned = this.random(10,20);
    this.totGold(goldEarned);
    let msg = `You earned ${goldEarned} at the farm.`;
    this.log.push(msg);
    //this.updateUserInfo(this.user_id, goldEarned, msg);
  }

  cave() {
    let goldEarned = this.random(5,10);
    this.totGold(goldEarned);
    let msg = `You earned ${goldEarned} at the cave.`;
    this.log.push(msg);
    //this.updateUserInfo(this.user_id, goldEarned, msg);
  }

  house() {
    let goldEarned = this.random(2,5);
    this.totGold(goldEarned);
    let msg = `You earned ${goldEarned} at the house.`;
    this.log.push(msg);
    //this.updateUserInfo(this.user_id, goldEarned, msg);
  }

  casino() {
    let goldEarned = this.random(-50,51);
    this.totGold(goldEarned);
    let msg = '';
    if (goldEarned >= 0 ) {
      msg = `You won ${goldEarned} at the casino.`;
    }
    else {
      msg = `You lost ${goldEarned * -1} at the casino.`;
    }
    this.log.push(msg);
    //this.updateUserInfo(this.user_id, goldEarned, msg);
  }
  reset(){
    this.gold = 0;
    this.log = [];
  }
}



