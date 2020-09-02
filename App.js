import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import Navigation from './navigation';
// Screens
import Welcome from './screens/Welcome';
import Explore from './screens/Explore';
import Login from './screens/Login';
import Products from './screens/Products';
import Settings from './screens/Settings';
import Browse from './screens/Browse';
import SignUp from './screens/SignUp';

import { theme } from './constants';
const ScreenStack = createStackNavigator();

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
const AuthScreenStack = () => {
	return (
		<AuthStack.Navigator initialRouteName="Welcome">
			<AuthStack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
			<AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
			<AuthStack.Screen name="SignUp" component={SignUp} />
		</AuthStack.Navigator>
	);
};

const MainScreenStack = () => {
	return (
		<MainStack.Navigator initialRouteName="Browse">
			<MainStack.Screen name="Browse" component={Browse} options={{ headerShown: false }} />
		</MainStack.Navigator>
	);
};

const Screen = () => (
	<ScreenStack.Navigator initialRouteName="AuthScreenStack">
		<ScreenStack.Screen options={{ headerShown: false }} name="AuthScreenStack" component={AuthScreenStack} />
		<ScreenStack.Screen options={{ headerShown: false }} name="MainScreenStack" component={MainScreenStack} />
	</ScreenStack.Navigator>
);

// import All images from assets

const images = [
	require('./assets/icons/plants.png'),
	require('./assets/icons/seeds.png'),
	require('./assets/icons/flowers.png'),
	require('./assets/icons/sprayers.png'),
	require('./assets/icons/pots.png'),
	require('./assets/icons/fertilizers.png'),
	require('./assets/images/plants_1.png'),
	require('./assets/images/plants_2.png'),
	require('./assets/images/plants_3.png'),
	require('./assets/images/explore_1.png'),
	require('./assets/images/explore_2.png'),
	require('./assets/images/explore_3.png'),
	require('./assets/images/explore_4.png'),
	require('./assets/images/explore_5.png'),
	require('./assets/images/explore_6.png'),
	require('./assets/images/avatar.png'),
];
function App() {
	const [isReady, setIsReady] = useState(false);

	const handleResourcesAsync = async () => {
		//   cachingImages for better performance on app

		const cacheImages = images.map((img) => {
			return Asset.fromModule(img).downloadAsync();
		});

		return Promise.all(cacheImages);
	};

	if (!isReady) {
		return (
			<View>
				<AppLoading
					startAsync={handleResourcesAsync}
					onError={(error) => console.warn(error)}
					onFinish={() => setIsReady(true)}
				/>
			</View>
		);
	} else {
		return (
			<NavigationContainer>
				<Screen />
			</NavigationContainer>
		);
	}
}

export default () => (
	<ApplicationProvider {...eva} theme={eva.light}>
		<App />
	</ApplicationProvider>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
