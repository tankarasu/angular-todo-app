import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-header',
  template: `
    <h2>{{title}}</h2>
    <app-add-todo></app-add-todo>
  `,
  styles: [
    'h2 {color: #673ab7; font-size: 36px; text-align: center}}'
  ]
})

export class HeaderComponent implements OnInit {
  title = "Angular Todo App";

  constructor(public todoService: TodoServiceService) { }

  ngOnInit(): void {
  }
}
