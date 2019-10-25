import { Component, OnInit, Input } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private _httpService:HttpService) { }
  @Input() childVar: any;

  ngOnInit() {
  }

}
