import { Component, OnInit, Input} from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() childVar: any;
  obj = {};
  //sObject = {name: '', content: '', rating: 5, _id: this.childVar._id};
  sObject = {name: '', content: '', rating: 5};
  checker = 1;
  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.getOneObject();
  }
  getOneObject(){
    const obs = this.http.getPrObjecById(this.route.snapshot.params.id);
    obs.subscribe( data => {
      console.log(data);
      this.obj = data['data'];
    });
  }

  submitForm(event: Event, form: NgForm) {
 // submitForm(id, ObjForm){
    const observable = this.http.addScObject({...this.sObject , primary: this.childVar._id});
    observable.subscribe(data => {
      console.log(data);
      this.sObject = {name: '', content: '', rating: 5};
      this.checker = 0;
    });
  }
}
