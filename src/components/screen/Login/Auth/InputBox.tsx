import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface InputProps {
	tag: string;
	text: string;
	value: string;
	setValue: Function;
}

const InputBox = ({ tag, text, value, setValue }: InputProps) => {
	return (
		<View style={styles.container}>
			<Text>{tag}</Text>
			<TextInput
				style={[styles.input,{color: !value ? "#949494" : "#000000"}]}
				value={value}
				placeholder={text}
				onChangeText={(text) => setValue(text.replace(' ', ''))}
			/>
		</View>
	);

};

export default InputBox;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
	},
	input: {
		borderBottomWidth: 1,
		borderBottomColor: "#949494",
		height: 50,
	},

});