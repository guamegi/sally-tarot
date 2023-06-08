import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import TotalMenu from "../screens/TotalMenu";
import Settings from "../screens/Settings";
import SettingsLang from "../screens/SettingsLang";
import Save from "../screens/Save";
import Play from "../screens/Play";
import Result from "../screens/Result";

const Nav = createNativeStackNavigator();

const Root = () => {
  return (
    <Nav.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        // headerBackTitleVisible: false,
        // headerStyle: { backgroundColor: isDark ? BLACK_COLOR : "white" },
        // headerTitleStyle: { color: isDark ? "white" : BLACK_COLOR },
      }}
    >
      <Nav.Screen name="Home" component={Home} />
      <Nav.Screen name="TotalMenu" component={TotalMenu} />
      <Nav.Screen name="Settings" component={Settings} />
      <Nav.Screen name="SettingsLang" component={SettingsLang} />
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
