import { Dimensions, ActivityIndicator } from "react-native";
import React from "react";
import styled from "styled-components/native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  width: 100%;
  height: ${SCREEN_HEIGHT}px;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const LoadingImage = styled.Image`
  width: ${SCREEN_WIDTH}px;
  position: absolute;
  opacity: 0.8;
`;

const LoadingText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 700;
  margin-top: 20px;
  text-shadow: 1px 1px 5px black;
`;

const PlayLoading = () => {
  return (
    <Container>
      <LoadingImage
        resizeMode="contain"
        source={require("assets/images/loading.png")}
      />
      <ActivityIndicator size="large" color="white" />
      <LoadingText>Loading...</LoadingText>
    </Container>
  );
};

export default PlayLoading;
