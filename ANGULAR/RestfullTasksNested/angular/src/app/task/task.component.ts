import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  @Input() childVar: any;
  @Output() childEventEmitter = new EventEmitter();

  callParent() {
    this.childEventEmitter.emit(8);
  }

  ngOnInit() {
  }
}
