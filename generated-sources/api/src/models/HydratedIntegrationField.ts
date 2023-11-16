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

import {
    HydratedIntegrationFieldExistent,
    instanceOfHydratedIntegrationFieldExistent,
    HydratedIntegrationFieldExistentFromJSON,
    HydratedIntegrationFieldExistentFromJSONTyped,
    HydratedIntegrationFieldExistentToJSON,
} from './HydratedIntegrationFieldExistent';
import {
    IntegrationFieldMapping,
    instanceOfIntegrationFieldMapping,
    IntegrationFieldMappingFromJSON,
    IntegrationFieldMappingFromJSONTyped,
    IntegrationFieldMappingToJSON,
} from './IntegrationFieldMapping';

/**
 * @type HydratedIntegrationField
 * 
 * @export
 */
export type HydratedIntegrationField = HydratedIntegrationFieldExistent | IntegrationFieldMapping;

export function HydratedIntegrationFieldFromJSON(json: any): HydratedIntegrationField {
    return HydratedIntegrationFieldFromJSONTyped(json, false);
}

export function HydratedIntegrationFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): HydratedIntegrationField {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...HydratedIntegrationFieldExistentFromJSONTyped(json, true), ...IntegrationFieldMappingFromJSONTyped(json, true) };
}

export function HydratedIntegrationFieldToJSON(value?: HydratedIntegrationField | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfHydratedIntegrationFieldExistent(value)) {
        return HydratedIntegrationFieldExistentToJSON(value as HydratedIntegrationFieldExistent);
    }
    if (instanceOfIntegrationFieldMapping(value)) {
        return IntegrationFieldMappingToJSON(value as IntegrationFieldMapping);
    }

    return {};
}

