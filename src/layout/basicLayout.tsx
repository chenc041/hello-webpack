import React from 'react';
import { Outlet } from 'react-router-dom';

export const BasicLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
