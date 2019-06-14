import { Injectable } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoStoreService {

  todosSubject: BehaviorSubject<Todo[]> = new BehaviorSubject([]);
  todos$: Observable<Todo[]> = this.todosSubject.asObservable();

  constructor(private todoService: TodoService) { 
    this.todoService.all().subscribe(todos => this.todosSubject.next(todos));
  }

  add(todo: Todo) {
    this.todoService.create(todo).subscribe(
      res => {
        let newTodos = [ ...this.todosSubject.getValue(), res];
        this.todosSubject.next(newTodos);
      }
    )
  }

  delete(todo: Todo) {
    this.todoService.delete(todo).subscribe(res => {
      let newTodos = this.todosSubject.getValue().filter(v => v !== todo);
      this.todosSubject.next(newTodos);
    })
  }
}
