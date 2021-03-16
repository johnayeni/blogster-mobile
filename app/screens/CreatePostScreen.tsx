import React from 'react';
import {
  View,
  Container,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Textarea
} from 'native-base';
import { StyleSheet, Platform, SafeAreaView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import useCreatePost from '../hooks/useCreatePost';
import Header from '../components/Header';
import Layout from '../constants/Layout';

const CreatePostScreen: React.FC = () => {
  const { form, loading, error, handleFocus } = useCreatePost();

  return (
    <Container>
      <Header title="Create Post" showBackButton />
      <Spinner visible={loading && !error} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="always"
      >
        <Form style={styles.form}>
          <Item floatingLabel error={Boolean(form.errors.title)}>
            <Label>Title</Label>
            <Input
              value={form.values.title}
              onChangeText={form.handleChange('title')}
              onFocus={handleFocus('title')}
              onBlur={form.handleBlur('title')}
            />
          </Item>
          {form.errors.title && (
            <Text style={styles.errorText}>{form.errors.title}</Text>
          )}
          <Textarea
            style={styles.textArea}
            rowSpan={10}
            bordered
            placeholder="Body"
            value={form.values.body}
            onChangeText={form.handleChange('body')}
            onFocus={handleFocus('body')}
            onBlur={form.handleBlur('body')}
          />
          {form.errors.body && (
            <Text style={styles.errorText}>{form.errors.body}</Text>
          )}
        </Form>
      </KeyboardAwareScrollView>
      <Button
        block
        large
        dark
        style={styles.bottomButton}
        onPress={form.handleSubmit}
      >
        <Text>Create Post</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 5,
    backgroundColor: '#ffffff'
  },
  form: {
    paddingVertical: 20
  },
  errorText: {
    color: 'firebrick',
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  textArea: {
    marginHorizontal: 10,
    marginTop: 20
  },
  bottomButton: {
    borderRadius: 0,
    ...Platform.select({
      ios: {
        height: 80
      }
    })
  }
});

export default CreatePostScreen;
