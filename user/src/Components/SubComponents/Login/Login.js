import React from 'react';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';

const Login = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-start my-4">
      <Signin />
      <Signup />
    </div>
  );
}

export default Login