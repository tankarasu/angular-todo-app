import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/services/todo-service.service';

// Internals requirements
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-header',
  template: `
    <h2>{{title}}</h2>
    <mat-button-toggle-group name="fontStyle">
      <mat-button-toggle value="all" (change)="this.displayTodos('all')">All</mat-button-toggle>
      <mat-button-toggle value="todo" (change)="this.displayTodos('todo')">To Do</mat-button-toggle>
      <mat-button-toggle value="done" (change)="this.displayTodos('done')">Done</mat-button-toggle>
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

  displayTodos(value: string = "all") {
    switch (value) {
      case 'all':
        this.todoService.displayedTodos.todos = this.todoService.todoList.todos;
        console.log(this.todoService.displayedTodos);
        break;
      case 'todo':
        this.todoService.displayedTodos.todos = this.todoService.todoList.todos.filter((todo: Todo) => todo.completed === false);
        break;
      default:
        this.todoService.displayedTodos.todos = this.todoService.todoList.todos.filter((todo: Todo) => todo.completed === true);
        break;
    }
  }
}
