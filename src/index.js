import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { GlobalStyle } from 'styleConfig/GlobalStyle';
import { theme } from 'styleConfig/theme';
import { store } from './redux/store';
import { App } from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {/* <PersisGate loading={null} persistor={persistor}></PersisGate> */}
        <BrowserRouter basename="/goit-react-hw-08-phonebook/">
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
