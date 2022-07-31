import React from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDom from 'react-dom';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import theme from './theme';
import './assets/style/css/index.css';

// const root = createRoot(document.getElementById('root'));

ReactDom.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
