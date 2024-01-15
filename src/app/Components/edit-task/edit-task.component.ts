import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from 'src/app/Interfaces/Task';
import { ModalService } from 'src/app/Services/modal.service';
import { TaskService } from 'src/app/Services/task.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent {
  taskForm!: FormGroup;
  editToggle = false;
  editIndex!: number;
  task!: Task;
  constructor(
    private taskService: TaskService,
    private modalService: ModalService,
    private parentComponent: AppComponent
  ) {}
  ngOnInit(): void {
    const index = this.taskService.getEditIndex();
    this.task = this.taskService.getTaskByid(index);
    console.log(this.task.dueDate);
    this.taskForm = new FormGroup({
      taskName: new FormControl(this.task.taskName),
      description: new FormControl(this.task.description),
      dueDate: new FormControl(
        this.task.dueDate ? this.formatDate(this.task.dueDate) : null
      ),
      priority: new FormControl(this.task.priority),
      status: new FormControl(this.task.status),
    });
  }
  private formatDate(date: any): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const day = ('0' + d.getDate()).slice(-2);
    console.log(`${day}-${month}-${year}`);
    return `${year}-${month}-${day}`;
  }
  save() {
    const index = this.taskService.getEditIndex();
    this.taskService.save(this.taskForm.value, index);
    this.modalService.closeModel(this.parentComponent.container);
  }
  cancel() {
    this.modalService.closeModel(this.parentComponent.container);
  }
  closeModel(event: Event) {
    if (event.target === event.currentTarget) {
      this.modalService.closeModel(this.parentComponent.container);
    }
  }
}
