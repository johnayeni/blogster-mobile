import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import PostScreen from '../screens/PostScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import { AuthContext } from '../providers/AuthProvider';

const Stack = createStackNavigator();

export default function MainNavigator() {
  const navigator = useNavigation();

  const { isLoggedIn } = React.useContext(AuthContext);

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigator.navigate('Auth');
    }
  }, [isLoggedIn]);

  return (
    <Stack.Navigator initialRouteName="Tab" headerMode="none">
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
    </Stack.Navigator>
  );
}
