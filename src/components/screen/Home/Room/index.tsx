import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface RoomProps {}

const Room = (props: RoomProps) => {
  return (
    <View style={styles.container}>
      <Text>Room</Text>
    </View>
  );
};

export default Room;

const styles = StyleSheet.create({
  container: {}
});
