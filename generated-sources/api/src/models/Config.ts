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
import type { ConfigContent } from './ConfigContent';
import {
    ConfigContentFromJSON,
    ConfigContentFromJSONTyped,
    ConfigContentToJSON,
} from './ConfigContent';

/**
 * 
 * @export
 * @interface Config
 */
export interface Config {
    /**
     * The config ID.
     * @type {string}
     * @memberof Config
     */
    id: string;
    /**
     * The ID of the revision that this config is based on.
     * @type {string}
     * @memberof Config
     */
    revisionId: string;
    /**
     * The time the config was created.
     * @type {Date}
     * @memberof Config
     */
    createTime: Date;
    /**
     * The person who created the config, in the format of "consumer:{consumer-id}" or "builder:{builder-id}".
     * @type {string}
     * @memberof Config
     */
    createdBy: string;
    /**
     * 
     * @type {ConfigContent}
     * @memberof Config
     */
    content: ConfigContent;
}

/**
 * Check if a given object implements the Config interface.
 */
export function instanceOfConfig(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "revisionId" in value;
    isInstance = isInstance && "createTime" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "content" in value;

    return isInstance;
}

export function ConfigFromJSON(json: any): Config {
    return ConfigFromJSONTyped(json, false);
}

export function ConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): Config {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'revisionId': json['revisionId'],
        'createTime': (new Date(json['createTime'])),
        'createdBy': json['createdBy'],
        'content': ConfigContentFromJSON(json['content']),
    };
}

export function ConfigToJSON(value?: Config | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'revisionId': value.revisionId,
        'createTime': (value.createTime.toISOString()),
        'createdBy': value.createdBy,
        'content': ConfigContentToJSON(value.content),
    };
}

