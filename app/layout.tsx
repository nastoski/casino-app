'use client';

import React from 'react';
import Layout from './components/Layout';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}
