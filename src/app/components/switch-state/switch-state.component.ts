import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-switch-state',
  template: `
    <mat-button-toggle-group name="fontStyle" class="button-group">
      <mat-button-toggle class="all" value="all" (change)="this.todoService.displayTodos('all')">All</mat-button-toggle>
      <mat-button-toggle class="todo" value="todo" (change)="this.todoService.displayTodos('todo')">To Do</mat-button-toggle>
      <mat-button-toggle class="done" value="done" (change)="this.todoService.displayTodos('done')">Done</mat-button-toggle>
    </mat-button-toggle-group>
  `,
  styles: [
    ".all {width: 135px;}",
    ".todo {width:130px}",
    ".done {width:135px}",
    ".all, .todo, .done {height: 40px; }",
    ".button-group {border-radius: 15px;}",
  ]
})
export class SwitchStateComponent implements OnInit {

  constructor(public todoService: TodoServiceService) { }

  ngOnInit(): void {
  }

}
