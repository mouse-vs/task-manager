import { Component, Input } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TaskService } from '../tasks.service';
import { NgFor, NgIf } from '@angular/common';
import { User } from '../user.model';

@Component({
  selector: 'app-tasks',
  imports: [NewTaskComponent, TaskComponent, NgFor, NgIf],
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
