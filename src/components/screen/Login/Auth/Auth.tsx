import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { DrawerActions } from '@react-navigation/routers';
import Concent from './Concent';
import InputInfo from './InputInfo';
import Result from './Result';
import Header from '../Header';


interface AuthProps {
  navigation: any;
}

const Auth = ({ navigation }: AuthProps) => {
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


    const movePage = (page : number) => {
        if(page >= 3) navigation.navigate('MainDrawerNavigation');
        else setPage(page);
    }

    const ChangePage = (page : number) => {
        switch(page) {
            case 0 : return <Concent movePage={movePage} setAuthInfo={setAuthInfo} authInfo={authInfo} page={page}/>;
            case 1 : return <InputInfo movePage={movePage} setAuthInfo={setAuthInfo} authInfo={authInfo} page={page}/>;
            case 2 : return <Result movePage={movePage} setAuthInfo={setAuthInfo} authInfo={authInfo} page={page}/>;
        }
    }



  return (
    <SafeAreaView style={{}}>
        <Header navigation={navigation} num={1}/>
        {
            ChangePage(page)
        }
    </SafeAreaView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16
  },
  header : {
      paddingHorizontal:16,
      alignItems:'center',
      justifyContent:'center'
  },
  check: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  snslogin: {
    color: "#C6C6C8",
    fontSize: 12,
    alignSelf: 'center',
    paddingVertical: 20
  }
});
