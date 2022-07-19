import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-switch-state',
  template: `
    <p>
    <mat-button-toggle-group name="fontStyle">
      <mat-button-toggle value="all" (change)="this.todoService.displayTodos('all')">All</mat-button-toggle>
      <mat-button-toggle value="todo" (change)="this.todoService.displayTodos('todo')">To Do</mat-button-toggle>
      <mat-button-toggle value="done" (change)="this.todoService.displayTodos('done')">Done</mat-button-toggle>
    </mat-button-toggle-group>
  `,
  styles: [
  ]
})
export class SwitchStateComponent implements OnInit {

  constructor(public todoService: TodoServiceService) { }

  ngOnInit(): void {
  }

}
