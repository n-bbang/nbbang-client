import {observer} from 'mobx-react';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  getDummyCategories,
  getDummyRooms,
} from '../../../shared/functions/makeDummyData';
import HomeStore from '../../../stores/HomeStore';
import {CategoryInterface} from '../../../types';
import Home from '../../screen/Home';

interface HomeContainerProps {
  navigation: any;
}

const HomeContext = createContext<HomeStore>(new HomeStore());

const HomeView = observer(({navigation}: {navigation: any}) => {
  const homeStore = useContext(HomeContext);
  useEffect(() => {
    // setCategories(getDummyCategories(5));
    homeStore.setCategories(getDummyCategories(5));
    // console.log(getDummyRooms(5));
    homeStore.setRooms(getDummyRooms(5));
  }, []);
  return (
    <Home
      navigation={navigation}
      categories={homeStore.categories}
      rooms={homeStore.rooms}
    />
  );
});

const HomeContainer = ({navigation}: HomeContainerProps) => {
  // const [categories, setCategories] = useState<CategoryInterface[]>([]);
  return (
    <HomeContext.Provider value={new HomeStore()}>
      <HomeView navigation={navigation} />
      {/* {observer(() => (
        <Home navigation={navigation} categories={categories} />
      ))} */}
    </HomeContext.Provider>
  );
};

export default HomeContainer;

const styles = StyleSheet.create({
  container: {},
});
