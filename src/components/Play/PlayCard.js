import React, { useRef, useState } from "react";
import FlipCard from "react-native-flip-card";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Container = styled.View`
  /* width: 50px;
  height: 72px; */
  margin: 2px;
  width: ${wp("13%")}px;
  height: ${wp("18%")}px;
`;
const FrontView = styled.View``;
const BackView = styled.View``;

const CardImg = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  transform: ${(props) => (props.isReverse ? "rotate(180deg)" : "")};
`;

const PlayCard = ({ card, handleSelectCard }) => {
  const [isClicked, setIsClicked] = useState(true);

  const handleFlipStart = () => {
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
        onFlipStart={handleFlipStart}
        // onFlipEnd={handleFlipEnd}
      >
        <BackView>
          <CardImg
            resizeMode="stretch"
            source={require("assets/images/backCard.webp")}
          />
        </BackView>
        <FrontView>
          {/* card.isReverse 가 true면 rotate 180 */}
          <CardImg
            resizeMode="stretch"
            source={card.image}
            isReverse={card.isReverse}
          />
        </FrontView>
      </FlipCard>
    </Container>
  );
};
export default PlayCard;
