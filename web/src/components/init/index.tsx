import React from 'react';

import { Toaster } from '@fluentui/react-components';

import { toasterID } from '@awesome/shared/constants/appConfig';
import FluentUiProvider from '@awesome/shared/components/fluentUiProvider';

import useWebSocketConnection from '../websockets/useConnection';

const AppRoutes = React.lazy(() => import('./routes'));

const Init: React.FC = () => {
  const { _ref } = useWebSocketConnection();

  return (
    <FluentUiProvider>
      <div className='w-screen h-screen' ref={_ref}>
        <AppRoutes />
        <Toaster toasterId={toasterID} />
      </div>
    </FluentUiProvider>
  );
};

export default Init;
