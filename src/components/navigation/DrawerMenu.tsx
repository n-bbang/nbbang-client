import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface DrawerMenuProps {
  goToHome: () => void;
  goToProfile: () => void;
}

const DrawerMenu = ({goToHome, goToProfile}: DrawerMenuProps) => {
  return (
    <>
      <View>
        <TouchableOpacity onPress={goToHome}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToProfile}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text>로그아웃</Text>
      </TouchableOpacity>
    </>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({
  container: {},
});
