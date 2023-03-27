import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import * as Application from "expo-application";
import SettingsRadioSelection from "./SettingsRadioSelection";
import { Alert } from "react-native";
import { TRANSLUCENT_COLOR } from "../../colors";

const radius = 16;
const Container = styled.TouchableHighlight`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${TRANSLUCENT_COLOR};
  padding: 20px;
  margin: 0px 20px;

  border-top-left-radius: ${({ isFirstElement }) =>
    isFirstElement ? `${radius}px` : "0px"};
  border-top-right-radius: ${({ isFirstElement }) =>
    isFirstElement ? `${radius}px` : "0px"};
  border-bottom-left-radius: ${({ isLastElement }) =>
    isLastElement ? `${radius}px` : "0px"};
  border-bottom-right-radius: ${({ isLastElement }) =>
    isLastElement ? `${radius}px` : "0px"};
`;

const Title = styled.Text`
  font-size: 18px;
  color: #d6d2d2;
`;

const actionForMenuItem = (item) => {
  if (item === "Leave a review") {
    // console.log(item);
    Alert.alert("test");
    // TODO: link google play
  }
};

const SettingsListItem = ({ item, isFirstElement, isLastElement }) => {
  return (
    <Container
      onPress={() => actionForMenuItem(item)}
      isFirstElement={isFirstElement}
      isLastElement={isLastElement}
      underlayColor="rgba(0, 0, 0, 0.4)"
    >
      {
        {
          "Shuffle cards": <SettingsRadioSelection item={item} />,
          "Card selection": <SettingsRadioSelection item={item} />,
          "Leave a review": (
            <>
              <Title>{item}</Title>
              <Ionicons name="chevron-forward" size={24} color="#d6d2d2" />
            </>
          ),
          version: (
            <>
              <Title>{item}</Title>
              <Title>{Application.nativeApplicationVersion}</Title>
            </>
          ),
        }[item]
      }
    </Container>
  );
};

export default SettingsListItem;
