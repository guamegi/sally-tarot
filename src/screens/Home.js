import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Background from "../components/Background";
import Container from "../components/Container";
import { MENU } from "../data/menu";
import Menu from "../components/Home/HomeMenu";
import Swiper from "react-native-swiper";
import { View } from "react-native";
import { MIDNIGHT_COLOR, TRANSLUCENT_COLOR } from "../colors";

const Info = styled.View`
  flex: 1;
  background-color: ${TRANSLUCENT_COLOR};
  margin: 0px 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;
const InfoImg = styled.ImageBackground``;
const InfoTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
  color: white;
  font-family: "Georgia";
  text-shadow: 1px 1px 5px black;
`;
const InfoDesc = styled.Text`
  font-size: 16px;
  color: white;
  margin-top: 4px;
  text-shadow: 1px 1px 5px black;
`;

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
  /* font-family: "Georgia"; */
`;
const HeaderSetting = styled.TouchableOpacity`
  padding: 4px;
  align-items: center;
`;

const MenuListArea = styled.View`
  flex: 3;
`;
const TotalMenuArea = styled.View`
  flex: 1;
  justify-content: center;
`;

const TotalMenu = styled(HeaderCabinet)`
  border-width: 0px;
  /* padding: 6px 14px; */
  padding: 10px 22px;
  align-self: center;
  background-color: ${MIDNIGHT_COLOR};
  /* background-color: white; */
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
        <HeaderSetting onPress={() => navigate("Settings")}>
          <Ionicons name="settings-outline" color="#d2dae2" size={24} />
        </HeaderSetting>
      </Header>
      <Info>
        {/* <InfoImg
          style={[StyleSheet.absoluteFill, { opacity: 0.5 }]}
          source={require("assets/images/menu/growth.jpeg")}
        /> */}
        <InfoTitle>Sally's Tarot</InfoTitle>
        <InfoDesc>Choose from one of the menus below</InfoDesc>
      </Info>
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
          {MENU.map((item) => (
            <Menu key={item.no} data={item} />
          ))}
        </Swiper>
      </MenuListArea>
      <TotalMenuArea>
        <TotalMenu onPress={() => navigate("TotalMenu", { MENU })}>
          <Ionicons name="menu-outline" color="#d2dae2" size={28} />
          <TotalMenuText>Convert Menu</TotalMenuText>
        </TotalMenu>
      </TotalMenuArea>
    </Container>
  );
};

export default React.memo(Home);
