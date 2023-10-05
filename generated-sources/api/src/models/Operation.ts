/* tslint:disable */
/* eslint-disable */
/**
 * Ampersand public API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { OperationError } from './OperationError';
import {
    OperationErrorFromJSON,
    OperationErrorFromJSONTyped,
    OperationErrorToJSON,
} from './OperationError';

/**
 * 
 * @export
 * @interface Operation
 */
export interface Operation {
    /**
     * The Ampersand project ID.
     * @type {string}
     * @memberof Operation
     */
    projectId: string;
    /**
     * The action type to perform for the given object.
     * @type {string}
     * @memberof Operation
     */
    actionType: string;
    /**
     * The provider object name to perform the action for
     * @type {string}
     * @memberof Operation
     */
    objectName: string;
    /**
     * The Ampersand installation ID.
     * @type {string}
     * @memberof Operation
     */
    installationId: string;
    /**
     * The time the operation was started.
     * @type {Date}
     * @memberof Operation
     */
    startTime?: Date;
    /**
     * The time the operation was completed.
     * @type {Date}
     * @memberof Operation
     */
    endTime?: Date;
    /**
     * The status of the operation.
     * @type {string}
     * @memberof Operation
     */
    status?: string;
    /**
     * The workflow reference.
     * @type {string}
     * @memberof Operation
     */
    workflowRef?: string;
    /**
     * The run reference.
     * @type {string}
     * @memberof Operation
     */
    runRef?: string;
    /**
     * The error history of the operation.
     * @type {Array<OperationError>}
     * @memberof Operation
     */
    errorHistory?: Array<OperationError>;
}

/**
 * Check if a given object implements the Operation interface.
 */
export function instanceOfOperation(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "projectId" in value;
    isInstance = isInstance && "actionType" in value;
    isInstance = isInstance && "objectName" in value;
    isInstance = isInstance && "installationId" in value;

    return isInstance;
}

export function OperationFromJSON(json: any): Operation {
    return OperationFromJSONTyped(json, false);
}

export function OperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Operation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'projectId': json['projectId'],
        'actionType': json['actionType'],
        'objectName': json['objectName'],
        'installationId': json['installationId'],
        'startTime': !exists(json, 'startTime') ? undefined : (new Date(json['startTime'])),
        'endTime': !exists(json, 'endTime') ? undefined : (new Date(json['endTime'])),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'workflowRef': !exists(json, 'workflowRef') ? undefined : json['workflowRef'],
        'runRef': !exists(json, 'runRef') ? undefined : json['runRef'],
        'errorHistory': !exists(json, 'errorHistory') ? undefined : ((json['errorHistory'] as Array<any>).map(OperationErrorFromJSON)),
    };
}

export function OperationToJSON(value?: Operation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'projectId': value.projectId,
        'actionType': value.actionType,
        'objectName': value.objectName,
        'installationId': value.installationId,
        'startTime': value.startTime === undefined ? undefined : (value.startTime.toISOString()),
        'endTime': value.endTime === undefined ? undefined : (value.endTime.toISOString()),
        'status': value.status,
        'workflowRef': value.workflowRef,
        'runRef': value.runRef,
        'errorHistory': value.errorHistory === undefined ? undefined : ((value.errorHistory as Array<any>).map(OperationErrorToJSON)),
    };
}

