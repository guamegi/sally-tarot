import React from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Share, View } from "react-native";

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
    if (cards) {
      await Share.share({
        // url: homepage,
        // title: "title" in params ? params.title : params.name,
        message: result,
      });
    }
  };

  return (
    <Container>
      <LeftHeaderView>
        <ShareBtn onPress={onShare}>
          <MaterialIcons name="share" size={26} color="#d2dae2" />
        </ShareBtn>
        <SaveBtn onPress={() => console.log("save")}>
          <MaterialIcons name="save-alt" size={28} color="#d2dae2" />
        </SaveBtn>
      </LeftHeaderView>
      <CloseBtn onPress={() => navigation.popToTop()}>
        <MaterialIcons name="close" size={28} color="#d2dae2" />
      </CloseBtn>
    </Container>
  );
};

export default HeaderClose;
