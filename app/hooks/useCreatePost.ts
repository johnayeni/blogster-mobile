import React from 'react';
import { Toast } from 'native-base';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import useUpdateEffect from './useUpdateEffect';
import { CREATE_POST_MUTATION } from '../graphql/mutations';
import { useNavigation } from '@react-navigation/native';

export default function useCreatePost() {
  const navigator = useNavigation();

  const [createPost, { data, loading, error, client }] = useMutation(
    CREATE_POST_MUTATION,
    {
      fetchPolicy: 'no-cache'
    }
  );

  const form = useFormik<{
    title: string;
    body: string;
  }>({
    initialValues: {
      title: '',
      body: ''
    },
    onSubmit(values) {
      createPost({ variables: values });
    },
    validate(values) {
      const errors: any = {};
      if (!values.title) {
        errors.title = 'Title is required';
      }
      if (!values.body) {
        errors.body = 'Body is required';
      } else if (values.body.length < 30) {
        errors.body = 'Body cannot be less than 30 characters';
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
    if (data?.createPost?.title) {
      Toast.show({
        text: 'Post Created',
        duration: 3000,
        type: 'success'
      });
      client.resetStore();
      navigator.goBack();
    }
  }, [data]);

  return {
    form,
    loading,
    error,
    handleFocus
  };
}
