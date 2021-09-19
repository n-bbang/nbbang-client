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

const Result =  ({ movePage, setAuthInfo ,authInfo,page }: ConcentProps) => {



    return (
        <View style={styles.container}>
            
            <Button style={{ marginTop: 40 }} text={"N빵 하러 가기"} action={() =>movePage(page+1)} opposite={false} disabled={false}/>
        </View>
    );
};

export default Result;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
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
