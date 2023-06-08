import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import * as Application from "expo-application";
import SettingsRadioSelection from "./SettingsRadioSelection";
import { TRANSLUCENT_COLOR } from "../../colors";
import { useTranslation } from "react-i18next";
import * as Linking from "expo-linking";
import { useNavigation } from "@react-navigation/native";

const radius = 10;
const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${TRANSLUCENT_COLOR};
  padding: 20px;
  margin: 0px 20px;
  border-radius: ${radius}px;
`;
const ConTopRadius = styled(Container)`
  border-radius: 0px;
  border-top-right-radius: ${radius}px;
  border-top-left-radius: ${radius}px;
`;
const ConBtmRadius = styled(Container)`
  border-radius: 0px;
  border-bottom-right-radius: ${radius}px;
  border-bottom-left-radius: ${radius}px;
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

const link = () => {
  // link google play
  Linking.openURL(
    "https://play.google.com/store/apps/details?id=com.guamegi.sallytarot"
  );
};

const mailTo = (mailTitle) => {
  const toEmail = "dev.gumna@gmail.com";
  const subject = mailTitle;
  const body = "";

  Linking.openURL(`mailto:${toEmail}?subject=${subject}&body=${body}`);
};

const SettingsListItem = ({ itemData }) => {
  const { t } = useTranslation("settings");
  const navigation = useNavigation();

  // console.log(itemData);
  return (
    <>
      {
        {
          "Card selection": (
            <ConTopRadius>
              <SettingsRadioSelection itemData={itemData} />
            </ConTopRadius>
          ),
          Language: (
            <>
              <ConBtmRadius>
                <Wrapper onPress={() => navigation.navigate("SettingsLang")}>
                  <Title>{t("service.lang")}</Title>
                  <Ionicons name="chevron-forward" size={14} color="#d6d2d2" />
                </Wrapper>
              </ConBtmRadius>
            </>
          ),
          "Send Comments": (
            <ConTopRadius>
              <Wrapper onPress={() => mailTo(t("service.mailTitle"))}>
                <Title>{t("service.desc1")}</Title>
                <Ionicons name="chevron-forward" size={14} color="#d6d2d2" />
              </Wrapper>
            </ConTopRadius>
          ),
          "Write a review": (
            <ConBtmRadius>
              <Wrapper onPress={() => link()}>
                <Title>{t("service.desc2")}</Title>
                <Ionicons name="chevron-forward" size={14} color="#d6d2d2" />
              </Wrapper>
            </ConBtmRadius>
          ),
          version: (
            <Container>
              <Title>{t("version.desc")}</Title>
              <Title>{Application.nativeApplicationVersion}</Title>
            </Container>
          ),
        }[itemData]
      }
    </>
  );
};

export default SettingsListItem;
