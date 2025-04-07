import { Component, inject, Input } from '@angular/core';
import { TaskService } from '../../tasks.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: Task;
  private taskService = inject(TaskService); // Or we can use the constructor

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
