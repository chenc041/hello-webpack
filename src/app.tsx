import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from '~/routes';
import { Helmet } from 'react-helmet';
import { GlobalContext } from '~/context';
import { BasicLayout } from '~/layout/basicLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: routes.map(({ path, component, title, keywords, description }) => {
      return {
        path,
        element: (
          <>
            <Helmet>
              <title>{title}</title>
              <meta name="description" content={description} />
              <meta name="keywords" content={keywords} />
            </Helmet>
            {component}
          </>
        ),
      };
    }),
  },
]);

const App = () => {
  const [appName, setAppName] = React.useState('demo');
  return (
    <GlobalContext.Provider value={{ appName, setAppName }}>
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  );
};

export default App;
