import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Bg = styled.View`
  flex: 1;
  padding-top: 50px;
`;
const Container = ({ children }) => (
  <>
    <Bg>{children}</Bg>
  </>
);

export default Container;
