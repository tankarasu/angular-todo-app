// Angular Core Module Requirements
import { Component, OnInit, Input } from '@angular/core';
import { TodoServiceService } from 'src/app/services/todo-service.service';

// Internals requirements
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo',

  template: `
  <mat-card class="todo-card">
    <mat-card-content>
      <p>{{this.todo.todo}}</p>
      <button mat-icon-button color="primary" (click)="this.openEdition()">
        <mat-icon color="primary">edit</mat-icon>
      </button>

      <mat-checkbox color="primary"
        [checked]="this.todo.completed"
        (change)="this.todoService.onComplete(this.todo)">
      </mat-checkbox>

      <button mat-icon-button color="primary" (click)="this.todoService.deleteTodo(this.todo.id)">
        <mat-icon color="warn">delete</mat-icon>
      </button>

      <mat-form-field *ngIf="this.onEdition">
        <mat-label>edit your Todo</mat-label>
        <textarea matInput placeholder={{this.todo.todo}} [(ngModel)]="this.todo.todo" name="todo"></textarea>
      </mat-form-field>
    </mat-card-content>
  </mat-card>
  `,

  styles: [
    `.todo-card {max-width: 300px; margin: 10px;}`
  ]

})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  onEdition: boolean = false;

  constructor(public todoService: TodoServiceService) { }

  ngOnInit(): void {
  }

  openEdition(): void {
    this.onEdition = !this.onEdition;
  }

}
