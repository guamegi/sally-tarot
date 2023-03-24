import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { BLACK_COLOR } from "../../colors";

const Container = styled.TouchableHighlight`
  flex: 1;
  margin: 50px 90px;
  justify-content: flex-end;
  /* box-shadow: 0px 0px 24px white; */
  box-shadow: 0px 0px 24px black;
  /* background-color: gray; */
`;

const Bg = styled.ImageBackground``;

const MenuView = styled.View`
  /* height: 200px; */
  /* background-color: gray; */
  /* border-radius: 20px; */
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

const Title = styled.Text`
  color: white;
  font-size: 38px;
  font-family: "Georgia";
  font-weight: 400;
  padding: 0px 20px;
  /* text-shadow: 1px 1px 5px black; */
`;
const SubTitle = styled.Text`
  color: white;
  opacity: 0.5;
  font-size: 20px;
  /* font-family: "Georgia"; */
  margin-top: 20px;
  padding: 0px 20px;
  /* text-shadow: 1px 1px 3px black; */
`;

const GradientView = styled.View`
  border-radius: 20px;
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
            borderRadius: 20,
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
