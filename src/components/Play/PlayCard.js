import { View, Text, Image, Alert } from "react-native";
import React from "react";
import FlipCard from "react-native-flip-card";
import styled from "styled-components/native";

const Container = styled.View`
  width: 60px;
  height: 90px;
  margin: 5px;
`;
const FrontView = styled.View``;
const BackView = styled.View``;

const CardImg = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

let count = 0;
const PlayCard = ({ card }) => {
  // console.log(card.id);
  return (
    <Container>
      <FlipCard
        friction={10}
        // perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        // clickable={true}
        onFlipEnd={(isFlipEnd) => {
          // console.log("isFlipEnd", isFlipEnd);
          // TODO: 전역 변수 count 생성하고 isFlipEnd == true면 count++,
          isFlipEnd ? count++ : count--;
          console.log("count", count);

          // count >= 2 이면 로딩 이미지 불러오기
          if (count > 1) {
            Alert.alert("loading...");
            // 3초 후, result 이동
          }
        }}
      >
        <BackView>
          <CardImg
            resizeMode="stretch"
            source={require("assets/images/backCard.webp")}
          />
        </BackView>
        <FrontView>
          <CardImg resizeMode="stretch" source={card.image} />
        </FrontView>
      </FlipCard>
    </Container>
  );
};

export default PlayCard;
