import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

const GoPage = styled.TouchableOpacity`
  margin: 20px;
  padding: 20px;
  background-color: red;
`;

const Result = ({ navigation }) => {
  return (
    <View>
      <Text>Result</Text>
      <GoPage onPress={() => navigation.popToTop()}>
        <Text>go Home</Text>
      </GoPage>
    </View>
  );
};

export default Result;
