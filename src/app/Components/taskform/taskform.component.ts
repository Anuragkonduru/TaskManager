import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/Interfaces/Task';
import { TaskService } from 'src/app/Services/task.service';
@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css'],
})
export class TaskformComponent implements OnInit {
  taskForm!: FormGroup;
  toggleForm = true;
  tasks: Task[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {}
  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      taskName: ['', Validators.required],
      description: [''],
      dueDate: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.taskForm.valid) {
      // this.toggleForm = false;
      this.taskService.addTask(this.taskForm.value);
      console.log(this.taskService);
      this.taskService.getTasks().subscribe((tasks) => {
        this.tasks = tasks;
      });
      this.taskForm.reset();
    }
  }
}
