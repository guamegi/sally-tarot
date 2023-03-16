import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Container from "../components/Container";
import Background from "../components/Background";

const GoPage = styled.TouchableOpacity`
  padding: 20px;
  background-color: red;
`;
const TotalMenu = ({ navigation: { pop } }) => {
  return (
    <Container>
      <Background />
      <GoPage onPress={() => pop()}>
        <Text>go back</Text>
      </GoPage>
    </Container>
  );
};

export default TotalMenu;
