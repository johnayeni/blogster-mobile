import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { AuthContext } from '../providers/AuthProvider';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  const navigator = useNavigation();

  const { isLoggedIn } = React.useContext(AuthContext);

  React.useEffect(() => {
    if (isLoggedIn) {
      navigator.navigate('Main');
    }
  }, [isLoggedIn]);

  return (
    <Stack.Navigator headerMode="none" initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
