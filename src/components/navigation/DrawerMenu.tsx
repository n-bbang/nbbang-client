import {observer} from 'mobx-react';
import React, {createContext, useContext, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getDummyUser} from '../../shared/functions/makeDummyData';
import HomeStore from '../../stores/HomeStore';
import Icon from 'react-native-vector-icons/AntDesign';
import {useRoute} from '@react-navigation/core';

interface DrawerMenuProps {
  goToHome: () => void;
  goToProfile: () => void;
}

const HomeContext = createContext<HomeStore>(new HomeStore());

const DrawerMenu = observer(({goToHome, goToProfile}: DrawerMenuProps) => {
  const homeStore = useContext(HomeContext);

  //   console.log('homeStore.user, ', homeStore.user);

  const route = useRoute();
  console.log('route in DrawerMenu, ', route);

  useEffect(() => {
    homeStore.setUser(getDummyUser());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.myInfoContainer}>
        <Text style={styles.nameText}>{homeStore.user?.name}</Text>
        <Text>{homeStore.user?.loginId}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View>
          <TouchableOpacity style={styles.drawerButton} onPress={goToHome}>
            <Icon
              style={styles.drawerIcon}
              name="home"
              size={24}
              color="black"
            />
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerButton} onPress={goToProfile}>
            <Icon
              style={styles.drawerIcon}
              name="user"
              size={24}
              color="black"
            />
            <Text>Profile</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
});

export default DrawerMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 8,
    paddingVertical: 24,
  },
  myInfoContainer: {
    paddingBottom: 24,
  },
  nameText: {
    fontSize: 24,
  },

  drawerButton: {
    flexDirection: 'row',
    // width: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  drawerIcon: {
    marginRight: 16,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
