import React, { useState } from "react";
import FlipCard from "react-native-flip-card";
import styled from "styled-components/native";

const Container = styled.View`
  width: 50px;
  height: 72px;
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
  const [isClicked, setIsClicked] = useState(true);

  const handleFlipEnd = () => {
    handleSelectCard(card);
    setIsClicked(false);
  };

  return (
    <Container>
      <FlipCard
        friction={10}
        flipHorizontal={true}
        flipVertical={false}
        clickable={isClicked}
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
