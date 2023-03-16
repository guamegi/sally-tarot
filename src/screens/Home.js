import { Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Background from "../components/Background";
import Container from "../components/Container";

const GoPage = styled.TouchableOpacity`
  margin-bottom: 10px;
  padding: 20px;
  background-color: red;
`;

const Home = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <Background />
      <GoPage onPress={() => navigate("Play")}>
        <Text>go play</Text>
      </GoPage>
      <GoPage onPress={() => navigate("Save")}>
        <Text>go save</Text>
      </GoPage>
      <GoPage onPress={() => navigate("TotalMenu")}>
        <Text>go totalmenu</Text>
      </GoPage>
    </Container>
  );
};

export default Home;
