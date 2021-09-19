import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {RoomInterface} from '../../../../types';
import Icon from 'react-native-vector-icons/AntDesign';

const WINDOW_WIDTH = Dimensions.get('window').width;

// date 객체를 yy.mm.dd 포맷으로 변경
const dateToYY_MM_DD = (date: Date | undefined) => {
  if (!date) return 'error';

  let year = date.getFullYear().toString().slice(2, 4);
  let month: number | string = date.getMonth() + 1;
  month = month >= 10 ? month : `0${month}`;
  let day: number | string = date.getDate();
  day = day >= 10 ? day : `0${day}`;

  return `${year}.${month}.${day}`;
};

interface RoomItemProps {
  navigation: any;
  roomItem: RoomInterface;
}

const RoomItem = ({navigation, roomItem}: RoomItemProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{roomItem.roomName}</Text>
      <Text>{roomItem.platformId}</Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        {Array.from({length: 3}, (value, index) => {
          return (
            <Icon
              key={index}
              style={{
                marginRight: 10,
              }}
              name="smile-circle"
              size={20}
              color="black"
            />
          );
        })}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text>{dateToYY_MM_DD(roomItem.recentPayment)}까지</Text>
        <Text>{roomItem.personalPrice}원</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoomItem;

const styles = StyleSheet.create({
  container: {
    //   height:100,
    width: (WINDOW_WIDTH - 32) / 2 - 16,

    borderColor: 'gray',
    borderRadius: 4,
    borderWidth: 1,

    padding: 16,
  },
});
