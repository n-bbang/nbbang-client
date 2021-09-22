import {observer} from 'mobx-react';
import React, {createContext, useContext, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getDummyUser} from '../../shared/functions/makeDummyData';
import HomeStore from '../../stores/HomeStore';

interface DrawerMenuProps {
  goToHome: () => void;
  goToProfile: () => void;
}

const HomeContext = createContext<HomeStore>(new HomeStore());

const DrawerMenu = observer(({goToHome, goToProfile}: DrawerMenuProps) => {
  const homeStore = useContext(HomeContext);

  console.log('homeStore.user, ', homeStore.user);

  useEffect(() => {
    homeStore.setUser(getDummyUser());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{homeStore.user?.name}</Text>
      </View>
      <View style={styles.contentContainer}>
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
      </View>
    </SafeAreaView>
  );
});

export default DrawerMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
