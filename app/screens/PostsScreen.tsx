import React from 'react';
import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Container, Content, Fab, Icon } from 'native-base';
import { FlatList, ActivityIndicator, StyleSheet } from 'react-native';

import Header from '../components/Header';
import EmptyList from '../components/EmptyList';
import ErrorPlaceholder from '../components/ErrorPlaceholder';
import PostCard from '../components/PostCard';
import { GET_POSTS_QUERY } from '../graphql/queries';

const PostsScreen: React.FC = () => {
  const navigator = useNavigation();

  const { data, loading, error, refetch } = useQuery(GET_POSTS_QUERY);

  return (
    <Container>
      <Header title="Posts" />
      <FlatList
        data={data?.posts || []}
        refreshing={loading}
        onRefresh={refetch}
        renderItem={({ item }) => (
          <PostCard
            key={String(item.id)}
            {...{
              post: item,
              onPress: () => navigator.navigate('Post', { post: item })
            }}
          />
        )}
        initialNumToRender={25}
        onEndReachedThreshold={0.5}
        keyExtractor={(item) => String(item.id)}
        style={styles.container}
        ListEmptyComponent={
          !loading && !error ? (
            <EmptyList
              title="No posts available"
              description="Create a new post"
              handleActionText="Add Post"
              handleAction={() => navigator.navigate('CreatePost')}
            />
          ) : null
        }
      />
      <ActivityIndicator animating={loading && data?.posts?.length > 0} />
      {data?.posts?.length > 0 && (
        <Fab
          active="true"
          style={styles.fabButton}
          position="bottomRight"
          onPress={() => navigator.navigate('CreatePost')}
        >
          <Icon name="add" type="Ionicons" style={styles.fabButtonIcon} />
        </Fab>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 5
  },
  fabButton: { backgroundColor: '#000000' },
  fabButtonIcon: {
    color: '#ffffff'
  }
});

export default PostsScreen;
