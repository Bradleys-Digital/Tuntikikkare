/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Object that represents an entry that an employee works on in a project
 */
export type Entry = {
    id: number;
    employee_id: number;
    task_id: number;
    /**
     * Date when the work has been done
     */
    date: string;
    /**
     * How many hours of work has been done
     */
    hours: number;
    /**
     * Optional comment about the entry
     */
    comment?: string;
}
