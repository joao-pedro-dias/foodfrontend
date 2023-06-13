import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';

import { AuthProvider } from "../src/hooks/auth";

import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { ViewDish } from '../src/pages/ViewDish';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <ThemeProvider theme={ theme }>
  //     <GlobalStyles />
  //     <AuthProvider>
  //       <Routes/>
  //     </AuthProvider>
  //   </ThemeProvider>
  // </React.StrictMode>

  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <ViewDish />
    </ThemeProvider>
  </React.StrictMode>
)
