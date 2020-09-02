import React from 'react';
import { Card, Text, Avatar, Layout } from '@ui-kitten/components';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
export default CardDisplay = ({ image, text, count }) => (
	<Card style={styles.card}>
		<TouchableOpacity>
			<Avatar size="medium" style={styles.image} source={image}></Avatar>
			<Text style={styles.text}>{text}</Text>
			<Text appearance="hint" style={styles.count}>
				{count} products
			</Text>
		</TouchableOpacity>
	</Card>
);

const styles = StyleSheet.create({
	card: {
		height: 130,
		width: 130,
		marginHorizontal: 10,
		marginBottom: 10,
		justifyContent: 'center',
		backgroundColor: '#f5fffc',
	},
	image: {
		alignSelf: 'center',
		marginVertical: 10,
	},

	text: {
		textAlign: 'center',
		fontSize: 12,
	},

	count: {
		textAlign: 'center',
		fontSize: 10,
	},
});
