import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import HomeStore from '../../stores/HomeStore';
import HomeContainer from '../container/HomeContainer';
import ProfileContainer from '../container/ProfileContainer';
import DrawerMenu from './DrawerMenu';

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
      // screenOptions={{
      //   // drawerStyle: {
      //   //   backgroundColor: 'red',
      //   //   width: 500,
      //   //   height:200,
      //   // },
      //   drawerPosition:'right',
      //   // drawerType:'front',

      // }}
      drawerContent={() => {
        return (
          <DrawerContentScrollView
            contentContainerStyle={{
              flex:1,
              justifyContent: 'space-between',
            }}>
            <DrawerMenu 
              goToHome={goToHome}
              goToProfile={goToProfile}
            />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen name="HomeContainer" component={HomeContainer} />
      <Drawer.Screen name="ProfileContainer" component={ProfileContainer} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;

const styles = StyleSheet.create({
  container: {},
});
