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
  todoList: any = [];
  displayedTodos: any = [];

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Object> {
    return this.http.get("https://dummyjson.com/todos");
  }

  getSpecificTodo(id: string): Observable<Object> {
    return this.http.get(`https://dummyjson.com/todos/${id}`);
  }

  createTodo(todo: Todo): Observable<Object> {
    return this.http.post("https://dummyjson.com/todos", todo);
  }

  updateTodo(id: string, todo: Todo): Observable<Object> {
    return this.http.put(`https://dummyjson.com/todos/${id}`, todo);
  }

  deleteTodo(id: string): Observable<Object> {
    return this.http.delete(`https://dummyjson.com/todos/${id}`);
  }
}
