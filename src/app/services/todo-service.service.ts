// Angular Core Module Requirements
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

// Angular Material Module Requirements
import { MatSnackBar } from '@angular/material/snack-bar';

// Internals requirements
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})

/**
 * Service for all todos
 */
export class TodoServiceService {
  todoList: any = {};
  displayedTodos: any = {};
  filterValue: string = "all";
  edition: boolean = false;
  newTodo: string = "";

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  /**
   * this methods sort the todos depending on the complete situation: all, todo or done.
   * @param value the sorting we want
   */
  displayTodos(value: string = "all") {
    this.filterValue = value;
    switch (this.filterValue) {
      case 'all':
        this.displayedTodos.todos = this.todoList.todos;
        break;
      case 'todo':
        this.displayedTodos.todos = this.todoList.todos.filter((todo: Todo) => todo.completed === false);
        break;
      default:
        this.displayedTodos.todos = this.todoList.todos.filter((todo: Todo) => todo.completed === true);
        break;
    }
  }

  /**
   * this method handle the complete properties of a todo, he switch between done and undone
   * @param todo
   */
  onComplete(todo: Todo): void {
    for (let singleTodo of this.todoList.todos) {
      if (singleTodo.id === todo.id)
        singleTodo.completed = !singleTodo.completed
    }

    this.displayTodos(this.filterValue);
  }

  /**
   * Get request for all Todos in the dummy database
   * @returns an object who contains all todos
   */
  getTodos(): Observable<Object> {
    return this.http.get("https://dummyjson.com/todos");
  }

  /**
   * this methods is used to create a new todo
   */
  createTodo(): void {
    if (this.newTodo !== "") {
      const todo: Todo = {
        id: this.todoList.todos.length + 1,
        todo: this.newTodo,
        completed: false,
        userId: 1
      };

      this.todoList.todos = [...this.todoList.todos, todo];
      this.displayTodos(this.filterValue);
      this.newTodo = "";
      this.openSnackBar("Todo created");
    }
  }

  /**
   * this method is used to delete a specific todo
   * @param id id of the specific todo
   */
  deleteTodo(id: number): void {
    this.todoList.todos = this.todoList.todos.filter((todo: Todo) => todo.id !== id);
    this.displayTodos(this.filterValue);
    this.openSnackBar("Todo deleted");
  }

  /**
   * this method is used to handle the snackBar
   * @param message message displayed inside the snackBar
   */
  openSnackBar(message: string) {
    this._snackBar.open(message, "", { duration: 2000 });
  }
}
