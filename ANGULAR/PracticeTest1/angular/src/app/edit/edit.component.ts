import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  myobject = {title:"", url:""}
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
    let obs = this.http.getPrObjecById(this.route.snapshot.params.id);
    obs.subscribe( data => {
      console.log("Data and ID::",data, this.route.snapshot.params.id);
      this.myobject = data['data'];
    });
  }
  submitForm(id, myobject){

    let obs = this.http.editPrObject(id, myobject);
    obs.subscribe(data => {
      console.log(data);
      this.router.navigate(['/home']);
    })

  }
}
