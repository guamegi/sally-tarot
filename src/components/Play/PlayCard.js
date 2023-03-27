import React from "react";
import FlipCard from "react-native-flip-card";
import styled from "styled-components/native";

const Container = styled.View`
  width: 60px;
  height: 90px;
  margin: 2px;
`;
const FrontView = styled.View``;
const BackView = styled.View``;

const CardImg = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

const PlayCard = ({ card, handleSelectCard }) => {
  const handleFlipEnd = () => {
    handleSelectCard(card);
  };

  return (
    <Container>
      <FlipCard
        friction={10}
        // perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        // clickable={true}
        onFlipEnd={handleFlipEnd}
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
