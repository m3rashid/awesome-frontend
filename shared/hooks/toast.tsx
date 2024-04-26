import React from 'react';
import {
  Slot,
  Toast,
  ToastBody,
  ToastTitle,
  ToastFooter,
  useToastController,
} from '@fluentui/react-components';
import { toasterID } from '../constants/appConfig';

export type ToastConfig = {
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: Slot<'div'>;
  subtitle?: Slot<'div'>;
  footer?: React.ReactNode;
  options?: Parameters<
    ReturnType<typeof useToastController>['dispatchToast']
  >[1];
};

const useToast = (toastId: string) => {
  const { dispatchToast, dismissAllToasts, updateToast, dismissToast } =
    useToastController(toasterID);

  const addNotification = (toast: ToastConfig) => {
    return dispatchToast(
      <Toast>
        <ToastTitle action={toast.action}>{toast.title}</ToastTitle>

        {toast.description && toast.subtitle ? (
          <ToastBody {...(toast.subtitle ? { subtitle: toast.subtitle } : {})}>
            {toast.description}
          </ToastBody>
        ) : null}

        <ToastFooter>{toast.footer}</ToastFooter>
      </Toast>,
      toast.options
    );
  };

  const updateNotification = (toast: ToastConfig) => {
    return updateToast({
      content: (
        <Toast>
          <ToastTitle action={toast.action}>{toast.title}</ToastTitle>

          {toast.description && toast.subtitle ? (
            <ToastBody
              {...(toast.subtitle ? { subtitle: toast.subtitle } : {})}
            >
              {toast.description}
            </ToastBody>
          ) : null}

          <ToastFooter>{toast.footer}</ToastFooter>
        </Toast>
      ),
      toastId,
      ...(toast.options || {}),
    });
  };

  const dismissNotification = () => {
    return dismissToast(toastId);
  };

  return {
    addNotification,
    updateNotification,
    dismissNotification,
    dismissAll: dismissAllToasts,
  };
};

export default useToast;
