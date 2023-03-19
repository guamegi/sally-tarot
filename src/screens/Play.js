import { Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Background from "../components/Background";
import Container from "../components/Container";
import HeaderBack from "../components/HeaderBack";

const GoPage = styled.TouchableOpacity`
  margin-bottom: 10px;
  padding: 20px;
  background-color: red;
`;

const Play = ({ navigation: { navigate }, route: { params } }) => {
  console.log(params);
  return (
    <Container>
      <Background />
      <HeaderBack />
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
