import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Background from "../components/Background";
import Container from "../components/Container";
import { menu } from "../data/menu";
import Menu from "../components/Menu";
import Swiper from "react-native-swiper";
import { View } from "react-native";

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 28px;
`;
const HeaderCabinet = styled.TouchableOpacity`
  padding: 2px 14px;
  align-items: center;
  border-width: 1px;
  border-radius: 20px;
  /* border-color: #d2dae2; */
  border-color: #909499;
  flex-direction: row;
`;
const HeaderCabinetText = styled.Text`
  color: #d2dae2;
  margin-left: 6px;
  font-weight: 600;
  font-family: "Georgia";
`;
const HeaderSetting = styled.TouchableOpacity`
  padding: 4px;
  align-items: center;
`;

const TotalMenuArea = styled.View`
  flex: 1;
  justify-content: center;
`;
const MenuListArea = styled.View`
  flex: 3;
`;

const TotalMenu = styled(HeaderCabinet)`
  border-width: 0px;
  padding: 8px 14px;
  align-self: center;
  background-color: #2c3e50;
`;
const TotalMenuText = styled(HeaderCabinetText)`
  font-size: 16px;
`;

const Home = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <Background />
      <Header>
        <HeaderCabinet onPress={() => navigate("Save")}>
          <Ionicons name="save-outline" color="#d2dae2" size={18} />
          <HeaderCabinetText>Cabinet</HeaderCabinetText>
        </HeaderCabinet>
        <HeaderSetting onPress={() => navigate("Setting")}>
          <Ionicons name="settings-outline" color="#d2dae2" size={28} />
        </HeaderSetting>
      </Header>
      <MenuListArea>
        <Swiper
          // showsPagination={false}
          containerStyle={{
            width: "100%",
            // height: SCREEN_HEIGHT / 4,
          }}
          dot={
            <View
              style={{
                backgroundColor: "rgba(255,255,255,.3)",
                width: 10,
                height: 10,
                borderRadius: 5,
                marginLeft: 5,
                marginRight: 5,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: "#fff",
                width: 10,
                height: 10,
                borderRadius: 5,
                marginLeft: 5,
                marginRight: 5,
              }}
            />
          }
        >
          {menu.map((item) => (
            <Menu key={item.no} data={item} />
          ))}
        </Swiper>
      </MenuListArea>
      <TotalMenuArea>
        <TotalMenu onPress={() => navigate("TotalMenu")}>
          <Ionicons name="menu-outline" color="#d2dae2" size={28} />
          <TotalMenuText>Convert Menu</TotalMenuText>
        </TotalMenu>
      </TotalMenuArea>
    </Container>
  );
};

export default Home;
