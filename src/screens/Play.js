import { FlatList, ImageBackground, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Background from "../components/Background";
import Container from "../components/Container";
import HeaderBack from "../components/HeaderBack";
import { CARDS } from "../data/cards";
import PlayCard from "../components/Play/PlayCard";
import { MIDNIGHT_COLOR, TRANSLUCENT_COLOR } from "../colors";
import PlayLoading from "../components/Play/PlayLoading";
import { useDB } from "../context";
import { LayoutAnimation } from "react-native";
import { TestIds, useInterstitialAd } from "react-native-google-mobile-ads";
import { Platform } from "react-native";
import { InterstitialAdAppId } from "../utils";

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : Platform.OS === "android"
  ? InterstitialAdAppId.android
  : InterstitialAdAppId.ios;

const borderRadius = 10;
const PlayInfo = styled.View`
  flex: 1.2;
  background-color: ${TRANSLUCENT_COLOR};
  /* margin: 0px 20px;
  border-radius: ${borderRadius}px; */
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
`;
const InfoRowView = styled.View`
  flex-direction: row;
`;
const InfoColumn = styled.View`
  margin-left: 12px;
  width: 80%;
`;

const PlayInfoImg = styled.Image`
  width: 74px;
  height: 74px;
  border-radius: ${borderRadius}px;
`;
const PlayInfoTitle = styled.Text`
  font-size: 20px;
  color: white;
  font-family: "Georgia";
  text-shadow: 1px 1px 5px black;
`;
const PlayInfoDesc = styled.Text`
  font-size: 12px;
  color: white;
  margin-top: 18px;
  text-shadow: 1px 1px 5px black;
`;

const PlayCanvas = styled.View`
  padding: 34px;
  flex: 4;
  overflow: hidden;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  border-radius: ${borderRadius}px;
`;

const Separator = styled.View`
  height: 2px;
`;

const Control = styled.View`
  padding: 0px 22px;
  flex: 0.8;
  flex-direction: row;
  justify-content: space-evenly;
`;
const SuffleBtn = styled.TouchableOpacity`
  background-color: ${MIDNIGHT_COLOR};
  flex: 0.5;
  height: 50px;
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
  font-size: 14px;
  font-weight: 500;
`;

// 배열에서 랜덤으로 numItems개를 선택하는 함수
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
  const realm = useDB();
  const [isLoading, setIsLoading] = useState(false);
  const [randomItems, setRandomItems] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [cardInfoData, setCardInfoData] = useState(1);

  // google ads hooks
  const { isClosed, load, show } = useInterstitialAd(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
  });

  useEffect(() => {
    suffleCard();

    // load cardSelection(1 or 3) data
    if (realm) {
      const data = realm.objects("Settings");
      // console.log(realm, data[0].cardSelection);
      if (data[0]) {
        data.addListener((data) => {
          setCardInfoData(data[0].cardSelection);
        });
        return () => {
          data.removeAllListeners();
        };
      }
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    if (selectedCard.length >= cardInfoData) {
      LayoutAnimation.spring();

      // 마지막 카드 선택시 delay 없이 loadingView show 방지
      setTimeout(() => {
        setIsLoading(true);
      }, 1000);

      // loadingView hide & 스크린 이동
      setTimeout(() => {
        setIsLoading(false);
        try {
          show();
        } catch (e) {
          console.log(e);
        }
      }, 4000);
    }
  }, [selectedCard]);

  useEffect(() => {
    if (isClosed) {
      navigate("Result", { cards: [...selectedCard] });
    }
  }, [isClosed]);

  const handleSelectCard = (newCard) => {
    // Insert
    const updatedItems = [...selectedCard, newCard];
    setSelectedCard(updatedItems);
  };

  const suffleCard = () => {
    // animation
    LayoutAnimation.configureNext({
      duration: 500,
      create: { type: "easeInEaseOut", property: "scaleY" },
      update: { type: "spring", springDamping: 0.4 },
      delete: { type: "easeInEaseOut", property: "scaleY" },
    });

    setRandomItems(getRandomItems(22));
    setSelectedCard([]);
  };

  return (
    <Container>
      <Background />
      <HeaderBack />
      <PlayInfo>
        <InfoRowView>
          <PlayInfoImg resizeMode="stretch" source={params.backdropPath} />
          <InfoColumn>
            <PlayInfoTitle>{params.title}</PlayInfoTitle>
            <PlayInfoDesc>
              Seriously think the question in your mind, choose {cardInfoData}{" "}
              cards out of 62
            </PlayInfoDesc>
          </InfoColumn>
        </InfoRowView>
      </PlayInfo>
      <PlayCanvas>
        <ImageBackground
          style={StyleSheet.absoluteFill}
          source={require("assets/images/tableBg.jpg")}
        />
        <ImageBackground
          resizeMode="stretch"
          style={StyleSheet.absoluteFill}
          source={require("assets/images/tableBorder.png")}
        />
        <FlatList
          data={randomItems}
          numColumns={5}
          contentContainerStyle={{
            width: "100%",
            // height: "100%",
            // paddingVertical: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
          columnWrapperStyle={{
            justifyContent: "space-around",
          }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Separator />}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => (
            <PlayCard card={item} handleSelectCard={handleSelectCard} />
          )}
        />
      </PlayCanvas>
      <Control>
        <SuffleBtn onPress={suffleCard}>
          <SuffleText>Suffle</SuffleText>
        </SuffleBtn>
      </Control>
      {isLoading && <PlayLoading />}
      {/* <PlayLoading /> */}
    </Container>
  );
};
export default Play;
