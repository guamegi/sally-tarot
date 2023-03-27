import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  Text,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import Background from "../components/Background";
import Container from "../components/Container";
import HeaderBack from "../components/HeaderBack";
import { StyleSheet } from "react-native";
import { CARDS } from "../data/cards";
import PlayCard from "../components/Play/PlayCard";
import { MIDNIGHT_COLOR, TRANSLUCENT_COLOR } from "../colors";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const borderRadius = 10;
const PlayInfo = styled.View`
  flex: 1.2;
  background-color: ${TRANSLUCENT_COLOR};
  margin: 0px 20px;
  border-radius: ${borderRadius}px;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;
const InfoView = styled.View`
  flex-direction: row;
`;
const PlayInfoImg = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  /* border-width: 1px;
  border-color: white; */
`;
const PlayInfoTitle = styled.Text`
  line-height: 40px;
  font-size: 24px;
  color: white;
  margin-left: 10px;
  font-family: "Georgia";
  text-shadow: 1px 1px 5px black;
`;
const PlayInfoDesc = styled.Text`
  font-size: 16px;
  color: white;
  margin-top: 20px;
  text-shadow: 1px 1px 5px black;
`;

const PlayCanvas = styled.View`
  padding: 40px;
  flex: 4;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: scroll;
  justify-content: space-around;
  margin: 10px;
  border-radius: ${borderRadius}px;
`;

const LoadingView = styled.View`
  width: 100%;
  height: ${SCREEN_HEIGHT}px;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const Control = styled.View`
  padding: 0px 22px;
  flex: 0.8;
  flex-direction: row;
  justify-content: space-evenly;
  /* background-color: rgba(0, 0, 0, 0.3); */
`;
const SuffleBtn = styled.TouchableOpacity`
  background-color: ${MIDNIGHT_COLOR};
  /* width: 100px; */
  flex: 1;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: ${borderRadius * 3}px;
`;
const ChangeBtn = styled(SuffleBtn)`
  flex: 1.5;
  margin-left: 20px;
`;
const SuffleText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;
const ChangeText = styled(SuffleText)``;

// 배열에서 랜덤으로 10개를 선택하는 함수
const getRandomItems = (numItems) => {
  if (CARDS.length <= numItems) {
    return CARDS;
  }
  const result = [];

  // 배열에서 랜덤으로 요구하는 아이템의 개수만큼 선택하기
  while (result.length < numItems) {
    const randomIndex = Math.floor(Math.random() * CARDS.length);
    const randomItem = CARDS[randomIndex];

    // 이미 선택된 아이템인 경우 건너뛰기
    if (result.some((item) => item.id === randomItem.id)) {
      continue;
    }
    result.push(randomItem);
  }
  return result;
};

const Play = ({ navigation: { navigate }, route: { params } }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [randomItems, setRandomItems] = useState([]);
  const selectTime = params.selectTime;

  useEffect(() => {
    suffleCard();
  }, []);

  useEffect(() => {
    if (count >= selectTime) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("Result");
      }, 3000);
      setCount(0);
    }
  }, [count]);

  // This function will be passed as a prop to the PlayCard component
  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  const suffleCard = () => {
    // TODO: animation
    // TODO: card reset
    setRandomItems(getRandomItems(22));
    setCount(0);
  };

  return (
    <Container>
      <Background />
      <HeaderBack />
      <PlayInfo>
        <InfoView>
          <PlayInfoImg resizeMode="stretch" source={params.backdropPath} />
          <PlayInfoTitle>{params.title}</PlayInfoTitle>
        </InfoView>
        <PlayInfoDesc>
          Seriously think the question in your mind, choose {selectTime} cards
          out of 62
        </PlayInfoDesc>
      </PlayInfo>
      {/* TODO: 카드선택 설정 로드 */}
      <PlayCanvas>
        <ImageBackground
          // resizeMode="stretch"
          style={StyleSheet.absoluteFill}
          source={require("assets/images/tableBg.jpg")}
        />
        <ImageBackground
          resizeMode="stretch"
          style={StyleSheet.absoluteFill}
          source={require("assets/images/tableBorder.png")}
        />
        {randomItems.map((card) => (
          <PlayCard
            key={card.id}
            card={card}
            count={count}
            onCountChange={handleCountChange}
          />
        ))}
      </PlayCanvas>
      <Control>
        <SuffleBtn onPress={suffleCard}>
          <SuffleText>Suffle</SuffleText>
        </SuffleBtn>
        <ChangeBtn>
          <ChangeText>Change</ChangeText>
        </ChangeBtn>
      </Control>
      {isLoading && (
        <LoadingView>
          <Image
            resizeMode="contain"
            style={[
              // StyleSheet.absoluteFill,
              {
                width: SCREEN_WIDTH,
                position: "absolute",
                opacity: 0.7,
              },
            ]}
            source={require("assets/images/appIcon.png")}
          />
          <ActivityIndicator size="large" color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: 500,
              marginTop: 10,
            }}
          >
            Loading...
          </Text>
        </LoadingView>
      )}
    </Container>
  );
};

export default Play;
