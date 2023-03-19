import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  padding: 10px 14px;
  align-items: flex-end;
`;

const HistoryClose = styled.TouchableOpacity`
  padding: 4px;
  align-items: center;
`;

const HeaderClose = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <HistoryClose onPress={() => navigation.popToTop()}>
        <Ionicons name="close" size={28} color="#d2dae2" />
      </HistoryClose>
    </Container>
  );
};

export default HeaderClose;
