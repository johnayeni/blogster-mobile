import React from 'react';
import { useQuery } from '@apollo/client';
import { ActivityIndicator, Image, StyleSheet } from 'react-native';
import { View, Text, Container, Content, Button } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../components/Header';
import { GET_PROFILE_QUERY } from '../graphql/queries';
import ErrorPlaceholder from '../components/ErrorPlaceholder';
import { AuthContext } from '../providers/AuthProvider';
import { apolloClient } from '../providers/GraphQLProvider';

const ProfileScreen: React.FC = () => {
  const { data, loading, error, refetch, client } = useQuery(GET_PROFILE_QUERY);

  const { setIsLoggedIn } = React.useContext(AuthContext);

  const logOut = async () => {
    await AsyncStorage.clear();
    client.clearStore();
    setIsLoggedIn(false);
  };

  return (
    <Container>
      <Header
        title="Profile"
        headerSuffix={
          <Button dark transparent onPress={logOut}>
            <Text>Logout</Text>
          </Button>
        }
      />
      {loading ? (
        <ActivityIndicator animating />
      ) : error ? (
        <ErrorPlaceholder error={error?.message} handleReload={refetch} />
      ) : (
        <Content contentContainerStyle={styles.content}>
          <Image
            source={{
              uri: `https://ui-avatars.com/api/?name=${data?.profile?.displayName}`
            }}
            style={styles.image}
          />
          <Text style={styles.title}>{data?.profile?.displayName}</Text>
          <Text>{data?.profile?.email}</Text>
        </Content>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginBottom: 20
  },
  title: {
    fontFamily: 'Spartan_bold',
    fontSize: 30,
    marginBottom: 10
  }
});

export default ProfileScreen;
