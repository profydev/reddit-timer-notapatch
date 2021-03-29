import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './globalStyles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
