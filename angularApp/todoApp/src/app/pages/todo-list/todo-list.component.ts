import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  tasks: any = [];

  constructor(
    private http: HttpClient
  ) {
    this.fetchTasks();
  }

  fetchTasks() {
    this.http.get('http://localhost:4000/todo/').subscribe(
      (resp: any) => {
        this.tasks = resp;
      },
      (err) => {
        console.log(err)
      }
    )
  }
}
