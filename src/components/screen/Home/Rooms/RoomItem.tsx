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
import {numberWithComma} from '../../../../shared/functions/number';
import {dateToYYMMDD} from '../../../../shared/functions/date';
const WINDOW_WIDTH = Dimensions.get('window').width;
interface RoomItemProps {
  navigation?: any;
  roomItem: RoomInterface;
}

const RoomItem = ({navigation, roomItem}: RoomItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{
      navigation.navigate('Room');
    }}>
      <Text style={styles.roomName}>{roomItem.roomName}</Text>
      <Text style={styles.platformName}>{roomItem.platformId}</Text>
      <View style={styles.iconsContainer}>
        {Array.from({length: 3}, (value, index) => {
          return (
            <Icon
              key={index}
              style={styles.icon}
              name="smile-circle"
              size={20}
              color="black"
            />
          );
        })}
      </View>
      <View style={styles.datePriceContainer}>
        <Text style={styles.datePriceText}>
          {dateToYYMMDD({date: roomItem.recentPayment, separator: '.'})}까지
        </Text>
        <Text style={styles.datePriceText}>
          <Text style={styles.priceHighlightText}>
            {numberWithComma(roomItem.personalPrice)}
          </Text>
          원
        </Text>
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

  roomName: {
    fontSize: 16,
    // marginBottom:4,
  },
  platformName: {
    fontSize: 12,
    marginBottom: 16,
  },

  iconsContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  icon: {
    marginRight: 10,
  },

  datePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  datePriceText: {
    fontSize: 12,
  },
  priceHighlightText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
