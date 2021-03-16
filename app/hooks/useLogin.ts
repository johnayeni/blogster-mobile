import React from 'react';
import { Toast } from 'native-base';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useUpdateEffect from './useUpdateEffect';
import { LOGIN_MUTATION } from '../graphql/mutations';
import { AuthContext } from '../providers/AuthProvider';

export default function useLogin() {
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION, {
    fetchPolicy: 'no-cache'
  });

  const { setIsLoggedIn } = React.useContext(AuthContext);

  const setLoggedInStatus = async (token: string) => {
    await AsyncStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  const form = useFormik<{ email: string; password: string }>({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit(values) {
      login({ variables: values });
    },
    validate(values) {
      const errors: any = {};
      if (!values.email) {
        errors.email = 'Email is required';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      }
      return errors;
    },
    validateOnChange: true
  });

  const handleFocus = (field: string) => () => {
    form.setFieldError(field, undefined);
  };

  React.useEffect(() => {
    if (error?.message) {
      Toast.show({
        text: error.message,
        duration: 3000,
        type: 'danger'
      });
    }
  }, [error]);

  useUpdateEffect(() => {
    if (data?.login?.token) {
      setLoggedInStatus(data.login.token);
    }
  }, [data]);

  return {
    form,
    loading,
    error,
    handleFocus
  };
}
