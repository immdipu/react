import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';

import { ErrorTextBox } from 'components/ErrorTextBox';
import { useApiKey } from 'context/ApiKeyContextProvider';
import { useConnections } from 'context/ConnectionsContextProvider';
import {
  ErrorBoundary, useErrorState,
} from 'context/ErrorContextProvider';
import { useInstallIntegrationProps } from 'context/InstallIntegrationContextProvider';
import { api, HydratedRevision } from 'services/api';

interface HydratedRevisionContextValue {
  hydratedRevision: HydratedRevision | null;
  loading: boolean;
}

export const HydratedRevisionContext = createContext<HydratedRevisionContextValue>({
  hydratedRevision: null,
  loading: false,
});

export const useHydratedRevision = () => {
  const context = useContext(HydratedRevisionContext);

  if (!context) {
    throw new Error('useHydratedRevision must be used within a HydratedRevisionProvider');
  }

  return context;
};

type HydratedRevisionProviderProps = {
  projectId?: string | null;
  children?: React.ReactNode;
};

export function HydratedRevisionProvider({
  projectId,
  children,
}: HydratedRevisionProviderProps) {
  const { selectedConnection } = useConnections();
  const { integrationId, integrationObj } = useInstallIntegrationProps();

  const [hydratedRevision, setHydratedRevision] = useState<HydratedRevision | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { isError, removeError, setError } = useErrorState();
  const apiKey = useApiKey();

  const connectionId = selectedConnection?.id;
  const revisionId = integrationObj?.latestRevision?.id;
  const errorIntegrationIdentifier = integrationObj?.name || integrationId;

  useEffect(() => {
    // Fetch the hydrated revision data using your API call
    if (
      projectId
      && integrationId
      && revisionId
      && connectionId
      && apiKey
    ) {
      api().revisionApi.getHydratedRevision({
        projectIdOrName: projectId,
        integrationId,
        revisionId,
        connectionId,
      }, {
        headers: {
          'X-Api-Key': apiKey ?? '',
        },
      })
        .then((data) => {
          setHydratedRevision(data);
          setLoading(false);
          removeError(ErrorBoundary.HYDRATED_REVISION, errorIntegrationIdentifier);
        })
        .catch((err) => {
          console.error(`Error loading integration ${errorIntegrationIdentifier}`, err);
          setLoading(false);
          setError(ErrorBoundary.HYDRATED_REVISION, errorIntegrationIdentifier);
        });
    }
  }, [
    projectId,
    integrationId,
    revisionId,
    connectionId,
    apiKey,
    removeError,
    setError,
    errorIntegrationIdentifier]);

  const contextValue = useMemo(() => ({
    hydratedRevision,
    loading,
  }), [hydratedRevision, loading]);

  const errorMsg = `Error retrieving integration details for '${
    integrationObj?.name || integrationId || 'unknown integration'
  }. This is sometimes caused by insufficient permissions with your credentials'`;

  return (
    <HydratedRevisionContext.Provider value={contextValue}>
      {isError(ErrorBoundary.HYDRATED_REVISION, errorIntegrationIdentifier)
        ? <ErrorTextBox message={errorMsg} /> : children}
    </HydratedRevisionContext.Provider>
  );
}
