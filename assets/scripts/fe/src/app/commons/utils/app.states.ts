import { USERS_STATES } from '../../components/users/users.states';
import { PROJECTS_STATES } from '../../components/projects/projects.states';

export const APP_STATES = {
  otherwise : '/login',
  states    : [].concat(
    USERS_STATES,
    PROJECTS_STATES
  )
};
