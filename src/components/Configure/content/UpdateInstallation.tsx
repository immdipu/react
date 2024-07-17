import {
  FormEvent, useCallback, useEffect, useMemo, useState,
} from 'react';

import { ErrorBoundary } from 'context/ErrorContextProvider';
import { Installation, Integration } from 'services/api';

import { onSaveReadUpdateInstallation } from '../actions/read/onSaveReadUpdateInstallation';
import { onSaveWriteUpdateInstallation } from '../actions/write/onSaveWriteUpdateInstallation';
import { OTHER_CONST } from '../nav/ObjectManagementNav/constant';
import { setHydrateConfigState } from '../state/utils';
import { validateFieldMappings } from '../utils';

import { ConfigureInstallationBase } from './ConfigureInstallationBase';
import { useMutateInstallation } from './useMutateInstallation';

interface UpdateInstallationProps {
  installation: Installation,
  integrationObj: Integration,
}

//  Update Installation Flow
export function UpdateInstallation(
  { installation, integrationObj }: UpdateInstallationProps,
) {
  const {
    setInstallation, hydratedRevision,
    loading, selectedObjectName, apiKey, projectId,
    resetBoundary, setErrors,
    resetConfigureState, resetPendingConfigurationState, configureState, onUpdateSuccess,
  } = useMutateInstallation();

  const [isLoading, setLoadingState] = useState<boolean>(false);
  // is other selected?
  const isOtherSelected = selectedObjectName === OTHER_CONST;

  // when no installation or config exists, render create flow
  const { config } = installation;

  // 1. get config from installations (contains form selection state)
  // 2. get the hydrated revision (contains full form)
  // 3. generate the configuration state from the hydrated revision and config

  const resetState = useCallback(
    () => {
      resetBoundary(ErrorBoundary.MAPPING);
      // set configurationState when hydratedRevision is loaded
      if (hydratedRevision?.content && !loading && selectedObjectName) {
        setHydrateConfigState(hydratedRevision, config, selectedObjectName, resetConfigureState);
      }
    },
    [resetBoundary, hydratedRevision, loading, selectedObjectName, config, resetConfigureState],
  );

  useEffect(() => {
    if (!configureState) { resetState(); }
  }, [configureState, resetState]);

  // reset state when installation (i.e. config) is reloaded.
  useEffect(() => {
    if (installation) resetState();
  }, [installation, resetState]);

  const hydratedObject = useMemo(() => {
    const hydrated = hydratedRevision?.content?.read?.objects?.find(
      (obj) => obj?.objectName === selectedObjectName,
    );

    return hydrated;
  }, [hydratedRevision, selectedObjectName]);

  const onSaveRead = () => {
    // check if fields with requirements are met
    const { requiredMapFields, selectedFieldMappings } = configureState?.read || {};
    const { errorList } = validateFieldMappings(
      requiredMapFields,
      selectedFieldMappings,
      setErrors,
    );
    if (errorList.length > 0) {
      return;
    }

    if (hydratedRevision && installation && selectedObjectName && apiKey && projectId && hydratedObject) {
      setLoadingState(true);
      const res = onSaveReadUpdateInstallation(
        projectId,
        integrationObj.id,
        installation.id,
        selectedObjectName,
        apiKey,
        configureState,
        setInstallation,
        hydratedObject,
        hydratedRevision,
        onUpdateSuccess,
      );

      res.finally(() => {
        setLoadingState(false);
        resetPendingConfigurationState(selectedObjectName);
      });
    } else {
      console.error('UpdateInstallation - onSaveUpdate missing required props');
    }
  };

  const onSaveWrite = () => {
    if (installation && selectedObjectName && apiKey && projectId && hydratedRevision) {
      setLoadingState(true);
      const res = onSaveWriteUpdateInstallation(
        projectId,
        integrationObj.id,
        installation.id,
        apiKey,
        configureState,
        hydratedRevision,
        setInstallation,
        onUpdateSuccess,
      );

      res.finally(() => {
        setLoadingState(false);
        resetPendingConfigurationState(selectedObjectName);
      });
    } else {
      console.error('UpdateInstallation - onSaveUpdate missing required props');
    }
  };

  const onSave = (e: FormEvent) => {
    e.preventDefault();

    if (!isOtherSelected) {
      onSaveRead();
    } else {
      onSaveWrite();
    }
  };

  return (
    <ConfigureInstallationBase
      onSave={onSave}
      onReset={resetState}
      isLoading={isLoading}
    />
  );
}
