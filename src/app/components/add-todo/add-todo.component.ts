import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-add-todo',
  template: `
    <mat-grid-list cols="5" rowHeight="70px">
      <mat-grid-tile colspan="4" rowspan="1">
        <mat-form-field class="full-width" appearance="fill">
          <mat-label>add a new todo</mat-label>
          <input matInput #message maxlength="256" [(ngModel)]="this.todoService.newTodo">
          <mat-hint align="start"><strong>Don't disclose personal info</strong> </mat-hint>
          <mat-hint align="end">{{message.value.length}} / 256</mat-hint>
        </mat-form-field>
      </mat-grid-tile>
      <mat-grid-tile colspan="1" rowspan="1">
        <button mat-stroked-icon-button color="primary" (click)="this.todoService.createTodo()">
          <mat-icon color="primary" class="button-add">add</mat-icon>
        </button>
      </mat-grid-tile>
    </mat-grid-list>
  `,
  styles: [
    ".mat-grid-list {margin: 10px 0px;}",
    ".full-width {width: 100%;}",
    ".button-add {font-size: 30px;}",
  ]
})

/**
 * this component represent the input and the add button in order to create a new todo
 */
export class AddTodoComponent implements OnInit {

  constructor(public todoService: TodoServiceService) { }

  ngOnInit(): void {
  }

}
