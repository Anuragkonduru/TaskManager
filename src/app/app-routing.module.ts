import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasklistComponent } from './Components/tasklist/tasklist.component';
import { TaskformComponent } from './Components/taskform/taskform.component';

const routes: Routes = [
  { path: '', component: TasklistComponent },
  { path: 'taskform', component: TaskformComponent },
  { path: 'tasklist', component: TasklistComponent },
  {
    path: '**',
    component: TaskformComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
