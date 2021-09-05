import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ProfileContainerProps {}

const ProfileContainer = (props: ProfileContainerProps) => {
  return (
    <View style={styles.container}>
      <Text>ProfileContainer</Text>
    </View>
  );
};

export default ProfileContainer;

const styles = StyleSheet.create({
  container: {}
});
