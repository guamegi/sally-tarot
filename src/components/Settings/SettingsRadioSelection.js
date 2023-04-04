import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import RadioGroup from "react-native-radio-buttons-group";
import { CARD_SELECTION } from "../../data/settings";
import { useDB } from "../../context";
import { useTranslation } from "react-i18next";

const Container = styled.View`
  width: 100%;
`;
const Title = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #d6d2d2;
`;

const RadioView = styled.View`
  margin: 20px 0px;
`;

const SettingsRadioSelection = ({ itemData }) => {
  const realm = useDB();
  const [radioButtons, setRadioButtons] = useState(CARD_SELECTION);
  const { t } = useTranslation("settings");

  useEffect(() => {
    // load data, set radio btn
    const data = realm.objects("Settings");
    if (data[0]) {
      const newRadioButtons = [...CARD_SELECTION];

      if (data[0].cardSelection === 1) {
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
          cardSelection: selectedBtn.value,
        },
        "modified"
      );
    });
  };

  return (
    <Container>
      <Title>{t("customize.desc")}</Title>
      <RadioView>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          layout="row"
          containerStyle={{
            justifyContent: "space-evenly",
            // backgroundColor: "gray",
          }}
        />
      </RadioView>
    </Container>
  );
};

export default SettingsRadioSelection;
