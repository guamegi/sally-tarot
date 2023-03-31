import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Container from "../components/Container";
import Background from "../components/Background";
import HeaderBack from "../components/HeaderBack";
import { TRANSLUCENT_COLOR } from "../colors";
import SaveItem from "../components/Save/SaveItem";
import { LayoutAnimation } from "react-native";
import { useDB } from "../context";

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
  const realm = useDB();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (realm) {
      const data = realm.objects("Save");
      // console.log(data);
      data.addListener((data) => {
        LayoutAnimation.spring();
        setData([...data.sorted("_id", true)]);
      });
      return () => {
        data.removeAllListeners();
      };
    }
  }, []);

  return (
    <Container>
      <Background />
      <HeaderBack />
      <Info>
        <InfoTitle>Save</InfoTitle>
        <InfoDesc>View saved tarot results</InfoDesc>
      </Info>
      {data && data.length > 0 && (
        <ContentView
          data={data}
          // ItemSeparatorComponent={() => <Separator />}
          keyExtractor={(item) => item._id + ""}
          renderItem={({ item }) => <SaveItem item={item} />}
        />
      )}
    </Container>
  );
};

export default React.memo(Save);
