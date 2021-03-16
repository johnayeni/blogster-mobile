import React from 'react';
import { Root, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';

const ThemeProvider: React.FC = ({ children }) => {
  return (
    <StyleProvider style={getTheme()}>
      <Root>{children}</Root>
    </StyleProvider>
  );
};

export default ThemeProvider;
