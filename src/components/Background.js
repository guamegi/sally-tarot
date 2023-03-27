import { View, Text, StyleSheet } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

const Bg = styled.ImageBackground``;

const Background = () => {
  return (
    <>
      <Bg
        style={StyleSheet.absoluteFill}
        // source={require("assets/images/background.jpg")}
        source={require("assets/images/bg.jpg")}
      />
      {/* <LinearGradient
        style={StyleSheet.absoluteFill}
        colors={["transparent", BLACK_COLOR]}
      /> */}
    </>
  );
};

export default Background;
