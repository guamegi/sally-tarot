import { View, Text, StyleSheet } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Bg = styled.ImageBackground``;

const Background = () => {
  return (
    <>
      <Bg
        style={StyleSheet.absoluteFill}
        source={require("assets/images/background.jpg")}
      />
    </>
  );
};

export default Background;
