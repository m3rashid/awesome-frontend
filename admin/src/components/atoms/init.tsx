import React from 'react';

import { Toaster } from '@fluentui/react-components';

import { toasterID } from '@awesome/shared/constants/appConfig';
import FluentUiProvider from '@awesome/shared/components/fluentUiProvider';

const AppRoutes = React.lazy(() => import('../routes'));

const Init: React.FC = () => {
  return (
    <FluentUiProvider>
      <div className='w-screen h-screen'>
        <AppRoutes />
        <Toaster toasterId={toasterID} />
      </div>
    </FluentUiProvider>
  );
};

export default Init;
