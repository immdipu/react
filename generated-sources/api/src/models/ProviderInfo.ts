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
import type { AuthType } from './AuthType';
import {
    AuthTypeFromJSON,
    AuthTypeFromJSONTyped,
    AuthTypeToJSON,
} from './AuthType';
import type { OauthOpts } from './OauthOpts';
import {
    OauthOptsFromJSON,
    OauthOptsFromJSONTyped,
    OauthOptsToJSON,
} from './OauthOpts';
import type { Support } from './Support';
import {
    SupportFromJSON,
    SupportFromJSONTyped,
    SupportToJSON,
} from './Support';

/**
 * 
 * @export
 * @interface ProviderInfo
 */
export interface ProviderInfo {
    /**
     * 
     * @type {AuthType}
     * @memberof ProviderInfo
     */
    authType: AuthType;
    /**
     * 
     * @type {string}
     * @memberof ProviderInfo
     */
    baseURL: string;
    /**
     * 
     * @type {OauthOpts}
     * @memberof ProviderInfo
     */
    oauthOpts: OauthOpts;
    /**
     * 
     * @type {Support}
     * @memberof ProviderInfo
     */
    support: Support;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ProviderInfo
     */
    providerOpts: { [key: string]: string; };
    /**
     * The display name of the provider, if omitted, defaults to provider name.
     * @type {string}
     * @memberof ProviderInfo
     */
    displayName?: string;
    /**
     * If true, we require additional information after auth to start making requests.
     * @type {boolean}
     * @memberof ProviderInfo
     */
    postAuthInfoNeeded?: boolean;
}

/**
 * Check if a given object implements the ProviderInfo interface.
 */
export function instanceOfProviderInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "authType" in value;
    isInstance = isInstance && "baseURL" in value;
    isInstance = isInstance && "oauthOpts" in value;
    isInstance = isInstance && "support" in value;
    isInstance = isInstance && "providerOpts" in value;

    return isInstance;
}

export function ProviderInfoFromJSON(json: any): ProviderInfo {
    return ProviderInfoFromJSONTyped(json, false);
}

export function ProviderInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProviderInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authType': AuthTypeFromJSON(json['authType']),
        'baseURL': json['baseURL'],
        'oauthOpts': OauthOptsFromJSON(json['oauthOpts']),
        'support': SupportFromJSON(json['support']),
        'providerOpts': json['providerOpts'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'postAuthInfoNeeded': !exists(json, 'postAuthInfoNeeded') ? undefined : json['postAuthInfoNeeded'],
    };
}

export function ProviderInfoToJSON(value?: ProviderInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'authType': AuthTypeToJSON(value.authType),
        'baseURL': value.baseURL,
        'oauthOpts': OauthOptsToJSON(value.oauthOpts),
        'support': SupportToJSON(value.support),
        'providerOpts': value.providerOpts,
        'displayName': value.displayName,
        'postAuthInfoNeeded': value.postAuthInfoNeeded,
    };
}

