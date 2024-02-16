import {
  createContext, useCallback,
  useContext, useEffect, useMemo, useState,
} from 'react';

import { LoadingIcon } from '../assets/LoadingIcon';
import { ErrorTextBox } from '../components/ErrorTextBox';
import {
  api, Config, Installation, Integration,
} from '../services/api';
import { findIntegrationFromList } from '../utils';

import { useApiKey } from './ApiKeyContextProvider';
import { ErrorBoundary, useErrorState } from './ErrorContextProvider';
import { useIntegrationList } from './IntegrationListContextProvider';
import { useProject } from './ProjectContextProvider';

// Define the context value type
interface InstallIntegrationContextValue {
  integrationId: string;
  provider: string;
  integrationObj?: Integration | null;
  consumerRef: string;
  consumerName?: string;
  groupRef: string;
  groupName?: string;
  installation?: Installation;
  setInstallation: (installationObj: Installation) => void;
  resetInstallations: () => void;
  onInstallSuccess?: (installationId: string, config: Config) => void;
  onUpdateSuccess?: (installationId: string, config: Config) => void;
}
// Create a context to pass down the props
export const InstallIntegrationContext = createContext<InstallIntegrationContextValue>({
  integrationId: '',
  provider: '',
  integrationObj: undefined,
  consumerRef: '',
  consumerName: '',
  groupRef: '',
  groupName: '',
  installation: undefined,
  setInstallation: () => { },
  resetInstallations: () => { },
  onInstallSuccess: undefined,
  onUpdateSuccess: undefined,
});

// Create a custom hook to access the props
export function useInstallIntegrationProps() {
  const context = useContext(InstallIntegrationContext);
  if (!context) {
    throw new Error('useInstallIntegrationProps must be used within an InstallIntegrationProvider');
  }
  return context;
}

interface InstallIntegrationProviderProps {
  integration: string, // integration name
  consumerRef: string,
  consumerName?: string,
  groupRef: string,
  groupName?: string,
  children: React.ReactNode,
  onInstallSuccess?: (installationId: string, config: Config) => void,
  onUpdateSuccess?: (installationId: string, config: Config) => void,
}

// Wrap your parent component with the context provider
export function InstallIntegrationProvider({
  children, integration, consumerRef, consumerName, groupRef, groupName, onInstallSuccess, onUpdateSuccess,
}: InstallIntegrationProviderProps) {
  const apiKey = useApiKey();
  const { projectId } = useProject();
  const { integrations } = useIntegrationList();

  const [installations, setInstallations] = useState<Installation[]>([]);
  const [isLoading, setLoadingState] = useState<boolean>(true);
  const { setError, isError } = useErrorState();

  const installation = installations?.[0] || null; // there should only be one installation for mvp

  const integrationObj = useMemo(
    () => findIntegrationFromList(integration, integrations || []),
    [integration, integrations],
  );

  useEffect(() => {
    if (integrationObj === null && integrations?.length) {
      console.error(`Integration "${integration}" not found in integration list`);
    }
  }, [integration, integrationObj, integrations]);

  // default set the installations array with a single installation object
  // may need to find and update the installation object in the future
  const setInstallation = useCallback((installationObj: Installation) => {
    setInstallations([installationObj]);
  }, [setInstallations]);

  const resetInstallations = useCallback(
    () => {
      if (integrationObj?.id) {
      // check if installation exists on selected integration
        api().installationApi.listInstallations({
          projectId,
          integrationId:
          integrationObj.id,
          groupRef,
        }, {
          headers: {
            'X-Api-Key': apiKey ?? '',
          },
        })
          .then((_installations) => {
            setLoadingState(false);
            setInstallations(_installations || []);
          })
          .catch((err) => {
            setError(ErrorBoundary.INSTALLATION_LIST, integrationObj.id);
            setLoadingState(false);
            console.error('Error retrieving installation information: ', err);
          });
      }
    },
    [integrationObj, projectId, apiKey, setError, groupRef],
  );

  const integrationErrorKey: string = integrationObj?.id || '';

  // check if integration has been installed in AmpersandProvider
  useEffect(() => {
    resetInstallations();
  }, [resetInstallations]);

  const props = useMemo(() => ({
    integrationId: integrationObj?.id || '',
    provider: integrationObj?.provider || '',
    integrationObj,
    consumerRef,
    consumerName,
    groupRef,
    groupName,
    installation,
    setInstallation,
    resetInstallations,
    onInstallSuccess,
    onUpdateSuccess,
  }), [integrationObj, consumerRef, consumerName, groupRef,
    groupName, installation, setInstallation, resetInstallations, onInstallSuccess, onUpdateSuccess]);

  if (integrationObj !== null) {
    const errorMessage = 'Error retrieving installation information for integration '
     + `"${integrationObj?.name || 'unknown'}"`;

    return (
      isError(ErrorBoundary.INSTALLATION_LIST, integrationErrorKey))
      ? <ErrorTextBox message={errorMessage} /> : (
        <InstallIntegrationContext.Provider value={props}>
          {isLoading ? <LoadingIcon /> : children}
        </InstallIntegrationContext.Provider>
      );
  }

  // if integration not found, return error message
  return <ErrorTextBox message={`Integration "${integration}" not found`} />;
}
