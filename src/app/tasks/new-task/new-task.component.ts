import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskService } from '../../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input() userId!: string;
  @Input() name!: string;

  @Output() close = new EventEmitter<void>();
  enteredExpectedReturn = 0;

  enteredTaskTitle = '';
  enteredTaskSummary = '';
  enteredTaskDueDate = '';

  private taskService = inject(TaskService) // we inject as parent has already initialized it

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTaskTitle,
        summary: this.enteredTaskSummary,
        dueDate: this.enteredTaskDueDate
      },
      this.userId
    );
    this.close.emit();
  }
}
