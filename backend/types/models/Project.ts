/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseObject } from './BaseObject';
import type { Task } from './Task';

export type Project = (BaseObject & {
    company_id: number,
    tasks: Array<Task>,
});
