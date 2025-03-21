import { FlatList, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Container from "../components/Container";
import Background from "../components/Background";
import HeaderBack from "../components/HeaderBack";
import { SETTINGS_MENU } from "../data/settings";
import SettingsListItem from "../components/Settings/SettingsListItem";
import { TRANSLUCENT_COLOR } from "../colors";
import { useTranslation } from "react-i18next";

const Info = styled.View`
  flex: 0.2;
  background-color: ${TRANSLUCENT_COLOR};
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
  margin-left: 6px;
`;

const ItemSeparator = styled.View`
  height: 1px;
  align-self: center;
  background-color: gray;
`;

const Settings = () => {
  const { t } = useTranslation("settings");

  return (
    <Container>
      <Background />
      <HeaderBack />
      <Info>
        <InfoTitle>{t("info.title")}</InfoTitle>
        <InfoDesc>{t("info.desc")}</InfoDesc>
      </Info>
      <View style={{ flex: 1 }}>
        <FlatList
          data={SETTINGS_MENU}
          keyExtractor={(_, index) => index}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          renderItem={({ item }) => {
            if (item.data.length > 1) {
              return (
                <>
                  <SectionHeader>
                    {item.icon}
                    <SectionTitle>{item.title}</SectionTitle>
                  </SectionHeader>
                  {item.data.map((dataItem, index) => (
                    <React.Fragment key={index}>
                      <SettingsListItem itemData={dataItem} />
                      {index < item.data.length - 1 && <ItemSeparator />}
                    </React.Fragment>
                  ))}
                </>
              );
            } else {
              return (
                <>
                  <SectionHeader>
                    {item.icon}
                    <SectionTitle>{item.title}</SectionTitle>
                  </SectionHeader>
                  <SettingsListItem itemData={item.data[0]} />
                </>
              );
            }
          }}
          ItemSeparatorComponent={() => <ItemSeparator />}
        />
      </View>
    </Container>
  );
};

export default React.memo(Settings);
