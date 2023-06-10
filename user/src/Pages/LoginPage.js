import React from 'react'
import { Outlet } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <Outlet />
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] my-12" />
      </div>
    </>
  );
}

export default LoginPage