import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Interfaces/Task';
import { ModalService } from 'src/app/Services/modal.service';
import { TaskService } from 'src/app/Services/task.service';
import { AppComponent } from 'src/app/app.component';
import { EditTaskComponent } from '../edit-task/edit-task.component';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent implements OnInit {
  tasks: Task[] = [];
  constructor(
    private taskService: TaskService,
    private parentComponent: AppComponent,
    private modelService: ModalService
  ) {}
  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      console.log('Initial load', this.tasks);
    });

    const today = new Date();
    console.log('Date:' + today);
  }
  openedit(task: any, index: number) {
    this.taskService.setEditIndex(index);
    console.log('open edit is fired');
    this.modelService.openModel(
      this.parentComponent.container,
      EditTaskComponent
    );
  }
  deleteTask(index: number) {
    this.taskService.deleteTask(index);
  }
}
