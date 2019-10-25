import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  pObject = {title: '', descr: '' };

  checker = 1;
  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    
  }
  submitForm(event: Event, form: NgForm) {
    event.preventDefault();
    console.log(this.pObject);
    const observable = this.http.addPrObject(this.pObject);
    observable.subscribe(data => {
      console.log(data);
      this.pObject = {title: '', descr: '' };
      this.checker = 0;
      this.router.navigate(['/home']);
    });
  }
}
