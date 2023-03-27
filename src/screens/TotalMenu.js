import { StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Container from "../components/Container";
import Background from "../components/Background";
import HeaderBack from "../components/HeaderBack";
import { TRANSLUCENT_COLOR } from "../colors";

const ContentView = styled.View`
  flex: 1;
`;

const Info = styled.View`
  flex: 0.2;
  background-color: ${TRANSLUCENT_COLOR};
  margin: 0px 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;
const InfoTitle = styled.Text`
  font-size: 24px;
  color: white;
  font-family: "Georgia";
  text-shadow: 1px 1px 5px black;
`;
const InfoDesc = styled.Text`
  font-size: 16px;
  color: white;
  margin-top: 20px;
  text-shadow: 1px 1px 5px black;
`;

const List = styled.FlatList`
  padding: 20px 20px;
  width: 100%;
  /* background-color: gray; */
`;

const radius = 16;
const borderWidth = 3;
const CardView = styled.View`
  width: 100px;
  height: 160px;
  border-radius: ${radius + borderWidth}px;
  border-width: ${borderWidth}px;
  border-color: white;
  justify-content: center;
  align-items: center;
`;

const Separator = styled.View`
  height: 20px;
`;

const Bg = styled.ImageBackground``;

const Title = styled.Text`
  color: white;
  font-size: 16px;
  font-family: "Georgia";
  font-weight: 400;
  text-shadow: 1px 1px 3px black;
`;

const TotalMenu = ({
  navigation: { navigate },
  route: {
    params: { MENU },
  },
}) => {
  // console.log(menu);
  return (
    MENU && (
      <Container>
        <Background />
        <HeaderBack />
        <Info>
          <InfoTitle>Total Menu</InfoTitle>
          <InfoDesc>Find a menu to choose from</InfoDesc>
        </Info>
        <ContentView>
          <List
            data={MENU}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "space-around",
            }}
            ItemSeparatorComponent={() => <Separator />}
            keyExtractor={(item) => item.no + ""}
            renderItem={({ item }) => (
              // card
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => navigate("Play", item)}
              >
                <CardView>
                  <Bg
                    style={StyleSheet.absoluteFill}
                    imageStyle={{
                      borderRadius: radius,
                    }}
                    resizeMode="stretch"
                    source={item.backdropPath}
                  />
                  <Title>{item.title}</Title>
                </CardView>
              </TouchableHighlight>
            )}
            contentContainerStyle={{ paddingBottom: 80 }}
          />
        </ContentView>
      </Container>
    )
  );
};

export default React.memo(TotalMenu);
