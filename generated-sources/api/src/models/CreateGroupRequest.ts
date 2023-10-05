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
/**
 * 
 * @export
 * @interface CreateGroupRequest
 */
export interface CreateGroupRequest {
    /**
     * The ID of the user group that has access to this installation.
     * @type {string}
     * @memberof CreateGroupRequest
     */
    groupRef: string;
    /**
     * The name of the user group that has access to this installation.
     * @type {string}
     * @memberof CreateGroupRequest
     */
    groupName: string;
}

/**
 * Check if a given object implements the CreateGroupRequest interface.
 */
export function instanceOfCreateGroupRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "groupRef" in value;
    isInstance = isInstance && "groupName" in value;

    return isInstance;
}

export function CreateGroupRequestFromJSON(json: any): CreateGroupRequest {
    return CreateGroupRequestFromJSONTyped(json, false);
}

export function CreateGroupRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateGroupRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'groupRef': json['groupRef'],
        'groupName': json['groupName'],
    };
}

export function CreateGroupRequestToJSON(value?: CreateGroupRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'groupRef': value.groupRef,
        'groupName': value.groupName,
    };
}

