import { observer } from 'mobx-react';
import React, {createContext, useContext, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {getDummyUser} from '../../shared/functions/makeDummyData';
import HomeStore from '../../stores/HomeStore';

interface DrawerMenuUserProps {}

const HomeContext = createContext<HomeStore>(new HomeStore());

const DrawerMenuUser = observer((props: DrawerMenuUserProps) => {
  const homeStore = useContext(HomeContext);

  useEffect(() => {
    homeStore.setUser(getDummyUser());
  }, []);

  return (
    <View style={styles.myInfoContainer}>
      <Text style={styles.nameText}>{homeStore.user?.name}</Text>
      <Text>{homeStore.user?.loginId}</Text>
    </View>
  );
})

export default DrawerMenuUser;

const styles = StyleSheet.create({
  myInfoContainer: {
    paddingBottom: 24,

    paddingLeft:16,
  },
  nameText: {
    fontSize: 24,
  },
});
