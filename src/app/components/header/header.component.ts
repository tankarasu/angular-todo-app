import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-header',
  template: `
    <h2>{{title}}</h2>
    <mat-button-toggle-group name="fontStyle">
      <mat-button-toggle value="all" (change)="this.todoService.displayTodos('all')">All</mat-button-toggle>
      <mat-button-toggle value="todo" (change)="this.todoService.displayTodos('todo')">To Do</mat-button-toggle>
      <mat-button-toggle value="done" (change)="this.todoService.displayTodos('done')">Done</mat-button-toggle>
    </mat-button-toggle-group>
  `,
  styles: [
    'h2 {color: red; font-size: 18px;}}',
    `h2:hover {color: blue}`
  ]
})

export class HeaderComponent implements OnInit {
  title = "Angular Todo App";

  constructor(public todoService: TodoServiceService) { }

  ngOnInit(): void {
  }
}
