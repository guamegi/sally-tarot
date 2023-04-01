import React from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Alert, Share, View } from "react-native";
import { useDB } from "../context";

const Container = styled.View`
  padding: 10px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* align-items: flex-end; */
`;

const LeftHeaderView = styled.View`
  flex-direction: row;
`;

const ShareBtn = styled.TouchableOpacity`
  padding: 4px;
  /* background-color: gray; */
`;
const SaveBtn = styled(ShareBtn)`
  margin-left: 14px;
`;
const CloseBtn = styled(ShareBtn)``;

const HeaderClose = ({ cards }) => {
  const navigation = useNavigation();
  const realm = useDB();
  // console.log("cards:", cards);

  const result = cards
    .map(
      (card) => `
• name: ${card.name}

• keyword: ${card.upright.keyword}

• description: ${card.description}
  `
    )
    .join("--------------");

  const onShare = async () => {
    if (cards && Array.isArray(cards)) {
      await Share.share({
        // url: homepage,
        // title: "title" in params ? params.title : params.name,
        message: result,
      });
    }
  };

  const onSave = () => {
    if (cards && Array.isArray(cards)) {
      try {
        realm.write(() => {
          realm.create("Save", {
            _id: Date.now(),
            cards: [...cards],
          });
        });
      } catch (e) {
        console.error(e);
      }

      // alert saved message
      Alert.alert("Card Info", "Saved Successfully!", [
        {
          text: "OK",
          onPress: () => navigation.popToTop(),
        },
      ]);
    }
  };

  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2];
  const onClose = () => {
    // 이전 screen = "Play"면 home으로. 아니면 pop(save에서 이동하는 경우)
    prevRoute.name === "Play" ? navigation.popToTop() : navigation.goBack();
  };

  return (
    <Container>
      <LeftHeaderView>
        <ShareBtn onPress={onShare}>
          <MaterialIcons name="share" size={26} color="#d2dae2" />
        </ShareBtn>
        {prevRoute.name === "Play" && (
          <SaveBtn onPress={onSave}>
            <MaterialIcons name="save-alt" size={28} color="#d2dae2" />
          </SaveBtn>
        )}
      </LeftHeaderView>
      <CloseBtn onPress={onClose}>
        <MaterialIcons name="close" size={28} color="#d2dae2" />
      </CloseBtn>
    </Container>
  );
};

export default HeaderClose;
