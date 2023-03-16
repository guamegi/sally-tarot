import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import TotalMenu from "../screens/TotalMenu";
import Setting from "../screens/Setting";
import Save from "../screens/Save";
import Play from "../screens/Play";
import Result from "../screens/Result";
import { BLACK_COLOR } from "../colors";
import { useColorScheme } from "react-native";

const Nav = createNativeStackNavigator();

const Root = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <Nav.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: isDark ? BLACK_COLOR : "white" },
        headerTitleStyle: { color: isDark ? "white" : BLACK_COLOR },
      }}
    >
      <Nav.Screen name="Home" component={Home} />
      <Nav.Screen name="TotalMenu" component={TotalMenu} />
      <Nav.Screen name="Setting" component={Setting} />
      <Nav.Screen name="Save" component={Save} />
      <Nav.Screen name="Play" component={Play} />
      <Nav.Screen
        options={{ presentation: "fullScreenModal" }}
        name="Result"
        component={Result}
      />
    </Nav.Navigator>
  );
};

export default Root;
