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
import { LinearGradient } from "expo-linear-gradient";
import { BLACK_COLOR } from "../colors";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
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
  text-shadow: 1px 1px 5px black;
`;
const PlayInfoDesc = styled.Text`
  font-size: 16px;
  color: white;
  margin-top: 20px;
  text-shadow: 1px 1px 5px black;
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

const Control = styled.View`
  flex: 1;
  background-color: aqua;
`;

const LoadingView = styled.View`
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.4); */
  position: absolute;
  justify-content: center;
  align-items: center;
`;

// 배열에서 랜덤으로 10개를 선택하는 함수
const getRandomItems = (arr, numItems) => {
  // 배열의 길이가 요구하는 랜덤 아이템의 개수보다 작은 경우
  if (arr.length <= numItems) {
    return arr;
  }
  const result = [];

  // 배열에서 랜덤으로 요구하는 아이템의 개수만큼 선택하기
  while (result.length < numItems) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];

    // 이미 선택된 아이템인 경우 건너뛰기
    if (result.some((item) => item.id === randomItem.id)) {
      continue;
    }
    result.push(randomItem);
  }
  return result;
};

const randomItems = getRandomItems(CARDS, 22);
const Play = ({ navigation: { navigate }, route: { params } }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  // console.log(count);
  const selectTime = params.selectTime;

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

  return (
    <Container>
      <Background />
      <HeaderBack />
      <PlayInfo>
        <PlayInfoImg
          style={StyleSheet.absoluteFill}
          source={require("assets/images/playInfo.png")}
        />
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={["transparent", BLACK_COLOR]}
        />
        <PlayInfoTitle>{params.title}</PlayInfoTitle>
        <PlayInfoDesc>
          Seriously think the question in your mind, choose {selectTime} cards
          out of 62
        </PlayInfoDesc>
      </PlayInfo>
      {/* TODO: 카드선택 설정 로드 */}
      <PlayCanvas>
        {randomItems.map((card) => (
          <PlayCard
            key={card.id}
            card={card}
            count={count}
            onCountChange={handleCountChange}
          />
        ))}
      </PlayCanvas>
      <Control></Control>
      {isLoading && (
        <LoadingView>
          <ImageBackground
            resizeMode="cover"
            style={[
              StyleSheet.absoluteFill,
              { width: SCREEN_WIDTH, height: SCREEN_HEIGHT, opacity: 0.8 },
            ]}
            source={require("assets/images/playLoading.png")}
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
