import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { DrawerActions } from '@react-navigation/routers';
import Button from '../../../../shared/functions/Button';


interface ConcentProps {
    movePage: Function;
    setAuthInfo: Function;
    authInfo :object;
    page : number;
}

const Concent = ({ movePage, setAuthInfo ,authInfo,page }: ConcentProps) => {
    const [selectAll, setSelectAll] = React.useState<boolean>(false);
    const [useAgree, setUseAgree] = React.useState<boolean>(false);
    const [personalAgree, setPersonalAgree] = React.useState<boolean>(false);
    const [marketingAgree, setMarketingAgree] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (useAgree && personalAgree && marketingAgree) setSelectAll(true)
        else setSelectAll(false)

    }, [useAgree, personalAgree, marketingAgree])


    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 23,paddingTop:30 }}>
                    {"반가워요!\n약관내용에 동의해주세요."}
                </Text>
                <Text style={{ paddingTop: 10, fontSize: 13, color: "gray" }}>원할한 서비스 제공을 위해 필수 항목 동의가 필용합니다.</Text>
                <View style={{ paddingTop: 30 }}>
                    <TouchableOpacity
                        style={styles.concentbox}
                        onPress={() => {
                            setSelectAll(!selectAll);
                            setUseAgree(!selectAll);
                            setPersonalAgree(!selectAll);
                            setMarketingAgree(!selectAll);
                        }}
                    >
                        <Icon name={selectAll ? "downcircle" : "downcircleo"} size={15} />
                        <Text style={{ fontSize: 17 }}>전체 약관에 동의 합니다.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.concentbox}
                        onPress={() => {
                            setUseAgree(!useAgree)
                        }}
                    >
                        <Icon name={useAgree ? "downcircle" : "downcircleo"} size={15} />
                        <Text style={styles.agreefont}>엔빵 이용약관 동의</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.concentbox}
                        onPress={() => {
                            setPersonalAgree(!personalAgree)
                        }}
                    >
                        <Icon name={personalAgree ? "downcircle" : "downcircleo"} size={15} />
                        <Text style={styles.agreefont}>개인정보 수집 및 이용 동의</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.concentbox}
                        onPress={() => {
                            setMarketingAgree(!marketingAgree)
                        }}
                    >
                        <Icon name={marketingAgree ? "downcircle" : "downcircleo"} size={15} />
                        <Text style={styles.agreefont}>엔빵 마케팅 수신 동의</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Button style={{ marginTop: 40 }} text={"다음"}
                action={() => {
                    setAuthInfo({
                        ...authInfo,
                        useAtree: useAgree,
                        personalAgree: personalAgree,
                        marketingAgree: marketingAgree
                    })
                    movePage(page + 1)
                }}
                opposite={false}
                disabled={false}
                />
        </View>
    );
};

export default Concent;

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
