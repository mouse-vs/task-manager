import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskService } from '../../tasks.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input() userId!: string;
  @Input() name!: string;

  @Output() close = new EventEmitter<void>();

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
