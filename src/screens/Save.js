import { Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Container from "../components/Container";
import Background from "../components/Background";
import HeaderBack from "../components/HeaderBack";
import { TRANSLUCENT_COLOR } from "../colors";

const GoPage = styled.TouchableOpacity`
  padding: 20px;
  background-color: red;
`;

const ContentView = styled.View`
  flex: 1;
`;

const Info = styled.View`
  flex: 0.2;
  background-color: ${TRANSLUCENT_COLOR};
  margin: 0px 20px;
  border-radius: 10px;
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
        {/* <InfoImg
          style={[StyleSheet.absoluteFill, { opacity: 0.5 }]}
          source={require("assets/images/menu/career.jpeg")}
        /> */}
        {/* <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={["transparent", BLACK_COLOR]}
        /> */}
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

export default React.memo(Save);
