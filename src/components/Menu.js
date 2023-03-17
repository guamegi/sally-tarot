import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { BLACK_COLOR } from "../colors";

const Container = styled.TouchableHighlight`
  flex: 1;
  margin: 50px 50px;
  justify-content: flex-end;
  /* box-shadow: 0px 0px 24px white; */
  box-shadow: 0px 0px 24px black;
`;

const Bg = styled.ImageBackground``;

const MenuView = styled.View`
  height: 200px;
  /* background-color: gray; */
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  font-size: 38px;
  font-weight: 400;
  /* text-shadow: 1px 1px 5px black; */
`;
const SubTitle = styled.Text`
  color: white;
  font-size: 24px;
  margin-top: 20px;
  /* text-shadow: 1px 1px 3px black; */
`;

const GradientView = styled.View`
  border-radius: 50px;
  overflow: hidden;
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
          // blurRadius={3}
          style={StyleSheet.absoluteFill}
          imageStyle={{
            borderRadius: 50,
          }}
          resizeMode="stretch"
          source={data.backdropPath}
        />
        <GradientView style={StyleSheet.absoluteFill}>
          <LinearGradient
            style={StyleSheet.absoluteFill}
            colors={["transparent", BLACK_COLOR]}
          />
        </GradientView>

        <MenuView>
          <Title>{data.title}</Title>
          <SubTitle>{data.subTitle}</SubTitle>
        </MenuView>
      </>
    </Container>
  );
};

export default Menu;
