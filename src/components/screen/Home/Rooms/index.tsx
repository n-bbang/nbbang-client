import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {RoomInterface} from '../../../../types';
import RoomItem from './RoomItem';

interface RoomsProps {
  navigation?: any;
  rooms: RoomInterface[];
}

const Rooms = ({navigation, rooms}: RoomsProps) => {
  console.log('rooms in Rooms, ', rooms);
  return (
    <View style={styles.container}>
      <FlatList
        data={rooms}
        keyExtractor={item => String(item.roomId)}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                marginRight: index % 2 === 0 ? 16 : 0,
                marginTop: 32,
              }}>
              <RoomItem navigation={navigation} roomItem={item} />
            </View>
          );
        }}
        numColumns={2}
      />
    </View>
  );
};

export default Rooms;

const styles = StyleSheet.create({
  container: {flex: 1},
});
