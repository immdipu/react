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
import type { CreateIntegrationRequestLatestRevision } from './CreateIntegrationRequestLatestRevision';
import {
    CreateIntegrationRequestLatestRevisionFromJSON,
    CreateIntegrationRequestLatestRevisionFromJSONTyped,
    CreateIntegrationRequestLatestRevisionToJSON,
} from './CreateIntegrationRequestLatestRevision';

/**
 * 
 * @export
 * @interface CreateIntegrationRequest
 */
export interface CreateIntegrationRequest {
    /**
     * The integration name.
     * @type {string}
     * @memberof CreateIntegrationRequest
     */
    name: string;
    /**
     * The provider name (e.g. "salesforce", "hubspot")
     * @type {string}
     * @memberof CreateIntegrationRequest
     */
    provider: string;
    /**
     * 
     * @type {CreateIntegrationRequestLatestRevision}
     * @memberof CreateIntegrationRequest
     */
    latestRevision?: CreateIntegrationRequestLatestRevision;
}

/**
 * Check if a given object implements the CreateIntegrationRequest interface.
 */
export function instanceOfCreateIntegrationRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "provider" in value;

    return isInstance;
}

export function CreateIntegrationRequestFromJSON(json: any): CreateIntegrationRequest {
    return CreateIntegrationRequestFromJSONTyped(json, false);
}

export function CreateIntegrationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateIntegrationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'provider': json['provider'],
        'latestRevision': !exists(json, 'latestRevision') ? undefined : CreateIntegrationRequestLatestRevisionFromJSON(json['latestRevision']),
    };
}

export function CreateIntegrationRequestToJSON(value?: CreateIntegrationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'provider': value.provider,
        'latestRevision': CreateIntegrationRequestLatestRevisionToJSON(value.latestRevision),
    };
}

