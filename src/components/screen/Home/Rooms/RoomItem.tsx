import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {RoomInterface} from '../../../../types';

const WINDOW_WIDTH = Dimensions.get('window').width;

// date 객체를 yy.mm.dd 포맷으로 변경
const dateToYY_MM_DD=(date:Date|undefined)=>{
    if(!date) return 'error';
    return `${date.getFullYear().toString().slice(2, 4)}.${date.getMonth()+1}.${date.getDate()}`
}

interface RoomItemProps {
  navigation: any;
  roomItem: RoomInterface;
}

const RoomItem = ({navigation, roomItem}: RoomItemProps) => {
  return <TouchableOpacity style={styles.container}>
      <Text>{roomItem.roomName}</Text>
      <Text>{roomItem.platformId}</Text>
      <View style={{
          flexDirection:'row',
          justifyContent: 'space-between',
      }}>
          <Text>{dateToYY_MM_DD(roomItem.recentPayment)}까지</Text>
          <Text>{roomItem.personalPrice}원</Text>
      </View>
  </TouchableOpacity>;
};

export default RoomItem;

const styles = StyleSheet.create({
  container: {
    //   height:100,
      width:(WINDOW_WIDTH-32)/2-16,

      borderColor:'gray',
      borderRadius:4,
      borderWidth:1,

      padding:16,
  },
});
