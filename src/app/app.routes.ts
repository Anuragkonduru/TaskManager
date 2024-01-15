import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskformComponent } from './Components/taskform/taskform.component';
import { TasklistComponent } from './Components/tasklist/tasklist.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'taskform', component: TaskformComponent },
  { path: 'tasklist', component: TasklistComponent },
  {
    path: '**',
    component: TaskformComponent,
  },
];