import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AppLoading, Asset } from "expo";
import Navigation from "./navigation";
import { Block } from "./components";
// Screens
import Welcome from "./screens/Welcome";
import Explore from "./screens/Explore";
import Login from "./screens/Login";
import Products from "./screens/Products";
import Settings from "./screens/Settings";
import Browse from "./screens/Browse";

import { theme } from "./constants";
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

// import All images from assets

const images = [
  require("./assets/icons/plants.png"),
  require("./assets/icons/seeds.png"),
  require("./assets/icons/flowers.png"),
  require("./assets/icons/sprayers.png"),
  require("./assets/icons/pots.png"),
  require("./assets/icons/fertilizers.png"),
  require("./assets/images/plants_1.png"),
  require("./assets/images/plants_2.png"),
  require("./assets/images/plants_3.png"),
  require("./assets/images/explore_1.png"),
  require("./assets/images/explore_2.png"),
  require("./assets/images/explore_3.png"),
  require("./assets/images/explore_4.png"),
  require("./assets/images/explore_5.png"),
  require("./assets/images/explore_6.png"),
  require("./assets/images/avatar.png"),
];
export default function App() {
  const [isReady, setIsReady] = useState(false);

  const handleResourcesAsync = async () => {
    //   cachingImages for better performance on app

    const cacheImages = images.map((img) => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  if (!isReady) {
    return (
      <View>
        <AppLoading
          startAsync={handleResourcesAsync}
          onError={(error) => console.warn(err)}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
