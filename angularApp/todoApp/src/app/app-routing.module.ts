import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoAddComponent } from './pages/todo-add/todo-add.component';
import { ThemeComponent } from './layouts/theme/theme.component';
import { Theme2Component } from './layouts/theme2/theme2.component';

const routes: Routes = [
  {
    path: 'theme',
    component: ThemeComponent,
    children: [
      {
        path: '',
        component: TodoListComponent
      },
      {
        path: 'add',
        component: TodoAddComponent
      }
    ]
  },
  {
    path: 'theme2',
    component: Theme2Component,
    children: [
      {
        path: '',
        component: TodoListComponent
      },
      {
        path: 'add',
        component: TodoAddComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
