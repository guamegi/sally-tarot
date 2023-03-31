import { FlatList, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Container from "../components/Container";
import Background from "../components/Background";
import HeaderBack from "../components/HeaderBack";
import { SETTINGS_MENU } from "../data/settings";
import SettingsListItem from "../components/Settings/SettingsListItem";

const Info = styled.View`
  flex: 0.2;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0px 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;
const InfoTitle = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
  color: white;
  font-family: "Georgia";
  text-shadow: 1px 1px 5px black;
`;
const InfoDesc = styled.Text`
  font-size: 12px;
  color: white;
  margin-top: 4px;
  text-shadow: 1px 1px 5px black;
`;

const SectionHeader = styled.View`
  /* background-color: gray; */
  flex-direction: row;
  padding: 10px 18px;
  margin-top: 30px;
`;
const SectionTitle = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: 500;
  /* line-height: 26px; */
  margin-left: 6px;
`;

const ItemSeparator = styled.View`
  height: 1px;
  align-self: center;
  background-color: gray;
`;

const Settings = () => {
  return (
    <Container>
      <Background />
      <HeaderBack />
      <Info>
        <InfoTitle>Settings</InfoTitle>
        <InfoDesc>Sally's Tarot</InfoDesc>
      </Info>
      <View style={{ flex: 1 }}>
        {/* TODO: 앱 이미지 추가하기 */}
        <FlatList
          data={SETTINGS_MENU}
          keyExtractor={(_, index) => index}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          renderItem={({ item }) => {
            return (
              <>
                <SectionHeader>
                  {item.icon}
                  <SectionTitle>{item.title}</SectionTitle>
                </SectionHeader>
                <SettingsListItem itemData={item.data} />
              </>
            );
          }}
          ItemSeparatorComponent={() => <ItemSeparator />}
        />
      </View>
    </Container>
  );
};

export default React.memo(Settings);
