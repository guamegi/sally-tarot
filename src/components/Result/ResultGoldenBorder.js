import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
`;
const GoldenBorder = styled.Image`
  width: 100%;
  height: 60px;
`;
const PeriodText = styled.Text`
  margin: 0px 20px;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
`;

const ResultGoldenBorder = ({ period }) => {
  console.log(period);
  return (
    <Wrapper>
      <GoldenBorder
        resizeMode="contain"
        source={require("assets/images/goldenBorder.jpg")}
      />
      <PeriodText>{period}</PeriodText>
      <GoldenBorder
        resizeMode="contain"
        source={require("assets/images/goldenBorder.jpg")}
      />
    </Wrapper>
  );
};

export default ResultGoldenBorder;
