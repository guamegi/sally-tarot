import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { BLACK_COLOR, TRANSLUCENT_COLOR } from "../../colors";

const radius = 40;
const borderWidth = 4;
const Container = styled.TouchableHighlight`
  flex: 1;
  margin: 50px 80px;
  justify-content: flex-end;
  /* background-color: ${TRANSLUCENT_COLOR}; */
  /* background-color: rgba(39, 10, 43, 0.9); */
  background-color: rgba(224, 220, 224, 0.3);
  border-radius: ${radius}px;
`;

const Bg = styled.ImageBackground`
  margin: 0px 40px;
  margin-bottom: 40px;
`;

const MenuView = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  padding-bottom: 20px;
`;

const Title = styled.Text`
  color: white;
  font-size: 22px;
  font-family: "Georgia";
  font-weight: 400;
  padding: 0px 20px;
  text-shadow: 1px 1px 5px black;
`;
const SubTitle = styled.Text`
  color: white;
  opacity: 0.8;
  font-size: 14px;
  /* font-family: "Georgia"; */
  margin-top: 20px;
  padding: 0px 20px;
  text-shadow: 1px 1px 5px black;
`;

const Menu = ({ data }) => {
  const navigation = useNavigation();
  // console.log(data);
  return (
    <Container
      // underlayColor="transparent"
      underlayColor="rgba(224, 220, 224, 0.3)"
      onPress={() => navigation.navigate("Play", data)}
    >
      <>
        <Bg
          style={StyleSheet.absoluteFill}
          imageStyle={{
            borderRadius: radius,
          }}
          // resizeMode="stretch"
          resizeMode="contain"
          source={data.backdropPath}
        />

        <MenuView>
          <Title>{data.title}</Title>
          <SubTitle>{data.subTitle}</SubTitle>
        </MenuView>
      </>
    </Container>
  );
};

export default Menu;
