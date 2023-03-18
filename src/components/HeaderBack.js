import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  padding: 10px 14px;
  align-items: flex-start;
`;

const HistoryBack = styled.TouchableOpacity`
  padding: 4px;
  align-items: center;
`;

const HeaderBack = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <HistoryBack onPress={() => navigation.pop()}>
        <Ionicons name="chevron-back-outline" size={28} color="#d2dae2" />
      </HistoryBack>
    </Container>
  );
};

export default HeaderBack;
