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
      <mat-grid-list cols="6" rowHeight="60px">
        <mat-grid-tile colspan="6">
          <p class="todo-content">{{this.todo.todo}}</p>
        </mat-grid-tile>
        <mat-grid-tile colspan="1">
          <mat-checkbox color="primary"
            [checked]="this.todo.completed"
            (change)="this.todoService.onComplete(this.todo)">
          </mat-checkbox>
        </mat-grid-tile>
        <mat-grid-tile colspan="3"></mat-grid-tile>
        <mat-grid-tile colspan="1">
          <button mat-icon-button color="primary" (click)="this.openEdition()">
            <mat-icon color="primary">edit</mat-icon>
          </button>
        </mat-grid-tile>
        <mat-grid-tile colspan="1">
          <button mat-icon-button color="primary" (click)="this.todoService.deleteTodo(this.todo.id)">
            <mat-icon color="warn">delete</mat-icon>
          </button>
        </mat-grid-tile>
        <mat-grid-tile *ngIf="this.onEdition" colspan="6">
          <mat-form-field class="edit-todo">
            <mat-label>edit your Todo</mat-label>
            <input  matInput placeholder={{this.todo.todo}} [(ngModel)]="this.todo.todo" name="todo">
          </mat-form-field>
        </mat-grid-tile>
      </mat-grid-list>
    </mat-card-content>
  </mat-card>
  `,

  styles: [
    `.todo-card {max-width: 400px; margin: 15px 0px;border-radius: 15px; padding: 0}`,
    `.edit-todo {width: 88%;}`,
    `.todo-content {margin-left:10px}`,
  ]

})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  onEdition: boolean = false;

  constructor(public todoService: TodoServiceService) { }

  ngOnInit(): void {
  }

  /**
   * this method permise edition on a specific todo
   */
  openEdition(): void {
    this.onEdition = !this.onEdition;
  }
}
