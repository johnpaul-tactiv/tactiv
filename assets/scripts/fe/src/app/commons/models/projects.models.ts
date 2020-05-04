// tslint:disable: variable-name

import { User } from './user.models';

export class Project {
    code: string = null;
    name: string = null;
    desc: string = null;
    domain: string = null;
    date_created: string = null;
    date_updated: string = null;
    user: User;

    constructor(data = {}) {
        Object.assign(this, data);
    }
}
