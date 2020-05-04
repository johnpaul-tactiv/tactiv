import { NavContent, ContentOnly } from '../../commons/utils/layout.utils';
import { LoginRequired } from '../../commons/utils/security.utils';

import { ProjectComponent } from './project/project.component';
import { OverviewComponent } from './project/dashboard/overview/overview.component';
import { ActivityComponent } from './project/dashboard/activity/activity.component';
import { BillingComponent } from './project/dashboard/billing/billing.component';
import { SettingsComponent } from './project/dashboard/settings/settings.component';

import { ListComponent } from './project/board/list/list.component';

import { CreateComponent } from './create/create.component';
import { BaseComponent } from './base/base.component';


export const PROJECTS_STATES: object[] = [
  {
    name: 'projects',
    url: '/projects',
    views: NavContent(BaseComponent),
  },
  {
    name: 'projects.create',
    url: '/create',
    views: ContentOnly(CreateComponent),
    onEnter: LoginRequired
  },
  {
    name: 'project',
    parent: 'projects',
    url: '/:code',
    views: ContentOnly(ProjectComponent),
    redirectTo: 'project.overview',
  },
  {
    name: 'overview',
    parent: 'project',
    url: '/overview',
    views: ContentOnly(OverviewComponent),
    onEnter: LoginRequired
  },
  {
    name: 'activity',
    parent: 'project',
    url: '/activity',
    views: ContentOnly(ActivityComponent),
    onEnter: LoginRequired
  },
  {
    name: 'billing',
    parent: 'project',
    url: '/billing',
    views: ContentOnly(BillingComponent),
    onEnter: LoginRequired
  },
  {
    name: 'settings',
    parent: 'project',
    url: '/settings',
    views: ContentOnly(SettingsComponent),
    onEnter: LoginRequired
  },
  {
    name: 'board',
    parent: 'project',
    url: '/board',
    views: ContentOnly(ListComponent),
    onEnter: LoginRequired
  },
];
