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
 * The provider app fields to update. (Only include the fields you'd like to update.)
 * @export
 * @interface UpdateProjectRequestProject
 */
export interface UpdateProjectRequestProject {
    /**
     * The app name.
     * @type {string}
     * @memberof UpdateProjectRequestProject
     */
    appName?: string;
    /**
     * The project name.
     * @type {string}
     * @memberof UpdateProjectRequestProject
     */
    name?: string;
}

/**
 * Check if a given object implements the UpdateProjectRequestProject interface.
 */
export function instanceOfUpdateProjectRequestProject(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateProjectRequestProjectFromJSON(json: any): UpdateProjectRequestProject {
    return UpdateProjectRequestProjectFromJSONTyped(json, false);
}

export function UpdateProjectRequestProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateProjectRequestProject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appName': !exists(json, 'appName') ? undefined : json['appName'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function UpdateProjectRequestProjectToJSON(value?: UpdateProjectRequestProject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appName': value.appName,
        'name': value.name,
    };
}

