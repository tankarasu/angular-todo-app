// Angular Core Module Requirements
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

// Internals requirements
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of this.todoService.displayedTodos.todos">
        <app-todo [todo]="todo"></app-todo>
      </li>
    </ul>
  `,

  styles: [
    `ul {list-style: none; padding: 10px;}`
  ]
})


@Injectable()
export class TodoListComponent implements OnInit {
  todoList: any = [];
  displayedTodos: any = [];

  constructor(public todoService: TodoServiceService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data) => this.todoService.todoList = data);
    this.todoService.getTodos().subscribe((data) => this.todoService.displayedTodos = data);
  }
}
