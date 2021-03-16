import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import {
  Header as NativeBaseHeader,
  Button,
  Text,
  View,
  Icon
} from 'native-base';

interface Props {
  showBackButton?: boolean;
  title: string;
  headerSuffix?: React.ReactNode;
}

const Header: React.FC<Props> = ({ title, showBackButton, headerSuffix }) => {
  const navigation = useNavigation();

  return (
    <NativeBaseHeader transparent style={styles.header}>
      {showBackButton && (
        <View style={styles.left}>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" style={styles.headerIcon} />
          </Button>
        </View>
      )}
      <View
        style={[showBackButton ? styles.center : styles.left, { width: '50%' }]}
      >
        <Text style={[styles.headerText]}>{title}</Text>
      </View>
      <View style={styles.right}>{headerSuffix}</View>
    </NativeBaseHeader>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
    borderBottomColor: '#e6e6e6e6',
    borderBottomWidth: 1,
    elevation: 1,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    height: 60,
    marginHorizontal: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Spartan_bold'
  },
  headerIcon: {
    color: '#000000'
  },
  boldText: {
    fontFamily: 'Spartan_bold',
    fontSize: 20
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '25%'
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '25%'
  }
});

export default Header;
