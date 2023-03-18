import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Container from "../components/Container";
import Background from "../components/Background";

const GoPage = styled.TouchableOpacity`
  padding: 20px;
  background-color: red;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 14px;
`;

const HistoryBack = styled.TouchableOpacity`
  padding: 4px;
  align-items: center;
`;

const TotalMenu = ({ navigation: { pop } }) => {
  return (
    <Container>
      <Background />
      <Header>
        <HistoryBack onPress={() => pop()}>
          <Ionicons name="chevron-back-outline" size={28} color="#d2dae2" />
        </HistoryBack>
      </Header>
      <GoPage>
        <Text>go back</Text>
      </GoPage>
    </Container>
  );
};

export default TotalMenu;
