import { Home } from '~/pages/home';
import React from 'react';

export interface RoutesType {
  title: string;
  path: string;
  keywords?: string;
  description?: string;
  component: React.ReactNode;
}

export const routes: RoutesType[] = [
  {
    title: 'Home',
    path: '/',
    component: <Home />,
  },
];
