import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import RadioGroup from "react-native-radio-buttons-group";
import { CARD_SELECTION, SHUFFLE_CARDS } from "../../data/settings";

const Container = styled.View`
  width: 100%;
`;
const Title = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #d6d2d2;
`;

const RadioView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0px;
`;

const SettingsRadioSelection = ({ item }) => {
  // console.log(item);
  // 카드섞기 / 카드선택 데이터 구분
  // TODO: 카드 데이터들 localstorage 저장/로드
  // TODO: 카드 데이터들 이미지 교체
  const [radioButtons, setRadioButtons] = useState(
    item === "Shuffle cards" ? SHUFFLE_CARDS : CARD_SELECTION
  );

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons([...radioButtonsArray]);
  }
  const selectedItem = radioButtons.find((item) => item.selected);
  return (
    <Container>
      <Title>{item}</Title>
      <RadioView>
        <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} />
        <Image
          source={selectedItem.value}
          style={{
            // flex: 0.4,
            width: 100,
            height: 100,
            borderRadius: 10,
          }}
        />
      </RadioView>
    </Container>
  );
};

export default SettingsRadioSelection;
