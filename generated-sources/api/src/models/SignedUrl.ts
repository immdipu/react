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
 * @interface SignedUrl
 */
export interface SignedUrl {
    /**
     * The signed URL to upload the zip file to.
     * @type {string}
     * @memberof SignedUrl
     */
    url: string;
    /**
     * The bucket (will match the bucket part of the url).
     * @type {string}
     * @memberof SignedUrl
     */
    bucket: string;
    /**
     * The path (will match the path part of the url).
     * @type {string}
     * @memberof SignedUrl
     */
    path: string;
}

/**
 * Check if a given object implements the SignedUrl interface.
 */
export function instanceOfSignedUrl(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "bucket" in value;
    isInstance = isInstance && "path" in value;

    return isInstance;
}

export function SignedUrlFromJSON(json: any): SignedUrl {
    return SignedUrlFromJSONTyped(json, false);
}

export function SignedUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignedUrl {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': json['url'],
        'bucket': json['bucket'],
        'path': json['path'],
    };
}

export function SignedUrlToJSON(value?: SignedUrl | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
        'bucket': value.bucket,
        'path': value.path,
    };
}

