import React from 'react';

export interface GlobalContextType {
  appName: string;
  setAppName: (name: string) => void;
}

export const GlobalContext = React.createContext<GlobalContextType>({
  appName: '',
  setAppName: () => {},
});
