import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AddUserComponent } from './user/add-user/add-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { routes } from './app-routing.module'
import { TestService } from './test.service';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    routes
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
