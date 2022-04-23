import React from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import theme from './theme';

// const root = createRoot(document.getElementById('root'));

ReactDom.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
