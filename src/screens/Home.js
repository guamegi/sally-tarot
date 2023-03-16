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
