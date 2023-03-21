import { View, Text, Image } from "react-native";
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

const PlayCard = ({ card }) => {
  // console.log(card.id);
  return (
    <Container>
      <FlipCard flipHorizontal={true} flipVertical={false}>
        <BackView>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 4 }}
            resizeMode="stretch"
            source={require("assets/images/backCard.webp")}
          />
        </BackView>
        <FrontView>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 4 }}
            resizeMode="stretch"
            source={card.image}
          />
        </FrontView>
      </FlipCard>
    </Container>
  );
};

export default PlayCard;
