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
import type { Field } from './Field';
import {
    FieldFromJSON,
    FieldFromJSONTyped,
    FieldToJSON,
} from './Field';

/**
 * 
 * @export
 * @interface ModelObject
 */
export interface ModelObject {
    /**
     * 
     * @type {string}
     * @memberof ModelObject
     */
    objectName?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelObject
     */
    destination?: string;
    /**
     * 
     * @type {Array<Field>}
     * @memberof ModelObject
     */
    requiredFields?: Array<Field>;
    /**
     * 
     * @type {Array<Field>}
     * @memberof ModelObject
     */
    optionalFields?: Array<Field>;
}

/**
 * Check if a given object implements the ModelObject interface.
 */
export function instanceOfModelObject(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelObjectFromJSON(json: any): ModelObject {
    return ModelObjectFromJSONTyped(json, false);
}

export function ModelObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objectName': !exists(json, 'objectName') ? undefined : json['objectName'],
        'destination': !exists(json, 'destination') ? undefined : json['destination'],
        'requiredFields': !exists(json, 'requiredFields') ? undefined : ((json['requiredFields'] as Array<any>).map(FieldFromJSON)),
        'optionalFields': !exists(json, 'optionalFields') ? undefined : ((json['optionalFields'] as Array<any>).map(FieldFromJSON)),
    };
}

export function ModelObjectToJSON(value?: ModelObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objectName': value.objectName,
        'destination': value.destination,
        'requiredFields': value.requiredFields === undefined ? undefined : ((value.requiredFields as Array<any>).map(FieldToJSON)),
        'optionalFields': value.optionalFields === undefined ? undefined : ((value.optionalFields as Array<any>).map(FieldToJSON)),
    };
}

