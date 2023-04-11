import { Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { SimpleAccordion } from "react-native-simple-accordion";
import Background from "../components/Background";
import Container from "../components/Container";
import HeaderClose from "../components/HeaderClose";
import { getLocales } from "expo-localization";

const deviceLanguage = getLocales()[0].languageCode || "en";

const Wrapper = styled.View`
  /* background-color: gray; */
  flex: 1;
`;
const ImageArea = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 20px;
`;
const ImageView = styled.View`
  flex: 1;
`;
const ResultImage = styled.Image`
  width: 100%;
  height: 100%;
  /* background-color: gray; */
`;
const ContentArea = styled.FlatList`
  flex: 3;
  /* background-color: gray; */
  padding: 20px;
`;

const ItemView = styled.View`
  padding: 20px 10px;
  margin: 10px 20px;
  background-color: white;
  /* border-radius: 10px; */
`;

const Result = ({ route: { params } }) => {
  const cards = params.cards;
  // console.log("cards:", cards);
  return (
    <Container>
      <Background />
      <HeaderClose cards={cards} />
      <Wrapper>
        <ImageArea>
          {cards.map((card) => (
            <ImageView key={card.id}>
              <ResultImage resizeMode="stretch" source={card.image} />
            </ImageView>
          ))}
        </ImageArea>
        <ContentArea
          data={cards}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ItemView>
              <Text style={{ marginVertical: 10 }}>⭐️ {item.name}</Text>
              <View style={{ marginVertical: 10 }}>
                {/* TODO error: Cannot read property 'map' of undefined */}
                {item.upright.keyword.map((word, index) => (
                  <View key={index} style={{}}>
                    <Text>• {word}</Text>
                  </View>
                ))}
              </View>
              {/* 카드설명. 아코디언 */}
              <SimpleAccordion
                viewInside={
                  <View>
                    <Text style={{ color: "white", marginVertical: 10 }}>
                      {item.description}
                    </Text>
                  </View>
                }
                title={
                  deviceLanguage === "ko" ? "카드 설명" : "Card Description"
                }
                titleStyle={{
                  fontSize: 14,
                  color: "white",
                  textAlign: "center",
                }}
                bannerStyle={{ backgroundColor: "#3c40c6" }}
                arrowColor="white"
                viewContainerStyle={{ backgroundColor: "#575fcf" }}
              />
              {/* 해석 */}
              <Text style={{ marginVertical: 10 }}>{item.upright.meaning}</Text>
            </ItemView>
          )}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
      </Wrapper>
    </Container>
  );
};

export default Result;
