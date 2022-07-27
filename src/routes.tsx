import { Home } from '~/pages/home';

export interface RoutesType {
  title: string;
  pathname: string;
  keywords?: string;
  description?: string;
  component: () => JSX.Element;
}

export const routes: RoutesType[] = [
  {
    title: 'Home',
    pathname: '/',
    component: Home,
  },
];
