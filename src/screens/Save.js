import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Container from "../components/Container";
import Background from "../components/Background";
import styled from "styled-components/native";
import HeaderBack from "../components/HeaderBack";
import { BLACK_COLOR } from "../colors";
import { LinearGradient } from "expo-linear-gradient";

const GoPage = styled.TouchableOpacity`
  padding: 20px;
  background-color: red;
`;

const ContentView = styled.View`
  flex: 1;
`;

const Info = styled.View`
  flex: 0.3;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;
const InfoImg = styled.ImageBackground``;
const InfoTitle = styled.Text`
  font-size: 24px;
  color: white;
  font-family: "Georgia";
  text-shadow: 1px 1px 5px black;
`;
const InfoDesc = styled.Text`
  font-size: 16px;
  color: white;
  margin-top: 20px;
  text-shadow: 1px 1px 5px black;
`;

const Save = ({ navigation: { pop } }) => {
  return (
    <Container>
      <Background />
      <HeaderBack />
      <Info>
        <InfoImg
          style={StyleSheet.absoluteFill}
          source={require("assets/images/playInfo.png")}
        />
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={["transparent", BLACK_COLOR]}
        />
        <InfoTitle>Cabinet</InfoTitle>
        <InfoDesc>View saved tarot results</InfoDesc>
      </Info>
      <ContentView>
        <GoPage onPress={() => pop()}>
          <Text>go back</Text>
        </GoPage>
      </ContentView>
    </Container>
  );
};

export default Save;
