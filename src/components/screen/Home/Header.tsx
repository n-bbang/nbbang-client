import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.button} />
      <Text>Pie</Text>
      <TouchableOpacity style={styles.button}>
        <Icon name="menu" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 16,

    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  button: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
