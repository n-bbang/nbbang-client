import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import HomeStore from '../../stores/HomeStore';
import HomeContainer from '../container/HomeContainer';
import ProfileContainer from '../container/ProfileContainer';
import DrawerMenu from './DrawerMenu';
import Icon from 'react-native-vector-icons/AntDesign';

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

  console.log('route name in MainDrawerNavigator, ', navigation.state);

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
          <DrawerContentScrollView contentContainerStyle={styles.container}>
            {/* <DrawerMenu goToHome={goToHome} goToProfile={goToProfile} /> */}
            <DrawerItem
              icon={() => <Icon name="home" size={24} color="black" />}
              label={({focused, color}) => <Text>홈</Text>}
              onPress={goToHome}
              // activeBackgroundColor="blue"
              // inactiveBackgroundColor="white"
              focused
            />
            <DrawerItem
              icon={() => <Icon name="user" size={24} color="black" />}
              label="내 정보"
              onPress={goToProfile}
              // activeBackgroundColor="blue"
              // inactiveBackgroundColor="white"
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
  container: {
    flex: 1,
  },

  drawerTextFocused: {
    // fontSize
    color: 'blue',
  },
  drawerText: {
    color: 'black',
  },
});
