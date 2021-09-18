import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { DrawerActions } from '@react-navigation/routers';
import InputBox from './InputBox';
import Button from '../../../shared/functions/Button';

interface LoginProps {
  navigation: any;
}

const LoginInput = ({ navigation }: LoginProps) => {
  const [id, setId] = React.useState<string>('');
  const [pw, setPw] = React.useState<string>('');
  const [auto, setAuto] = React.useState<boolean>(false);



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text>Nbbang</Text>
      </View>
      <InputBox tag={"아이디"} text={"아이디를 입력해 주세요"} value={id} setValue={setId} />
      <InputBox tag={"비밀번호"} text={"비밀번호를 입력해 주세요"} value={pw} setValue={setPw} />
      <View style={styles.check}>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => {
            setAuto(!auto)
          }}
        >
          <Icon name={auto ? "downcircle" : "downcircleo"} size={15} />
          <Text>로그인 상태 유지</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>아이디 / 비밀번호 찾기</Text>
        </TouchableOpacity>
      </View>
      <Button style={{ marginTop: 40 }} text={"로그인"} action={() => { }} opposite={false} disabled={false}/>
      <Button style={{ marginTop: 20 }} text={"회원가입"} action={()=>navigation.navigate("Auth")} opposite={true} disabled={false}/>
      <Text style={styles.snslogin}>---- SNS LOGIN ----</Text>
    </SafeAreaView>
  );
};

export default LoginInput;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16
  },
  title: {
    alignSelf: 'center',
    paddingTop: 100
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
