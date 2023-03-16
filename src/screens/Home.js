import { Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Background from "../components/Background";
import Container from "../components/Container";
import { menu } from "../data/menu";

const GoPage = styled.TouchableOpacity`
  margin-bottom: 10px;
  padding: 20px;
  background-color: red;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  margin-bottom: 30px;
`;
const SaveBtn = styled.TouchableOpacity`
  width: 66px;
  padding: 2px;
  align-items: center;
  border-width: 1px;
  border-color: red;
  border-radius: 14px;
  /* background-color: red; */
`;
const SettingBtn = styled(SaveBtn)``;

const Menu = styled.FlatList``;

const Separator = styled.View`
  width: 20px;
`;

const Home = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <Background />
      <Header>
        <SaveBtn onPress={() => navigate("Save")}>
          <Ionicons name="save-outline" color="white" size={28} />
        </SaveBtn>
        <SettingBtn onPress={() => navigate("Setting")}>
          <Ionicons name="settings-outline" color="white" size={28} />
        </SettingBtn>
      </Header>
      <Menu
        horizontal
        data={menu}
        ItemSeparatorComponent={<Separator />}
        renderItem={({ item }) => (
          <View
            style={{
              borderRadius: 20,
              width: 300,
              height: 300,
              backgroundColor: "white",
            }}
          >
            <Text>{item.title}</Text>
          </View>
        )}
      />
      <GoPage onPress={() => navigate("Play")}>
        <Text>go play</Text>
      </GoPage>

      <GoPage onPress={() => navigate("TotalMenu")}>
        <Text>go totalmenu</Text>
      </GoPage>
    </Container>
  );
};

export default Home;
