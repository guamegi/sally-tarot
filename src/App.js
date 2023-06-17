import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Realm from "realm";
import { DBContext } from "./context";
import Root from "./navigation/Root";
import "./i18n";
import { Platform, UIManager } from "react-native";

SplashScreen.preventAutoHideAsync();

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const schemaVersion = 5;
const SaveSchema = {
  name: "Save",
  properties: {
    _id: "int",
    cards: { type: "list", objectType: "Card" },
  },
  primaryKey: "_id",
};
const CardSchema = {
  name: "Card",
  properties: {
    id: { type: "int", indexed: true },
    name: "string",
    isReverse: "bool",
    image: "int",
    upright: { type: "Upright" },
    reverse: { type: "Upright" },
    description: "string",
  },
  // primaryKey: "id",
};
const UprightSchema = {
  name: "Upright",
  properties: {
    keyword: { type: "list", objectType: "string" },
    meaning: "string",
  },
};

const SettingsSchema = {
  name: "Settings",
  properties: {
    _id: "string",
    showReversedCard: "bool?",
    cardSelection: "int",
    langSelection: "string",
  },
  primaryKey: "_id",
};

export default function App() {
  const [ready, setReady] = useState(false);
  const [realm, setRealm] = useState(null);

  useFonts({
    Georgia: require("./assets/fonts/Georgia.ttf"),
  });

  const startLoading = async () => {
    const connection = await Realm.open({
      path: "sallyTarotDB",
      schema: [SaveSchema, CardSchema, UprightSchema, SettingsSchema],
      schemaVersion: schemaVersion,
    });
    setRealm(connection);
  };

  // TODO: 임시
  useEffect(() => {
    async function prepare() {
      try {
        startLoading();
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (ready) {
      await SplashScreen.hideAsync();
    }
  }, [ready]);

  if (!ready) {
    return null;
  }

  return (
    <DBContext.Provider value={realm}>
      <NavigationContainer onReady={onLayoutRootView}>
        <StatusBar style="auto" />
        <Root />
      </NavigationContainer>
    </DBContext.Provider>
  );
}
