import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';

interface Props {
  text: string;
  focused: boolean;
}

const TabBarLabel: React.FC<Props> = ({ text, focused }) => {
  return (
    <View>
      <Text
        style={[
          styles.label,
          {
            color: focused ? '#000000' : '#666666',
            fontFamily: focused ? 'Spartan_bold' : 'Spartan'
          }
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 12,
    fontSize: 12,
    textAlign: 'center'
  }
});

export default TabBarLabel;
