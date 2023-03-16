import { View, Text } from "react-native";
import React from "react";
import Container from "../components/Container";
import Background from "../components/Background";
import styled from "styled-components/native";

const GoPage = styled.TouchableOpacity`
  padding: 20px;
  background-color: red;
`;

const Save = ({ navigation: { pop } }) => {
  return (
    <Container>
      <Background />
      <GoPage onPress={() => pop()}>
        <Text>go back</Text>
      </GoPage>
    </Container>
  );
};

export default Save;
