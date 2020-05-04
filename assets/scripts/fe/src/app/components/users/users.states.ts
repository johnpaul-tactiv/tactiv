import { ContentOnly, NavContent } from '../../commons/utils/layout.utils';
import { Disconnect, LoginRequired } from '../../commons/utils/security.utils';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';


export const USERS_STATES: object[] = [
  {
    name: 'login',
    url: '/login',
    views: ContentOnly(LoginComponent),
    params: {next: window.location.pathname}
  },
  {
    name: 'logout',
    url: '/logout',
    onEnter: Disconnect
  },
  {
    name: 'profile',
    url: '/users/me',
    views: NavContent(ProfileComponent),
    onEnter: LoginRequired
  },
  {
    name: 'profile-edit',
    url: '/users/me/edit',
    views: NavContent(EditComponent),
    onEnter: LoginRequired
  }
];
