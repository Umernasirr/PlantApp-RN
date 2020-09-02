import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Welcome from './screens/Welcome';
import Explore from './screens/Explore';
import Login from './screens/Login';
import Products from './screens/Products';
import Settings from './screens/Settings';
import Browse from './screens/Browse';

import { theme } from './constants';
const ScreenStack = createStackNavigator();
const Screen = () => (
	<ScreenStack.Navigator
		screenOptions={{
			headerStyle: {},
			headerBackImage: () => <Image />,
			headerBackTitle: () => null,
			headerLeftContainerStyle: {},
			headerRightContainerStyle: {},
		}}
	>
		<ScreenStack.Screen name="Welcome" component={Welcome} />
	</ScreenStack.Navigator>
);

export default function App() {
	return (
		<NavigationContainer>
			<Screen />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
