import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";
import theme from './theme';

const root = createRoot(document.getElementById('root'));

root.render(<React.StrictMode>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
</React.StrictMode>);

// createRoot(
//   <React.StrictMode>
//     <ChakraProvider theme={theme}>
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();