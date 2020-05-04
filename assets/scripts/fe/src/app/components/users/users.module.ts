import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UIRouterModule } from '@uirouter/angular';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [LoginComponent, ProfileComponent, EditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UIRouterModule
  ]
})
export class UsersModule { }
