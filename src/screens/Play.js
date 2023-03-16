import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

const GoPage = styled.TouchableOpacity`
  margin: 20px;
  padding: 20px;
  background-color: red;
`;

const Play = ({ navigation: { navigate, goBack } }) => {
  return (
    <View>
      <Text>Play</Text>
      <GoPage
        onPress={() => {
          navigate("Result");
          // goBack();
        }}
      >
        <Text>go Result</Text>
      </GoPage>
    </View>
  );
};

export default Play;
