import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Container from "../components/Container";
import Background from "../components/Background";
import HeaderBack from "../components/HeaderBack";
import { BLACK_COLOR } from "../colors";
import { LinearGradient } from "expo-linear-gradient";

const ContentView = styled.View`
  flex: 1;
`;

const List = styled.FlatList`
  padding: 20px 20px;
  width: 100%;
  /* background-color: gray; */
`;

const CardView = styled.View`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  border-width: 4px;
  border-color: gray;
  justify-content: center;
  align-items: center;
`;

const Separator = styled.View`
  height: 20px;
`;

const Bg = styled.ImageBackground``;

const Title = styled.Text`
  color: white;
  font-size: 22px;
  font-family: "Georgia";
  font-weight: 400;
  text-shadow: 1px 1px 5px black;
`;

const GradientView = styled.View`
  border-radius: 70px;
  overflow: hidden;
`;

const TotalMenu = ({
  navigation: { navigate },
  route: {
    params: { menu },
  },
}) => {
  // console.log(menu);
  return (
    menu && (
      <Container>
        <Background />
        <HeaderBack />
        <ContentView>
          <List
            data={menu}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-around",
            }}
            ItemSeparatorComponent={() => <Separator />}
            keyExtractor={(item) => item.no + ""}
            renderItem={({ item }) => (
              // card
              <TouchableOpacity onPress={() => navigate("Play", item)}>
                <CardView>
                  <Bg
                    style={StyleSheet.absoluteFill}
                    imageStyle={{
                      borderRadius: 70,
                    }}
                    resizeMode="stretch"
                    source={item.backdropPath}
                  />
                  <GradientView style={StyleSheet.absoluteFill}>
                    <LinearGradient
                      style={StyleSheet.absoluteFill}
                      colors={["transparent", BLACK_COLOR]}
                    />
                  </GradientView>
                  <Title>{item.title}</Title>
                </CardView>
              </TouchableOpacity>
            )}
          />
        </ContentView>
      </Container>
    )
  );
};

export default TotalMenu;
