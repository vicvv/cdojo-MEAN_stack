import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() childVar: any;
  @Output() childEventEmitter = new EventEmitter();
  myobject = {_id: '', title: '', descr: ''};
  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    // console.log('my edit id:' , this.route.snapshot.params.id);
  }

  submitEditForm(id, myobjectForm){
    console.log(id, myobjectForm.value, { ...myobjectForm.value, _id: id});
    console.log('colected id and object from edit:', { ...myobjectForm.value, _id: id});
    const obs = this.http.updatePobject({ ...myobjectForm.value, _id: id});
    obs.subscribe(data => {
      console.log('Data return from edit p object', data);
      this.myobject = {_id: '', title: '', descr: ''};
      // this.router.navigate(['/home']);
      this.childEventEmitter.emit(data);
    });
  }
}
