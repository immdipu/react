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


import * as runtime from '../runtime';
import type {
  ApiKey,
  ApiKeyRequest,
  PatchApiKeyRequest,
} from '../models';
import {
    ApiKeyFromJSON,
    ApiKeyToJSON,
    ApiKeyRequestFromJSON,
    ApiKeyRequestToJSON,
    PatchApiKeyRequestFromJSON,
    PatchApiKeyRequestToJSON,
} from '../models';

export interface CreateApiKeyRequest {
    projectId: string;
    apiKey: ApiKeyRequest;
}

export interface DeleteApiKeyRequest {
    projectId: string;
    apiKey: string;
}

export interface GetApiKeyRequest {
    projectId: string;
    apiKey: string;
}

export interface ListApiKeysRequest {
    projectId: string;
    active?: boolean;
}

export interface UpdateApiKeyRequest {
    projectId: string;
    apiKey: string;
    patchApiKeyRequest: PatchApiKeyRequest;
}

/**
 * APIKeyApi - interface
 * 
 * @export
 * @interface APIKeyApiInterface
 */
export interface APIKeyApiInterface {
    /**
     * 
     * @summary Create a new API key
     * @param {string} projectId 
     * @param {ApiKeyRequest} apiKey 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APIKeyApiInterface
     */
    createApiKeyRaw(requestParameters: CreateApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiKey>>;

    /**
     * Create a new API key
     */
    createApiKey(requestParameters: CreateApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiKey>;

    /**
     * 
     * @summary Delete an API key
     * @param {string} projectId 
     * @param {string} apiKey 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APIKeyApiInterface
     */
    deleteApiKeyRaw(requestParameters: DeleteApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete an API key
     */
    deleteApiKey(requestParameters: DeleteApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Get an API key
     * @param {string} projectId 
     * @param {string} apiKey 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APIKeyApiInterface
     */
    getApiKeyRaw(requestParameters: GetApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiKey>>;

    /**
     * Get an API key
     */
    getApiKey(requestParameters: GetApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiKey>;

    /**
     * 
     * @summary List API keys
     * @param {string} projectId 
     * @param {boolean} [active] Whether to include only active API keys. If false, all API keys are included.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APIKeyApiInterface
     */
    listApiKeysRaw(requestParameters: ListApiKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ApiKey>>>;

    /**
     * List API keys
     */
    listApiKeys(requestParameters: ListApiKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ApiKey>>;

    /**
     * 
     * @summary Update an API key
     * @param {string} projectId 
     * @param {string} apiKey 
     * @param {PatchApiKeyRequest} patchApiKeyRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APIKeyApiInterface
     */
    updateApiKeyRaw(requestParameters: UpdateApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiKey>>;

    /**
     * Update an API key
     */
    updateApiKey(requestParameters: UpdateApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiKey>;

}

/**
 * 
 */
export class APIKeyApi extends runtime.BaseAPI implements APIKeyApiInterface {

    /**
     * Create a new API key
     */
    async createApiKeyRaw(requestParameters: CreateApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiKey>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling createApiKey.');
        }

        if (requestParameters.apiKey === null || requestParameters.apiKey === undefined) {
            throw new runtime.RequiredError('apiKey','Required parameter requestParameters.apiKey was null or undefined when calling createApiKey.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/projects/{projectId}/api-keys`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiKeyRequestToJSON(requestParameters.apiKey),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiKeyFromJSON(jsonValue));
    }

    /**
     * Create a new API key
     */
    async createApiKey(requestParameters: CreateApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiKey> {
        const response = await this.createApiKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete an API key
     */
    async deleteApiKeyRaw(requestParameters: DeleteApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling deleteApiKey.');
        }

        if (requestParameters.apiKey === null || requestParameters.apiKey === undefined) {
            throw new runtime.RequiredError('apiKey','Required parameter requestParameters.apiKey was null or undefined when calling deleteApiKey.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/projects/{projectId}/api-keys/{apiKey}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"apiKey"}}`, encodeURIComponent(String(requestParameters.apiKey))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an API key
     */
    async deleteApiKey(requestParameters: DeleteApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteApiKeyRaw(requestParameters, initOverrides);
    }

    /**
     * Get an API key
     */
    async getApiKeyRaw(requestParameters: GetApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiKey>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getApiKey.');
        }

        if (requestParameters.apiKey === null || requestParameters.apiKey === undefined) {
            throw new runtime.RequiredError('apiKey','Required parameter requestParameters.apiKey was null or undefined when calling getApiKey.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/projects/{projectId}/api-keys/{apiKey}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"apiKey"}}`, encodeURIComponent(String(requestParameters.apiKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiKeyFromJSON(jsonValue));
    }

    /**
     * Get an API key
     */
    async getApiKey(requestParameters: GetApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiKey> {
        const response = await this.getApiKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List API keys
     */
    async listApiKeysRaw(requestParameters: ListApiKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ApiKey>>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling listApiKeys.');
        }

        const queryParameters: any = {};

        if (requestParameters.active !== undefined) {
            queryParameters['active'] = requestParameters.active;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/projects/{projectId}/api-keys`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ApiKeyFromJSON));
    }

    /**
     * List API keys
     */
    async listApiKeys(requestParameters: ListApiKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ApiKey>> {
        const response = await this.listApiKeysRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an API key
     */
    async updateApiKeyRaw(requestParameters: UpdateApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiKey>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling updateApiKey.');
        }

        if (requestParameters.apiKey === null || requestParameters.apiKey === undefined) {
            throw new runtime.RequiredError('apiKey','Required parameter requestParameters.apiKey was null or undefined when calling updateApiKey.');
        }

        if (requestParameters.patchApiKeyRequest === null || requestParameters.patchApiKeyRequest === undefined) {
            throw new runtime.RequiredError('patchApiKeyRequest','Required parameter requestParameters.patchApiKeyRequest was null or undefined when calling updateApiKey.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/projects/{projectId}/api-keys/{apiKey}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"apiKey"}}`, encodeURIComponent(String(requestParameters.apiKey))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchApiKeyRequestToJSON(requestParameters.patchApiKeyRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiKeyFromJSON(jsonValue));
    }

    /**
     * Update an API key
     */
    async updateApiKey(requestParameters: UpdateApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiKey> {
        const response = await this.updateApiKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
