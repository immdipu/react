/* tslint:disable */
/* eslint-disable */
/**
 * Ampersand public API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ProviderApp
 */
export interface ProviderApp {
    /**
     * The provider app ID.
     * @type {string}
     * @memberof ProviderApp
     */
    id: string;
    /**
     * The Ampersand project ID.
     * @type {string}
     * @memberof ProviderApp
     */
    projectId: string;
    /**
     * The ID used by the provider to identify the app (optional).
     * @type {string}
     * @memberof ProviderApp
     */
    externalRef?: string;
    /**
     * The SaaS provider that this app connects to.
     * @type {string}
     * @memberof ProviderApp
     */
    provider: string;
    /**
     * The OAuth client ID for this app.
     * @type {string}
     * @memberof ProviderApp
     */
    clientId: string;
    /**
     * The time the provider app was created.
     * @type {Date}
     * @memberof ProviderApp
     */
    createTime: Date;
    /**
     * The time the provider app was updated.
     * @type {Date}
     * @memberof ProviderApp
     */
    updateTime?: Date;
}

/**
 * Check if a given object implements the ProviderApp interface.
 */
export function instanceOfProviderApp(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "projectId" in value;
    isInstance = isInstance && "provider" in value;
    isInstance = isInstance && "clientId" in value;
    isInstance = isInstance && "createTime" in value;

    return isInstance;
}

export function ProviderAppFromJSON(json: any): ProviderApp {
    return ProviderAppFromJSONTyped(json, false);
}

export function ProviderAppFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProviderApp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'projectId': json['projectId'],
        'externalRef': !exists(json, 'externalRef') ? undefined : json['externalRef'],
        'provider': json['provider'],
        'clientId': json['clientId'],
        'createTime': (new Date(json['createTime'])),
        'updateTime': !exists(json, 'updateTime') ? undefined : (new Date(json['updateTime'])),
    };
}

export function ProviderAppToJSON(value?: ProviderApp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'projectId': value.projectId,
        'externalRef': value.externalRef,
        'provider': value.provider,
        'clientId': value.clientId,
        'createTime': (value.createTime.toISOString()),
        'updateTime': value.updateTime === undefined ? undefined : (value.updateTime.toISOString()),
    };
}

