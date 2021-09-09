import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HomeContainer from '../container/HomeContainer';
import ProfileContainer from '../container/ProfileContainer';

interface MainDrawerNavigatorProps {
  navigation: any;
}

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = ({navigation}: MainDrawerNavigatorProps) => {
  const goToHome = () => {
    navigation.navigate('HomeContainer');
  };

  const goToProfile = () => {
    navigation.navigate('ProfileContainer');
  };

  return (
    <Drawer.Navigator
      initialRouteName="HomeContainer"
      //   screenOptions={{
      //     drawerStyle: {
      //       backgroundColor: 'red',
      //       width: 500,
      //       height:200,
      //     },
      //     drawerPosition:'right',
      //     drawerType:'front',

      //   }}
      drawerContent={() => {
        return (
          <DrawerContentScrollView>
            <TouchableOpacity onPress={goToHome}>
              <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToProfile}>
              <Text>Profile</Text>
            </TouchableOpacity>
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen
        name="HomeContainer"
        component={HomeContainer}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="ProfileContainer"
        component={ProfileContainer}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;

const styles = StyleSheet.create({
  container: {},
});
