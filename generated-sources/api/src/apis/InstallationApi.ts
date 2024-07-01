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
  ApiProblem,
  CreateInstallationRequest,
  ImportInstallationRequest,
  InputValidationProblem,
  Installation,
  UpdateInstallationRequest,
} from '../models';
import {
    ApiProblemFromJSON,
    ApiProblemToJSON,
    CreateInstallationRequestFromJSON,
    CreateInstallationRequestToJSON,
    ImportInstallationRequestFromJSON,
    ImportInstallationRequestToJSON,
    InputValidationProblemFromJSON,
    InputValidationProblemToJSON,
    InstallationFromJSON,
    InstallationToJSON,
    UpdateInstallationRequestFromJSON,
    UpdateInstallationRequestToJSON,
} from '../models';

export interface CreateInstallationOperationRequest {
    projectIdOrName: string;
    integrationId: string;
    installation: CreateInstallationRequest;
}

export interface DeleteInstallationRequest {
    projectIdOrName: string;
    integrationId: string;
    installationId: string;
}

export interface GetInstallationRequest {
    projectIdOrName: string;
    integrationId: string;
    installationId: string;
}

export interface ImportInstallationOperationRequest {
    projectIdOrName: string;
    integrationId: string;
    installation: ImportInstallationRequest;
}

export interface ListInstallationsRequest {
    projectIdOrName: string;
    integrationId: string;
    groupRef?: string;
}

export interface UpdateInstallationOperationRequest {
    projectIdOrName: string;
    integrationId: string;
    installationId: string;
    installationUpdate: UpdateInstallationRequest;
}

/**
 * InstallationApi - interface
 * 
 * @export
 * @interface InstallationApiInterface
 */
export interface InstallationApiInterface {
    /**
     * 
     * @summary Create a new installation
     * @param {string} projectIdOrName 
     * @param {string} integrationId 
     * @param {CreateInstallationRequest} installation 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstallationApiInterface
     */
    createInstallationRaw(requestParameters: CreateInstallationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Installation>>;

    /**
     * Create a new installation
     */
    createInstallation(requestParameters: CreateInstallationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Installation>;

    /**
     * 
     * @summary Delete an installation
     * @param {string} projectIdOrName 
     * @param {string} integrationId 
     * @param {string} installationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstallationApiInterface
     */
    deleteInstallationRaw(requestParameters: DeleteInstallationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete an installation
     */
    deleteInstallation(requestParameters: DeleteInstallationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Get an installation
     * @param {string} projectIdOrName 
     * @param {string} integrationId 
     * @param {string} installationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstallationApiInterface
     */
    getInstallationRaw(requestParameters: GetInstallationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Installation>>;

    /**
     * Get an installation
     */
    getInstallation(requestParameters: GetInstallationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Installation>;

    /**
     * 
     * @summary Import an existing installation
     * @param {string} projectIdOrName 
     * @param {string} integrationId 
     * @param {ImportInstallationRequest} installation 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstallationApiInterface
     */
    importInstallationRaw(requestParameters: ImportInstallationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Installation>>;

    /**
     * Import an existing installation
     */
    importInstallation(requestParameters: ImportInstallationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Installation>;

    /**
     * 
     * @summary List installations
     * @param {string} projectIdOrName 
     * @param {string} integrationId 
     * @param {string} [groupRef] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstallationApiInterface
     */
    listInstallationsRaw(requestParameters: ListInstallationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Installation>>>;

    /**
     * List installations
     */
    listInstallations(requestParameters: ListInstallationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Installation>>;

    /**
     * 
     * @summary Update an installation
     * @param {string} projectIdOrName 
     * @param {string} integrationId 
     * @param {string} installationId 
     * @param {UpdateInstallationRequest} installationUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstallationApiInterface
     */
    updateInstallationRaw(requestParameters: UpdateInstallationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Installation>>;

    /**
     * Update an installation
     */
    updateInstallation(requestParameters: UpdateInstallationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Installation>;

}

/**
 * 
 */
export class InstallationApi extends runtime.BaseAPI implements InstallationApiInterface {

    /**
     * Create a new installation
     */
    async createInstallationRaw(requestParameters: CreateInstallationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Installation>> {
        if (requestParameters.projectIdOrName === null || requestParameters.projectIdOrName === undefined) {
            throw new runtime.RequiredError('projectIdOrName','Required parameter requestParameters.projectIdOrName was null or undefined when calling createInstallation.');
        }

        if (requestParameters.integrationId === null || requestParameters.integrationId === undefined) {
            throw new runtime.RequiredError('integrationId','Required parameter requestParameters.integrationId was null or undefined when calling createInstallation.');
        }

        if (requestParameters.installation === null || requestParameters.installation === undefined) {
            throw new runtime.RequiredError('installation','Required parameter requestParameters.installation was null or undefined when calling createInstallation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/projects/{projectIdOrName}/integrations/{integrationId}/installations`.replace(`{${"projectIdOrName"}}`, encodeURIComponent(String(requestParameters.projectIdOrName))).replace(`{${"integrationId"}}`, encodeURIComponent(String(requestParameters.integrationId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateInstallationRequestToJSON(requestParameters.installation),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InstallationFromJSON(jsonValue));
    }

    /**
     * Create a new installation
     */
    async createInstallation(requestParameters: CreateInstallationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Installation> {
        const response = await this.createInstallationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete an installation
     */
    async deleteInstallationRaw(requestParameters: DeleteInstallationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectIdOrName === null || requestParameters.projectIdOrName === undefined) {
            throw new runtime.RequiredError('projectIdOrName','Required parameter requestParameters.projectIdOrName was null or undefined when calling deleteInstallation.');
        }

        if (requestParameters.integrationId === null || requestParameters.integrationId === undefined) {
            throw new runtime.RequiredError('integrationId','Required parameter requestParameters.integrationId was null or undefined when calling deleteInstallation.');
        }

        if (requestParameters.installationId === null || requestParameters.installationId === undefined) {
            throw new runtime.RequiredError('installationId','Required parameter requestParameters.installationId was null or undefined when calling deleteInstallation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/projects/{projectIdOrName}/integrations/{integrationId}/installations/{installationId}`.replace(`{${"projectIdOrName"}}`, encodeURIComponent(String(requestParameters.projectIdOrName))).replace(`{${"integrationId"}}`, encodeURIComponent(String(requestParameters.integrationId))).replace(`{${"installationId"}}`, encodeURIComponent(String(requestParameters.installationId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an installation
     */
    async deleteInstallation(requestParameters: DeleteInstallationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteInstallationRaw(requestParameters, initOverrides);
    }

    /**
     * Get an installation
     */
    async getInstallationRaw(requestParameters: GetInstallationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Installation>> {
        if (requestParameters.projectIdOrName === null || requestParameters.projectIdOrName === undefined) {
            throw new runtime.RequiredError('projectIdOrName','Required parameter requestParameters.projectIdOrName was null or undefined when calling getInstallation.');
        }

        if (requestParameters.integrationId === null || requestParameters.integrationId === undefined) {
            throw new runtime.RequiredError('integrationId','Required parameter requestParameters.integrationId was null or undefined when calling getInstallation.');
        }

        if (requestParameters.installationId === null || requestParameters.installationId === undefined) {
            throw new runtime.RequiredError('installationId','Required parameter requestParameters.installationId was null or undefined when calling getInstallation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/projects/{projectIdOrName}/integrations/{integrationId}/installations/{installationId}`.replace(`{${"projectIdOrName"}}`, encodeURIComponent(String(requestParameters.projectIdOrName))).replace(`{${"integrationId"}}`, encodeURIComponent(String(requestParameters.integrationId))).replace(`{${"installationId"}}`, encodeURIComponent(String(requestParameters.installationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InstallationFromJSON(jsonValue));
    }

    /**
     * Get an installation
     */
    async getInstallation(requestParameters: GetInstallationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Installation> {
        const response = await this.getInstallationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Import an existing installation
     */
    async importInstallationRaw(requestParameters: ImportInstallationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Installation>> {
        if (requestParameters.projectIdOrName === null || requestParameters.projectIdOrName === undefined) {
            throw new runtime.RequiredError('projectIdOrName','Required parameter requestParameters.projectIdOrName was null or undefined when calling importInstallation.');
        }

        if (requestParameters.integrationId === null || requestParameters.integrationId === undefined) {
            throw new runtime.RequiredError('integrationId','Required parameter requestParameters.integrationId was null or undefined when calling importInstallation.');
        }

        if (requestParameters.installation === null || requestParameters.installation === undefined) {
            throw new runtime.RequiredError('installation','Required parameter requestParameters.installation was null or undefined when calling importInstallation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/projects/{projectIdOrName}/integrations/{integrationId}/installations:import`.replace(`{${"projectIdOrName"}}`, encodeURIComponent(String(requestParameters.projectIdOrName))).replace(`{${"integrationId"}}`, encodeURIComponent(String(requestParameters.integrationId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ImportInstallationRequestToJSON(requestParameters.installation),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InstallationFromJSON(jsonValue));
    }

    /**
     * Import an existing installation
     */
    async importInstallation(requestParameters: ImportInstallationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Installation> {
        const response = await this.importInstallationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List installations
     */
    async listInstallationsRaw(requestParameters: ListInstallationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Installation>>> {
        if (requestParameters.projectIdOrName === null || requestParameters.projectIdOrName === undefined) {
            throw new runtime.RequiredError('projectIdOrName','Required parameter requestParameters.projectIdOrName was null or undefined when calling listInstallations.');
        }

        if (requestParameters.integrationId === null || requestParameters.integrationId === undefined) {
            throw new runtime.RequiredError('integrationId','Required parameter requestParameters.integrationId was null or undefined when calling listInstallations.');
        }

        const queryParameters: any = {};

        if (requestParameters.groupRef !== undefined) {
            queryParameters['groupRef'] = requestParameters.groupRef;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/projects/{projectIdOrName}/integrations/{integrationId}/installations`.replace(`{${"projectIdOrName"}}`, encodeURIComponent(String(requestParameters.projectIdOrName))).replace(`{${"integrationId"}}`, encodeURIComponent(String(requestParameters.integrationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InstallationFromJSON));
    }

    /**
     * List installations
     */
    async listInstallations(requestParameters: ListInstallationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Installation>> {
        const response = await this.listInstallationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an installation
     */
    async updateInstallationRaw(requestParameters: UpdateInstallationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Installation>> {
        if (requestParameters.projectIdOrName === null || requestParameters.projectIdOrName === undefined) {
            throw new runtime.RequiredError('projectIdOrName','Required parameter requestParameters.projectIdOrName was null or undefined when calling updateInstallation.');
        }

        if (requestParameters.integrationId === null || requestParameters.integrationId === undefined) {
            throw new runtime.RequiredError('integrationId','Required parameter requestParameters.integrationId was null or undefined when calling updateInstallation.');
        }

        if (requestParameters.installationId === null || requestParameters.installationId === undefined) {
            throw new runtime.RequiredError('installationId','Required parameter requestParameters.installationId was null or undefined when calling updateInstallation.');
        }

        if (requestParameters.installationUpdate === null || requestParameters.installationUpdate === undefined) {
            throw new runtime.RequiredError('installationUpdate','Required parameter requestParameters.installationUpdate was null or undefined when calling updateInstallation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/projects/{projectIdOrName}/integrations/{integrationId}/installations/{installationId}`.replace(`{${"projectIdOrName"}}`, encodeURIComponent(String(requestParameters.projectIdOrName))).replace(`{${"integrationId"}}`, encodeURIComponent(String(requestParameters.integrationId))).replace(`{${"installationId"}}`, encodeURIComponent(String(requestParameters.installationId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateInstallationRequestToJSON(requestParameters.installationUpdate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InstallationFromJSON(jsonValue));
    }

    /**
     * Update an installation
     */
    async updateInstallation(requestParameters: UpdateInstallationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Installation> {
        const response = await this.updateInstallationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
