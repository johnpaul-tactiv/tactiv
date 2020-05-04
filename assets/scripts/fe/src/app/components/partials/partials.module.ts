import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UIRouterModule } from '@uirouter/angular';

import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UIRouterModule
  ]
})
export class PartialsModule { }
