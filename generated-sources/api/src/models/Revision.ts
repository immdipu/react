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
import type { Integration1 } from './Integration1';
import {
    Integration1FromJSON,
    Integration1FromJSONTyped,
    Integration1ToJSON,
} from './Integration1';

/**
 * 
 * @export
 * @interface Revision
 */
export interface Revision {
    /**
     * The revision ID.
     * @type {string}
     * @memberof Revision
     */
    id: string;
    /**
     * The spec version string (e.g. "0.1.0").
     * @type {string}
     * @memberof Revision
     */
    specVersion: string;
    /**
     * The time the revision was created.
     * @type {Date}
     * @memberof Revision
     */
    createTime: Date;
    /**
     * 
     * @type {Integration1}
     * @memberof Revision
     */
    content: Integration1;
}

/**
 * Check if a given object implements the Revision interface.
 */
export function instanceOfRevision(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "specVersion" in value;
    isInstance = isInstance && "createTime" in value;
    isInstance = isInstance && "content" in value;

    return isInstance;
}

export function RevisionFromJSON(json: any): Revision {
    return RevisionFromJSONTyped(json, false);
}

export function RevisionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Revision {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'specVersion': json['specVersion'],
        'createTime': (new Date(json['createTime'])),
        'content': Integration1FromJSON(json['content']),
    };
}

export function RevisionToJSON(value?: Revision | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'specVersion': value.specVersion,
        'createTime': (value.createTime.toISOString()),
        'content': Integration1ToJSON(value.content),
    };
}

