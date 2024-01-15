export interface Task {
  taskName: string;
  description: string;
  dueDate: Date;
  status: 'Done' | 'In Progress' | 'Backlog' | 'Todo' | 'Canceled';
  priority: 'Low' | 'Medium' | 'High';
}
