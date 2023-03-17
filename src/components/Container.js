import React from "react";
import styled from "styled-components/native";

const Bg = styled.View`
  flex: 1;
  padding-top: 40px;
`;
const Container = ({ children }) => (
  <>
    <Bg>{children}</Bg>
  </>
);

export default Container;
