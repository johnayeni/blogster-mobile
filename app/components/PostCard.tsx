import React from 'react';
import { Card, CardItem, Body, Text } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { convertTimestampToDateString, sliceText } from '../utils/helpers';

interface Props {
  post: {
    title: string;
    body: string;
    timestamp: string;
  };
  onPress: () => void;
}

const PostCard: React.FC<Props> = ({ post, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        <CardItem header>
          <Text style={styles.title}>{post.title?.trim()}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{sliceText(post.body, 100)}</Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Text style={styles.date}>
            {convertTimestampToDateString(Number(post.timestamp))}
          </Text>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Spartan_bold',
    fontSize: 25
  },
  date: {
    fontSize: 15
  }
});

export default PostCard;
