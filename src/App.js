import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;

export default function App() {
  return (
    <Container>
      <Text>home</Text>
    </Container>
  );
}
