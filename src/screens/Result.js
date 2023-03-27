import { Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Background from "../components/Background";
import Container from "../components/Container";
import HeaderClose from "../components/HeaderClose";

const GoPage = styled.TouchableOpacity`
  margin-bottom: 10px;
  padding: 20px;
  background-color: red;
`;

const Result = ({ navigation: { popToTop } }) => {
  return (
    <Container>
      <Background />
      <HeaderClose />
      <GoPage onPress={() => popToTop()}>
        <Text>go Home</Text>
      </GoPage>
    </Container>
  );
};

export default React.memo(Result);
