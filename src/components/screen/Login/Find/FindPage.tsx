import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { DrawerActions } from '@react-navigation/routers';
import Header from '../Header';
import Button from '../../../../shared/functions/Button';

interface FindProps {
  navigation: any;
}

const FindPage = ({ navigation }: FindProps) => {
  const [page,setPage] = React.useState<number>(0);
  const [authInfo,setAuthInfo] = React.useState<object>(
      {
          useAtree: false,
          personalAgree: false,
          marketingAgree : false,
          Pwd : '',
          email :'',
          number :'',
          nickname:'',
      }
  )


  return (
    <SafeAreaView style={{}}>
        <Header navigation={navigation} num={2}/>
        <View>
            <Button style={{ marginTop: 20 }} text={"아이디 찾기"} action={()=>setPage(0)} opposite={false} disabled={false}/>
            <Button style={{ marginTop: 20 }} text={"비밀번호 찾기"} action={()=>setPage(1)} opposite={false} disabled={false}/>
        </View>
    </SafeAreaView>
  );
};

export default FindPage;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16
  },
});
