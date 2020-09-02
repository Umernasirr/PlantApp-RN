import React from 'react';

import { StyleSheet, View, Image } from 'react-native';
import { Layout, Text, Button, Divider } from '@ui-kitten/components';
import { splash } from '../constants/mocks';
import Spacer from '../components/Spacer';
const Welcome = ({ navigation }) => {
	return (
		<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Layout style={styles.mainText}>
				<Text category="h2">Your Home.</Text>
				<Text style={styles.bold} category="h2" status="success">
					Greener.
				</Text>
			</Layout>
			<Text appearance="hint">Enjoy the experience</Text>
			<Spacer />
			<Divider />
			<Image source={splash} style={styles.splash} />
			<Spacer />

			<Button
				onPress={() => {
					navigation.navigate('Login');
				}}
				style={styles.button}
				status="success"
			>
				Login
			</Button>
			<Button
				onPress={() => {
					navigation.navigate('SignUp');
				}}
				style={styles.button}
				status="success"
				appearance="ghost"
			>
				Signup
			</Button>

			<Spacer />
			<Divider />

			<Button onPress={() => {}} style={styles.button} status="success" appearance="ghost">
				Terms of Service
			</Button>
		</Layout>
	);
};

const styles = StyleSheet.create({
	mainText: {
		flexDirection: 'row',
		margin: 2,
	},

	bold: {
		fontWeight: 'bold',
	},
	splash: {
		height: 300,
		width: 300,
	},

	button: {
		paddingHorizontal: 100,
	},
});

export default Welcome;
