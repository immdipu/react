/* tslint:disable */
/* eslint-disable */
/**
 * Ampersand API
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
import type { Consumer } from './Consumer';
import {
    ConsumerFromJSON,
    ConsumerFromJSONTyped,
    ConsumerToJSON,
} from './Consumer';
import type { Group } from './Group';
import {
    GroupFromJSON,
    GroupFromJSONTyped,
    GroupToJSON,
} from './Group';
import type { ProviderApp } from './ProviderApp';
import {
    ProviderAppFromJSON,
    ProviderAppFromJSONTyped,
    ProviderAppToJSON,
} from './ProviderApp';

/**
 * 
 * @export
 * @interface Connection
 */
export interface Connection {
    /**
     * The connection ID.
     * @type {string}
     * @memberof Connection
     */
    id: string;
    /**
     * The Ampersand project ID.
     * @type {string}
     * @memberof Connection
     */
    projectId: string;
    /**
     * 
     * @type {ProviderApp}
     * @memberof Connection
     */
    providerApp: ProviderApp;
    /**
     * 
     * @type {Group}
     * @memberof Connection
     */
    group: Group;
    /**
     * 
     * @type {Consumer}
     * @memberof Connection
     */
    consumer: Consumer;
    /**
     * The identifier for the provider workspace (e.g. "salesforce-instance-domain")
     * @type {string}
     * @memberof Connection
     */
    providerWorkspaceRef: string;
    /**
     * The ID that Salesforce/Hubspot uses to identify this user (e.g. Salesforce has IDs in the form of https://login.salesforce.com/id/00D4x0000019CQTEA2/0054x000000orJ4AA)
     * @type {string}
     * @memberof Connection
     */
    providerConsumerRef: string;
    /**
     * The time the connection was created.
     * @type {Date}
     * @memberof Connection
     */
    createTime: Date;
    /**
     * The time the connection was last updated.
     * @type {Date}
     * @memberof Connection
     */
    updateTime?: Date;
}

/**
 * Check if a given object implements the Connection interface.
 */
export function instanceOfConnection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "projectId" in value;
    isInstance = isInstance && "providerApp" in value;
    isInstance = isInstance && "group" in value;
    isInstance = isInstance && "consumer" in value;
    isInstance = isInstance && "providerWorkspaceRef" in value;
    isInstance = isInstance && "providerConsumerRef" in value;
    isInstance = isInstance && "createTime" in value;

    return isInstance;
}

export function ConnectionFromJSON(json: any): Connection {
    return ConnectionFromJSONTyped(json, false);
}

export function ConnectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Connection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'projectId': json['projectId'],
        'providerApp': ProviderAppFromJSON(json['providerApp']),
        'group': GroupFromJSON(json['group']),
        'consumer': ConsumerFromJSON(json['consumer']),
        'providerWorkspaceRef': json['providerWorkspaceRef'],
        'providerConsumerRef': json['ProviderConsumerRef'],
        'createTime': (new Date(json['createTime'])),
        'updateTime': !exists(json, 'updateTime') ? undefined : (new Date(json['updateTime'])),
    };
}

export function ConnectionToJSON(value?: Connection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'projectId': value.projectId,
        'providerApp': ProviderAppToJSON(value.providerApp),
        'group': GroupToJSON(value.group),
        'consumer': ConsumerToJSON(value.consumer),
        'providerWorkspaceRef': value.providerWorkspaceRef,
        'ProviderConsumerRef': value.providerConsumerRef,
        'createTime': (value.createTime.toISOString()),
        'updateTime': value.updateTime === undefined ? undefined : (value.updateTime.toISOString()),
    };
}

