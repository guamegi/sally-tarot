import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  width: 100%;
  height: 44px;
  margin: 10px 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 10px;
`;
const Column = styled.View`
  flex: 1;
  /* background-color: red; */
  padding: 0px 10px;
`;
const Title = styled.Text`
  font-size: 18px;
  color: white;
  overflow: hidden;
`;
const Date = styled.Text`
  color: white;
  font-size: 12px;
  margin-top: 6px;
`;
const DeleteBtn = styled.TouchableOpacity`
  padding: 6px;
  justify-content: center;
  align-items: center;
`;

const SaveItem = ({ item }) => {
  const deleteItem = () => {
    console.log("delete");
  };
  return (
    <Container>
      <Image source={item.image} />
      <Column>
        <Title>{item.title}</Title>
        <Date>{item.date}</Date>
      </Column>
      <DeleteBtn onPress={deleteItem}>
        <Ionicons name="trash-outline" size={24} color="white" />
      </DeleteBtn>
    </Container>
  );
};

export default SaveItem;
