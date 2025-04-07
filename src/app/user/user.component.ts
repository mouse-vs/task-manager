import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: false,
})
export class UserComponent {
  @Input() user!: User;
  @Input() isSelected!: boolean;
  @Output() select = new EventEmitter<string>();

  imagePath() {
    return "users/" + this.user.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.user.id)
  }
}
