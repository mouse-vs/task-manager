import { Component, Input } from '@angular/core';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() name!: string;
  @Input() userId!: string;
  isAddingTask = false;

  constructor(private taskService: TaskService) {} // Cuz this is the parent node

  get userTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onCreateTask() {
    this.isAddingTask = true;
  }

  onDialogClose() {
    this.isAddingTask = false;
  }
}
