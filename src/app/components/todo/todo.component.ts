// Angular Core Module Requirements
import { Component, OnInit, Input } from '@angular/core';

// Internals requirements
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo',

  template: `
  <mat-card class="todo-card">
    <mat-card-content>
      <p>{{this.todo.todo}}</p>
      <button mat-icon-button color="primary">
        <mat-icon color="primary">edit</mat-icon>
      </button>
      <mat-checkbox color="primary"></mat-checkbox>
      <button mat-icon-button color="primary">
        <mat-icon color="warn">delete</mat-icon>
      </button>
    </mat-card-content>
  </mat-card>
  `,

  styles: [
    `.todo-card {max-width: 300px; margin: 10px;}`
  ]

})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;

  constructor() { }

  ngOnInit(): void {
  }

}
