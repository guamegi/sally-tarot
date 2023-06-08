import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { useTranslation } from "react-i18next";
import RadioGroup from "react-native-radio-buttons-group";
import Container from "../components/Container";
import Background from "../components/Background";
import HeaderBack from "../components/HeaderBack";
import { TRANSLUCENT_COLOR } from "../colors";
import { LANGUAGE } from "../data/settings";
import { useDB } from "../context";

const Info = styled.View`
  flex: 0.2;
  background-color: ${TRANSLUCENT_COLOR};
  justify-content: center;
  align-items: center;
`;
const InfoTitle = styled.Text`
  font-size: 20px;
  color: white;
  font-family: "Georgia";
`;
const RadioView = styled.View`
  margin: 20px 0px;
`;

const SettingsLang = () => {
  const realm = useDB();
  const [radioButtons, setRadioButtons] = useState(LANGUAGE);
  const { t } = useTranslation("settingsLang");

  useEffect(() => {
    // load data, set radio btn
    const data = realm.objects("Settings");
    if (data[0]) {
      const newRadioButtons = [...LANGUAGE];

      if (data[0].langSelection === "en") {
        newRadioButtons[0].selected = true;
        newRadioButtons[1].selected = false;
      } else {
        newRadioButtons[0].selected = false;
        newRadioButtons[1].selected = true;
      }
      setRadioButtons(newRadioButtons);
    }
  }, []);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons([...radioButtonsArray]);
    saveData(radioButtonsArray);
  }

  const saveData = (radioButtonsArray) => {
    const selectedBtn = radioButtonsArray.find((radio) => radio.selected);

    realm.write(() => {
      realm.create(
        "Settings",
        {
          _id: "userInfo",
          langSelection: selectedBtn.value,
        },
        "modified"
      );
    });

    // TODO: 언어 변경, 로딩 후에도 저장된 언어가 우선순위 세팅
  };

  return (
    <Container>
      <Background />
      <HeaderBack />
      <Info>
        <InfoTitle>{t("info.title")}</InfoTitle>
      </Info>
      <RadioView>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          // selectedId={selectedId}
          containerStyle={{
            justifyContent: "center",
            alignItems: "stretch",
            backgroundColor: TRANSLUCENT_COLOR,
            padding: 20,
          }}
        />
      </RadioView>
    </Container>
  );
};

export default SettingsLang;
