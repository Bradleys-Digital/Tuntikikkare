/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseObject } from './BaseObject';
import type { Entry } from './Entry';

export type Task = (BaseObject & {
    project_id: number,
    entries: Array<Entry>,
});
