import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

const BASE_URL = 'http://localhost:3000/items/';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  all(): Observable<Todo[]> {
    return this.http.get<Todo[]>(BASE_URL);
  }

  create(item: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${BASE_URL}`, item);
  }

  delete(item: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`${BASE_URL}${item.id}`);
  }

}
