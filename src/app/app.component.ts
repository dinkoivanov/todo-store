import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  todos: Todo[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.all().subscribe(todos => this.todos = todos);
  }

  handleAdd(value: string) {
    let todo = {
      id: null,
      name: value  
    }
    this.todoService.create(todo).subscribe(
      res => this.loadTodos()
    )
  }

  handleDelete(todo: Todo) {
    this.todoService.delete(todo).subscribe(
      res => this.loadTodos()
    )
  }

}
