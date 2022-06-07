import { Component, OnInit } from '@angular/core';
import { Model } from '../Model';
import { Workerrr } from '../Worker';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css'],
})
export class WorkerComponent implements OnInit {
  model = new Model();
  constructor() {
    this.model.items = JSON.parse(localStorage.getItem('items'));
  }

  getItems() {
    return this.model.items;
  }
  Add(name: any, surname: any, age: any, date: any) {
    if (
      name.value != '' &&
      surname.value != '' &&
      age.value != '' &&
      date.value != ''
    ) {
      this.model.items.push(
        new Workerrr(1, name.value, surname.value, age.value, date.value)
      );
      this.Set();
    }
  }
  Set() {
    localStorage.setItem('items', JSON.stringify(this.model.items));
  }
  ngOnInit() {}
}
