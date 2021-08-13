/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Person } from './Person';

export type Employee = (Person & {
    id: number,
});
