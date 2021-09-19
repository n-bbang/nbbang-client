import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface RoomsProps {}

const Rooms = (props: RoomsProps) => {
  return (
    <View style={styles.container}>
      <Text>Rooms</Text>
    </View>
  );
};

export default Rooms;

const styles = StyleSheet.create({
  container: {}
});
