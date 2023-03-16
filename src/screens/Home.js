import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

const GoPage = styled.TouchableOpacity`
  margin: 20px;
  padding: 20px;
  background-color: red;
`;

const Home = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text>Home</Text>
      <GoPage onPress={() => navigate("Play")}>
        <Text>go play</Text>
      </GoPage>
      <GoPage onPress={() => navigate("Save")}>
        <Text>go save</Text>
      </GoPage>
      <GoPage onPress={() => navigate("TotalMenu")}>
        <Text>go totalmenu</Text>
      </GoPage>
    </View>
  );
};

export default Home;
