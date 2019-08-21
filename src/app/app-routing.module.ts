import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user/user-list/user-list.component';
import { AddUserComponent } from './user/add-user/add-user.component';

const router: Routes = [
  {path : 'user', component : UserListComponent},
  {path : 'edit/:id', component : AddUserComponent},
];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(appRouts),
//   ],
//   exports: [ RouterModule
//   ]
// })
// export class AppRoutingModule { }
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
