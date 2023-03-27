import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { BLACK_COLOR } from "../../colors";

const Container = styled.TouchableHighlight`
  flex: 1;
  margin: 50px 80px;
  justify-content: flex-end;
  /* box-shadow: 0px 0px 24px black; */
  /* background-color: gray; */
`;

const radius = 16;
const borderWidth = 4;
const Bg = styled.ImageBackground`
  border-radius: ${radius + borderWidth}px;
  border-width: ${borderWidth}px;
  border-color: white;
`;

const MenuView = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

const Title = styled.Text`
  color: white;
  font-size: 28px;
  font-family: "Georgia";
  font-weight: 400;
  padding: 0px 20px;
  text-shadow: 1px 1px 5px black;
`;
const SubTitle = styled.Text`
  color: white;
  opacity: 0.8;
  font-size: 16px;
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
      underlayColor="transparent"
      onPress={() => navigation.navigate("Play", data)}
    >
      <>
        <Bg
          // blurRadius={1}
          style={StyleSheet.absoluteFill}
          imageStyle={{
            borderRadius: radius,
          }}
          resizeMode="stretch"
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
