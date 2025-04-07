import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  // Configure module here ...
  declarations: [
    // Register Non standalone components & directives here ...
    AppComponent,
    HeaderComponent,
    UserComponent,
  ],
  bootstrap: [
    // Register Startup non standalone component here ...
    AppComponent,
  ],
  imports: [
    // Register Standalone components here ...
    BrowserModule, // Required
    SharedModule,
    TasksModule,
  ],
})
export class AppModule {}
