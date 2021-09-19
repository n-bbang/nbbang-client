import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { DrawerActions } from '@react-navigation/routers';
import Button from '../../../../shared/functions/Button';
import InputBox from '../InputBox';


interface ConcentProps {
    movePage: Function;
    setAuthInfo: Function;
    authInfo :object;
    page : number;
}

const InputInfo =  ({ movePage, setAuthInfo ,authInfo,page }: ConcentProps) => {
    const [email,setEmail] = React.useState<string>('');
    const [pwd,setPwd] = React.useState<string>('');
    const [nickname,setNickname] = React.useState<string>('');
    const [number,setNumber] = React.useState<string>('');

    const errorCheck = () => {
        if(!(email && pwd && nickname && number))
            console.log(!(email && pwd && nickname && number))
    }


    return (
        <View style={styles.container}>
            <View>
                <InputBox tag={"이메일"} text={"이메일를 입력해 주세요"} value={email} setValue={setEmail} />
                <InputBox tag={"비밀번호"} text={"비밀번호를 입력해 주세요"} value={email} setValue={setEmail} />
                <InputBox tag={"비밀번호 확인"} text={"비밀번호를 다시 입력해 주세요"} value={email} setValue={setEmail} />
                <InputBox tag={"닉네임"} text={"닉네임을 입력해 주세요"} value={email} setValue={setEmail} />
            </View>
            <Button style={{ marginTop: 40 }} text={"다음"} action={() => movePage(page+1)} opposite={false} disabled={false}/>
        </View>
    );
};

export default InputInfo;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        justifyContent:'space-between'
    },
    concentbox: {
        flexDirection: 'row',
        height: 50,
        borderBottomWidth: 1,
        borderColor: "gray",
        alignItems: 'center',
    },
    agreefont: {
        fontSize: 13,
    }

});
