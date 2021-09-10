import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'

const InputBox = () => {
	return (
		<TextInput
			style={styles.container}
			defaultValue={"아이디"}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		borderBottomWidth: 1,
		borderColor: "#949494",
		height: 54
	},

});


export default InputBox;