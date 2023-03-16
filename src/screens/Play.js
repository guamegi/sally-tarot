import { Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Background from "../components/Background";

const GoPage = styled.TouchableOpacity`
  margin: 20px;
  padding: 20px;
  background-color: red;
`;

const Container = styled.View`
  flex: 1;
  padding-top: 30px;
`;

const Play = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <Background />
      <Text>Play</Text>
      <GoPage
        onPress={() => {
          navigate("Result");
        }}
      >
        <Text>go Result</Text>
      </GoPage>
    </Container>
  );
};

export default Play;
