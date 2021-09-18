import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface ButtonProps {
	style: object;
	text: string;
	action: Function;
	opposite : boolean;
	disabled : boolean;
}

const Button = ({ style, text, action ,opposite,disabled }: ButtonProps) => {
	return (
		<TouchableOpacity
			style={[styles.container, style,{backgroundColor: !opposite ? "#60fac1" : "#FFFFFF",}]}
			onPress={()=>action()}
			disabled={disabled}
		>
			<Text style={{alignSelf:'center',color:opposite ? "#60fac1" : "#FFFFFF"}}>{text}</Text>
		</TouchableOpacity>

	);

};

export default Button;

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 80,
		height: 50,
		borderRadius: 50,
		justifyContent:"center",
		borderWidth:1,
		borderColor : "#60fac1"
	},


});