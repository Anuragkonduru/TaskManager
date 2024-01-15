import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskformComponent } from './Components/taskform/taskform.component';
import { TasklistComponent } from './Components/tasklist/tasklist.component';

const routes: Routes = [
   { path: '', redirectTo: '/taskform', pathMatch: 'full'},
  { path: 'taskform', component: TaskformComponent },
  { path: 'tasklist', component: TasklistComponent },
  {
    path: '**',
    component: TaskformComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
