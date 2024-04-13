import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Parabens from "./pages/Parabens/Parabens";
import Home from "./pages/Home/Home";
import VideoPlayer from "./pages/VideoPlayer/VideoPlayer";

const Stack = createNativeStackNavigator();

export default function routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Parabens"
          component={Parabens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VideoPlayer"
          component={VideoPlayer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
