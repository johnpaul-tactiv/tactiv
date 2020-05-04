import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { UIRouterModule } from '@uirouter/angular';

import { BaseComponent } from './base/base.component';
import { SideComponent } from './side/side.component';

import { CreateComponent } from './create/create.component';

import { ProjectComponent } from './project/project.component';
import { OverviewComponent } from './project/dashboard/overview/overview.component';
import { ActivityComponent } from './project/dashboard/activity/activity.component';
import { BillingComponent } from './project/dashboard/billing/billing.component';
import { SettingsComponent } from './project/dashboard/settings/settings.component';
import { ListComponent } from './project/board/list/list.component';


@NgModule({
  declarations: [
    BaseComponent,
    SideComponent,

    CreateComponent,

    ProjectComponent,
    OverviewComponent,
    ActivityComponent,
    BillingComponent,
    SettingsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UIRouterModule
  ]
})
export class ProjectsModule { }
