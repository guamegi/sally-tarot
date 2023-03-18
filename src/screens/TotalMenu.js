import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Container from "../components/Container";
import Background from "../components/Background";
import HeaderBack from "../components/HeaderBack";

const GoPage = styled.TouchableOpacity`
  padding: 20px;
  background-color: red;
`;

const TotalMenu = () => {
  return (
    <Container>
      <Background />
      <HeaderBack />
      <GoPage>
        <Text>go back</Text>
      </GoPage>
    </Container>
  );
};

export default TotalMenu;
