import { Component, inject, Input } from '@angular/core';
import { TaskService } from '../../tasks.service';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
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
