import React from 'react';
import RootNavigator from './navigation/RootNavigator';
import AuthProvider from './providers/AuthProvider';
import GraphQLProvider from './providers/GraphQLProvider';
import ThemeProvider from './providers/ThemeProvider';

const Root: React.FC = () => {
  return (
    <GraphQLProvider>
      <ThemeProvider>
        <AuthProvider>
          <RootNavigator />
        </AuthProvider>
      </ThemeProvider>
    </GraphQLProvider>
  );
};

export default Root;
