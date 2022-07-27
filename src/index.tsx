import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '~/app';
const anchor = document.getElementById('root');
if (anchor) {
  createRoot(anchor).render(<App />);
}
