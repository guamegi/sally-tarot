import { Dimensions, Image, Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Background from "../components/Background";
import Container from "../components/Container";
import HeaderBack from "../components/HeaderBack";
import { StyleSheet } from "react-native";
import { CARDS } from "../data/cards";
import PlayCard from "../components/Play/PlayCard";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
// console.log(SCREEN_WIDTH);
const PlayInfo = styled.View`
  flex: 1;
  /* opacity: 0.7; */
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;
const PlayInfoImg = styled.ImageBackground``;
const PlayInfoTitle = styled.Text`
  font-size: 24px;
  color: white;
  font-family: "Georgia";
`;
const PlayInfoDesc = styled.Text`
  font-size: 16px;
  color: white;
  margin-top: 20px;
`;

const PlayCanvas = styled.View`
  /* background-color: yellow; */
  padding: 10px 5px;
  flex: 4;
  flex-direction: row;
  /* width: ${SCREEN_WIDTH}px; */
  flex-wrap: wrap;
  overflow: scroll;
  justify-content: space-around;
`;

const Play = ({ navigation: { navigate }, route: { params } }) => {
  console.log(params);
  return (
    <Container>
      <Background />
      <HeaderBack />
      <PlayInfo>
        <PlayInfoImg
          style={StyleSheet.absoluteFill}
          source={require("assets/images/menu/daily.jpeg")}
        />
        <PlayInfoTitle>{params.title}</PlayInfoTitle>
        <PlayInfoDesc>
          Seriously think the question in your mind, choose 2 cards out of 62
        </PlayInfoDesc>
      </PlayInfo>
      <PlayCanvas>
        {/* card data 받아서 map으로 생성 */}
        {CARDS.map((card) => (
          <PlayCard key={card.id} card={card} />
        ))}
      </PlayCanvas>
    </Container>
  );
};

export default Play;
