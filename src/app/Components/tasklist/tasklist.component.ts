import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Interfaces/Task';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent implements OnInit{
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}
  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      console.log('Initial load', this.tasks);
    });

    const today = new Date();
    console.log('Date:' + today);
  }
}
