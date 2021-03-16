import React from 'react';
import { Toast } from 'native-base';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import useUpdateEffect from './useUpdateEffect';
import { REGISTER_MUTATION } from '../graphql/mutations';
import { useNavigation } from '@react-navigation/native';

export default function useRegister() {
  const navigator = useNavigation();

  const [register, { data, loading, error }] = useMutation(REGISTER_MUTATION, {
    fetchPolicy: 'no-cache'
  });

  const form = useFormik<{
    displayName: string;
    email: string;
    password: string;
  }>({
    initialValues: {
      displayName: '',
      email: '',
      password: ''
    },
    onSubmit(values) {
      register({ variables: values });
    },
    validate(values) {
      const errors: any = {};
      if (!values.displayName) {
        errors.displayName = 'Full name is required';
      }
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
    if (data?.register?.message) {
      Toast.show({
        text: data?.register?.message,
        duration: 3000,
        type: 'success'
      });
      navigator.navigate('Login');
    }
  }, [data]);

  return {
    form,
    loading,
    error,
    handleFocus
  };
}
