import React, { useState } from 'react';
import { Layout, Text, Input, Button } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import Spacer from '../components/Spacer';
import { TouchableWithoutFeedback } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Login = ({ navigation }) => {
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [secureTextEntry, setSecureTextEntry] = useState(true);

	const AlertIcon = () => (
		<MaterialCommunityIcons style={{ margin: 5 }} name="alert-circle-outline" size={20} color="black" />
	);

	const renderIcon = () => (
		<TouchableWithoutFeedback onPress={toggleSecureEntry}>
			{secureTextEntry ? (
				<Ionicons name="md-eye" size={24} color="black" />
			) : (
				<Ionicons name="md-eye-off" size={24} color="black" />
			)}
		</TouchableWithoutFeedback>
	);

	const toggleSecureEntry = () => {
		setSecureTextEntry(!secureTextEntry);
	};

	return (
		<Layout style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
			<Spacer>
				<Text category="h2">Login</Text>
				<Spacer />
				<Input value={email} label="Email" onChangeText={(email) => setEmail(email)} />

				<Spacer />

				<Input
					value={password}
					label="Password"
					caption="Should contain at least 8 symbols"
					accessoryRight={renderIcon}
					captionIcon={AlertIcon}
					secureTextEntry={secureTextEntry}
					onChangeText={(pass) => setPassword(pass)}
				/>
				<Spacer />
				<Button onPress={() => navigation.navigate('MainScreenStack')} style={styles.button} status="success">
					Login
				</Button>

				<Button
					onPress={() => navigation.navigate('Welcome')}
					style={styles.button}
					status="basic"
					appearance="ghost"
				>
					Go Back
				</Button>
				<Spacer />
			</Spacer>
		</Layout>
	);
};

const styles = StyleSheet.create({
	input: {
		flexDirection: 'row',
		marginVertical: 10,
	},

	button: {
		marginHorizontal: 30,
		marginVertical: 10,
	},
});
export default Login;
