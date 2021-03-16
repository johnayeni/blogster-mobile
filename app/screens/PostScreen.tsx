import React from 'react';
import { View, Text, Container } from 'native-base';
import { StyleSheet, ScrollView } from 'react-native';

import Header from '../components/Header';
import { convertTimestampToDateString, sliceText } from '../utils/helpers';

// @ts-ignore
const PostScreen: React.FC = ({ route }) => {
  const { post } = route.params;

  return (
    <Container>
      <Header title={sliceText(post.title, 15)} showBackButton />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.date}>
          Posted {convertTimestampToDateString(Number(post.timestamp))}
        </Text>
        <Text style={styles.body}>{post.body}</Text>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20
  },
  body: {
    fontSize: 20,
    fontFamily: 'Spartan_medium',
    textAlign: 'justify'
  },
  title: {
    fontSize: 30,
    fontFamily: 'Spartan_bold'
  },
  date: {
    marginVertical: 20,
    fontSize: 15
  }
});

export default PostScreen;
