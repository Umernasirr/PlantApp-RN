import React from 'react';
import { Card, Text, Avatar, Layout } from '@ui-kitten/components';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
export default CardDisplay = ({ image, text, count }) => (
	<Card style={styles.card}>
		<TouchableOpacity>
			<Avatar size="large" style={styles.image} source={image}></Avatar>
			<Text style={styles.text}>{text}</Text>
			<Text appearance="hint" style={styles.count}>
				{count} products
			</Text>
		</TouchableOpacity>
	</Card>
);

const styles = StyleSheet.create({
	card: {
		height: 120,
		width: 120,
		marginHorizontal: 20,
		marginBottom: 20,
		justifyContent: 'center',
		// backgroundColor: '#f5fffc',
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
