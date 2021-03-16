import React from 'react';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import {
  View,
  Text,
  Container,
  Form,
  Item,
  Input,
  Label,
  Button
} from 'native-base';
import Layout from '../constants/Layout';
import useRegister from '../hooks/useRegister';

interface Props {}

const RegisterScreen: React.FC<Props> = (props) => {
  const navigator = useNavigation();

  const { form, loading, error, handleFocus } = useRegister();

  return (
    <Container>
      <Spinner visible={loading && !error} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="always"
      >
        <Text style={styles.title}>Sign Up</Text>
        <Form style={styles.form}>
          <Item floatingLabel error={Boolean(form.errors.displayName)}>
            <Label>Full name</Label>
            <Input
              textContentType="name"
              value={form.values.displayName}
              onChangeText={form.handleChange('displayName')}
              onFocus={handleFocus('displayName')}
              onBlur={form.handleBlur('displayName')}
            />
          </Item>
          {form.errors.displayName && (
            <Text style={styles.errorText}>{form.errors.displayName}</Text>
          )}
          <Item floatingLabel last error={Boolean(form.errors.email)}>
            <Label>Email</Label>
            <Input
              textContentType="emailAddress"
              value={form.values.email}
              onChangeText={form.handleChange('email')}
              onFocus={handleFocus('email')}
              onBlur={form.handleBlur('email')}
            />
          </Item>
          {form.errors.email && (
            <Text style={styles.errorText}>{form.errors.email}</Text>
          )}
          <Item floatingLabel last error={Boolean(form.errors.password)}>
            <Label>Password</Label>
            <Input
              textContentType="password"
              secureTextEntry
              value={form.values.password}
              onChangeText={form.handleChange('password')}
              onFocus={handleFocus('password')}
              onBlur={form.handleBlur('password')}
            />
          </Item>
          {form.errors.password && (
            <Text style={styles.errorText}>{form.errors.password}</Text>
          )}
        </Form>
        <Button block dark large onPress={form.handleSubmit}>
          <Text>Sign Up</Text>
        </Button>
        <View style={styles.footer}>
          <Text>Have an account ?</Text>
          <Button
            primary
            transparent
            onPress={() => navigator.navigate('Login')}
          >
            <Text>Sign In</Text>
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingTop: Layout.window.height / 4.5,
    paddingHorizontal: 20,
    minHeight: Layout.window.height,
    backgroundColor: '#ffffff'
  },
  title: {
    color: '#000000',
    fontSize: 40,
    fontFamily: 'Spartan_bold'
  },
  form: {
    paddingVertical: 20
  },
  errorText: {
    color: 'firebrick',
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  }
});

export default RegisterScreen;
