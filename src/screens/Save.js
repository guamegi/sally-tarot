import React from "react";
import styled from "styled-components/native";
import Container from "../components/Container";
import Background from "../components/Background";
import HeaderBack from "../components/HeaderBack";
import { TRANSLUCENT_COLOR } from "../colors";
import SaveItem from "../components/Save/SaveItem";

const ContentView = styled.FlatList`
  flex: 1;
  padding: 20px;
`;

const Info = styled.View`
  flex: 0.2;
  background-color: ${TRANSLUCENT_COLOR};
  margin: 0px 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

const InfoTitle = styled.Text`
  font-size: 20px;
  color: white;
  font-family: "Georgia";
  text-shadow: 1px 1px 5px black;
`;

const InfoDesc = styled.Text`
  font-size: 12px;
  color: white;
  margin-top: 20px;
  text-shadow: 1px 1px 5px black;
`;

const Save = () => {
  // TODO: 저장된 데이터 set 호출, Realm
  const saveData = [
    {
      id: 1,
      title: "test",
      date: "2023.03.20 15:24",
      image: require("assets/images/menu/love.jpeg"),
    },
    {
      id: 2,
      title: "test",
      date: "2023.03.20 15:24",
      image: require("assets/images/menu/love.jpeg"),
    },
  ];

  return (
    <Container>
      <Background />
      <HeaderBack />
      <Info>
        <InfoTitle>Save</InfoTitle>
        <InfoDesc>View saved tarot results</InfoDesc>
      </Info>
      <ContentView
        data={saveData}
        // ItemSeparatorComponent={() => <Separator />}
        keyExtractor={(item) => item.id + ""}
        renderItem={({ item }) => <SaveItem item={item} />}
      />
    </Container>
  );
};

export default React.memo(Save);
