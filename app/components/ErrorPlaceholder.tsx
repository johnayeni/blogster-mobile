import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Container, Icon, Text } from 'native-base';

import Layout from '../constants/Layout';

interface Props {
  error?: string;
  description?: string;
  handleReloadText?: string;
  handleReload: () => void;
}

const ErrorPlaceholder: React.FC<Props> = ({
  error,
  description,
  handleReloadText,
  handleReload
}) => {
  return (
    <Container style={styles.container}>
      <Icon name="warning" type="Ionicons" style={styles.icon} />
      <Text style={styles.title}>{error || 'Error occurred'}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button block dark onPress={handleReload}>
        <Text>{handleReloadText || 'Reload'}</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: Layout.window.height - 200,
    padding: 50
  },
  icon: {
    marginBottom: 20,
    color: 'firebrick'
  },
  title: {
    fontSize: 15,
    fontFamily: 'Spartan_bold',
    maxWidth: 300,
    textAlign: 'center',
    marginBottom: 20
  },
  description: {
    maxWidth: 350,
    textAlign: 'center',
    marginBottom: 20
  }
});

export default ErrorPlaceholder;
