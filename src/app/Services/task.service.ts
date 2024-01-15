import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../Interfaces/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    {
      taskName: 'gym1',
      description: 'go gym',
      dueDate: new Date('2024-01-08'),
      status: 'Done',
      priority: 'Low',
    },
    {
      taskName: 'gym',
      description: 'go gym',
      dueDate: new Date('2024-01-09'),
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      taskName: 'walk',
      description: 'go for a walk',
      dueDate: new Date('2024-01-04'),
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      taskName: 'walk1',
      description: 'go for a walk',
      dueDate: new Date('2024-01-03'),
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      taskName: 'walk2',
      description: 'go for a walk',
      dueDate: new Date('2024-01-05'),
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      taskName: 'meditate',
      description: 'go meditate',
      dueDate: new Date('2024-01-05'),
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      taskName: 'meditate2',
      description: 'go meditate',
      dueDate: new Date('2024-01-04'),
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      taskName: 'meditate3',
      description: 'go meditate',
      dueDate: new Date('2024-01-07'),
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      taskName: 'write',
      description: 'go meditate',
      dueDate: new Date('2024-01-06'),
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      taskName: 'write2',
      description: 'go meditate',
      dueDate: new Date('2024-01-06'),
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      taskName: 'write3',
      description: 'go meditate',
      dueDate: new Date('2024-01-06'),
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      taskName: 'write4',
      description: 'go meditate',
      dueDate: new Date('2024-01-06'),
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      taskName: 'write5',
      description: 'go meditate',
      dueDate: new Date('2024-01-06'),
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      taskName: 'write6',
      description: 'go meditate',
      dueDate: new Date('2024-01-09'),
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      taskName: 'write7',
      description: 'go meditate',
      dueDate: new Date('2024-01-09'),
      status: 'In Progress',
      priority: 'Medium',
    },
  ];
  private tasksSubject = new BehaviorSubject<any[]>([]);
  constructor() {}
  getTasks() {
    return this.tasksSubject.asObservable();
  }
  addTask(task: any) {
    this.tasks.push(task);
    // console.log('check', this.tasks);
    this.tasksSubject.next([...this.tasks]);
    // console.log('check task sub', this.tasksSubject);
  }
  editTask(index: number, task: any) {
    this.tasks[index] = task;
    this.tasksSubject.next([...this.tasks]);
  }
  save(task: any, index: number) {
    // console.log('service-', this.tasks);
    // console.log('index', index);
    this.tasks[index] = task;
    // console.log('after ', task);
    this.tasksSubject.next([...this.tasks]);
  }
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.tasksSubject.next([...this.tasks]);
  }
}
