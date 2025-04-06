import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TasksComponent, UserComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager'

  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectedUser(userId: string) {
    this.selectedUserId = userId;
  }
}
