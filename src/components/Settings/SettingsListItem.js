import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import * as Application from "expo-application";
import SettingsRadioSelection from "./SettingsRadioSelection";
import { Alert } from "react-native";
import { TRANSLUCENT_COLOR } from "../../colors";

const radius = 10;
const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${TRANSLUCENT_COLOR};
  /* background-color: rgba(0, 0, 0, 0.6); */
  padding: 20px;
  margin: 0px 20px;
  border-radius: ${radius}px;
`;

const Title = styled.Text`
  font-size: 14px;
  color: #d6d2d2;
`;

const Wrapper = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const actionForMenuItem = () => {
  Alert.alert("test");
  // TODO: link google play
};

const SettingsListItem = ({ itemData }) => {
  return (
    <Container>
      {
        {
          "Card selection": <SettingsRadioSelection itemData={itemData} />,
          "Leave a review": (
            <Wrapper
              onPress={() => actionForMenuItem()}
              // underlayColor="rgba(0, 0, 0, 0.4)"
            >
              <Title>{itemData}</Title>
              <Ionicons name="chevron-forward" size={14} color="#d6d2d2" />
            </Wrapper>
          ),
          version: (
            <>
              <Title>{itemData}</Title>
              <Title>{Application.nativeApplicationVersion}</Title>
            </>
          ),
        }[itemData]
      }
    </Container>
  );
};

export default SettingsListItem;
