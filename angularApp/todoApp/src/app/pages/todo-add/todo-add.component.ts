import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

  constructor(
    private http: HttpClient
  ) { }

  AddTask(taskFrm: any) {
    this.http.post('http://localhost:4000/todo/', taskFrm.value).subscribe(
      (resp: any) => {
        console.log(resp);
      },
      (err) => {
        console.log(err)
      }
    )
  }
}
