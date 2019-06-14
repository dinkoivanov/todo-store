import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';
import { TodoStoreService } from './todo-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private todoStoreService: TodoStoreService) {
  }

  ngOnInit(): void {
    
  }

  handleAdd(value: string) {
    let todo = {
      id: null,
      name: value  
    }
    this.todoStoreService.add(todo);
  }

  handleDelete(todo: Todo) {
    this.todoStoreService.delete(todo);
  }

}
