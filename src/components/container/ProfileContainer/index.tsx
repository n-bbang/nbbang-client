import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Profile from '../../screen/Profile';

interface ProfileContainerProps {}

const ProfileContainer = (props: ProfileContainerProps) => {
  return (
    <Profile />
  );
};

export default ProfileContainer;

const styles = StyleSheet.create({
  container: {}
});
