import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface HeaderProps {
  num: number;
}

const Header = ({num}: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={{height: 30}}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          justifyContent: 'center',
          paddingHorizontal: 10,
        }}
        onPress={() => navigation.goBack()}>
        <Icon name={'left'} size={20} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text>{headerText(num)}</Text>
      </View>
    </View>
  );
};

const headerText = (num: number) => {
  switch (num) {
    case 1:
      return '회원가입';
    case 2:
      return '아이디 / 비밀번호 찾기';
    case 3:
      return '아이디 찾기';
    case 4:
      return '비밀번호 찾기';
  }
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
