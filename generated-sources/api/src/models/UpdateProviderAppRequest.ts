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
import type { UpdateProviderAppRequestProviderApp } from './UpdateProviderAppRequestProviderApp';
import {
    UpdateProviderAppRequestProviderAppFromJSON,
    UpdateProviderAppRequestProviderAppFromJSONTyped,
    UpdateProviderAppRequestProviderAppToJSON,
} from './UpdateProviderAppRequestProviderApp';

/**
 * 
 * @export
 * @interface UpdateProviderAppRequest
 */
export interface UpdateProviderAppRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateProviderAppRequest
     */
    updateMask: Array<string>;
    /**
     * 
     * @type {UpdateProviderAppRequestProviderApp}
     * @memberof UpdateProviderAppRequest
     */
    providerApp: UpdateProviderAppRequestProviderApp;
}

/**
 * Check if a given object implements the UpdateProviderAppRequest interface.
 */
export function instanceOfUpdateProviderAppRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "updateMask" in value;
    isInstance = isInstance && "providerApp" in value;

    return isInstance;
}

export function UpdateProviderAppRequestFromJSON(json: any): UpdateProviderAppRequest {
    return UpdateProviderAppRequestFromJSONTyped(json, false);
}

export function UpdateProviderAppRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateProviderAppRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'updateMask': json['updateMask'],
        'providerApp': UpdateProviderAppRequestProviderAppFromJSON(json['providerApp']),
    };
}

export function UpdateProviderAppRequestToJSON(value?: UpdateProviderAppRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'updateMask': value.updateMask,
        'providerApp': UpdateProviderAppRequestProviderAppToJSON(value.providerApp),
    };
}

