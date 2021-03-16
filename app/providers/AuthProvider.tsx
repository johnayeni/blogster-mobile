import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

export const AuthContext = React.createContext<{
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isLoggedIn: false,
  setIsLoggedIn: () => {}
});

const AuthProvider: React.FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const setLoggedInStatus = async () => {
      setLoading(true);
      const token = await AsyncStorage.getItem('token');
      setIsLoggedIn(Boolean(token));
      setLoading(false);
    };
    setLoggedInStatus();
  }, []);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
