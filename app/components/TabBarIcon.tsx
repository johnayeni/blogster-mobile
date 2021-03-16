import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'native-base';

interface Props {
  focused: boolean;
  [key: string]: any;
}

const TabBarIcon: React.FC<Props> = ({ focused, ...rest }) => {
  return (
    <Icon
      style={[
        styles.icon,
        {
          color: focused ? '#000000' : '#666666'
        }
      ]}
      type="Ionicons"
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    marginBottom: 5,
    marginTop: 5,
    fontSize: 20
  }
});

export default TabBarIcon;
