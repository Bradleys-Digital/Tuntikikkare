/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Object that represents a new record
 */
export type EntryAdd = {
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
     * Optional comment about the record
     */
    comment?: string;
}
