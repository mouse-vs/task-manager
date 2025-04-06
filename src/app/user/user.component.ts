import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
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
