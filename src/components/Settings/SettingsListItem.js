import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import * as Application from "expo-application";
import SettingsRadioSelection from "./SettingsRadioSelection";
import { Alert } from "react-native";
import { TRANSLUCENT_COLOR } from "../../colors";
import { useTranslation } from "react-i18next";

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
  Alert.alert("Leave a review");
  // TODO: link google play
};

const SettingsListItem = ({ itemData }) => {
  const { t } = useTranslation("settings");
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
              <Title>{t("service.desc")}</Title>
              <Ionicons name="chevron-forward" size={14} color="#d6d2d2" />
            </Wrapper>
          ),
          version: (
            <>
              <Title>{t("version.desc")}</Title>
              <Title>{Application.nativeApplicationVersion}</Title>
            </>
          ),
        }[itemData]
      }
    </Container>
  );
};

export default SettingsListItem;
