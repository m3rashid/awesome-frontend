import React from 'react';

import LoginRegisterForm from '@awesome/shared/components/authForm';

const Login: React.FC = () => {
  return <LoginRegisterForm formType='login' authType='tenant' />;
};

export default Login;
