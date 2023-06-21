import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Container from "../components/Container";
import Background from "../components/Background";
import HeaderBack from "../components/HeaderBack";
import { TRANSLUCENT_COLOR } from "../colors";
import SaveItem from "../components/Save/SaveItem";
import { LayoutAnimation } from "react-native";
import { useDB } from "../context";
import { useTranslation } from "react-i18next";

const ContentView = styled.FlatList`
  flex: 1;
  padding: 20px;
`;

const Info = styled.View`
  flex: 0.2;
  background-color: ${TRANSLUCENT_COLOR};
  /* margin: 0px 20px;
  border-radius: 10px; */
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
  const realm = useDB();
  const [data, setData] = useState([]);
  const { t } = useTranslation("save");

  useEffect(() => {
    if (realm) {
      const saveData = realm.objects("Save");
      // console.log("saveData:", saveData);
      if (saveData[0]) {
        saveData.addListener((d) => {
          LayoutAnimation.spring();
          setData([...d.sorted("_id", true)]);
        });
        return () => {
          saveData.removeAllListeners();
        };
      }
    }
  }, []);

  return (
    <Container>
      <Background />
      <HeaderBack />
      <Info>
        <InfoTitle>{t("info.title")}</InfoTitle>
        <InfoDesc>{t("info.desc")}</InfoDesc>
      </Info>
      {/* {data && data.length > 0 && ( */}
      <ContentView
        data={data}
        // ItemSeparatorComponent={() => <Separator />}
        keyExtractor={(item) => item._id + ""}
        renderItem={({ item }) => <SaveItem item={item} />}
        // renderItem={({ item }) => console.log("item", item)}
      />
      {/* )} */}
    </Container>
  );
};

export default React.memo(Save);
