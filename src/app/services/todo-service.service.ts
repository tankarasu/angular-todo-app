// Angular Core Module Requirements
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

// Internals requirements
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})

export class TodoServiceService {
  todoList: any = {};
  displayedTodos: any = {};
  filterValue: string = "all";

  constructor(private http: HttpClient) { }

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

  onComplete(todo: Todo): void {
    for (let singleTodo of this.todoList.todos) {
      if (singleTodo.id === todo.id)
        singleTodo.completed = !singleTodo.completed
    }

    this.displayTodos(this.filterValue);
  }

  getTodos(): Observable<Object> {
    return this.http.get("https://dummyjson.com/todos");
  }

  getSpecificTodo(id: number): Observable<Object> {
    return this.http.get(`https://dummyjson.com/todos/${id}`);
  }

  createTodo(todo: Todo): Observable<Object> {
    return this.http.post("https://dummyjson.com/todos", todo);
  }

  updateTodo(id: number, completed: boolean): Observable<Object> {
    return this.http.put(`https://dummyjson.com/todos/${id}`, { completed });
  }

  deleteTodo(id: number): void {
    this.todoList.todos = this.todoList.todos.filter((todo: Todo) => todo.id !== id);
    this.displayTodos(this.filterValue);
  }
}
