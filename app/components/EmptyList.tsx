import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Container, Icon, Text } from 'native-base';

import Layout from '../constants/Layout';

interface Props {
  title: string;
  description?: string;
  handleActionText?: string;
  handleAction?: () => void;
}

const EmptyList: React.FC<Props> = ({
  title,
  description,
  handleActionText,
  handleAction
}) => {
  return (
    <Container style={styles.container}>
      <Icon name="document" type="Ionicons" style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {handleAction && (
        <Button block dark onPress={handleAction}>
          <Text>{handleActionText}</Text>
        </Button>
      )}
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
    marginBottom: 20
  },
  title: {
    fontSize: 20,
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

export default EmptyList;
