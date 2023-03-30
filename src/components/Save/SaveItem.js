import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useDB } from "../../context";
import { useNavigation } from "@react-navigation/native";

const Container = styled.TouchableOpacity`
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
  const navigation = useNavigation();
  const realm = useDB();
  // console.log(item);

  const deleteItem = (id) => {
    realm.write(() => {
      const data = realm.objectForPrimaryKey("Save", id);
      realm.delete(data);
    });
  };

  const moveResult = () => {
    navigation.navigate("Result", item);
  };

  // const date = new Date(item._id);
  console.log(item._id);

  return (
    <Container onPress={moveResult}>
      <Image source={item.cards[0].image} />
      <Column>
        <Title>{item.cards[0].name}</Title>
        <Date>{item._id}</Date>
      </Column>
      <DeleteBtn onPress={() => deleteItem(item._id)}>
        <Ionicons name="trash-outline" size={24} color="white" />
      </DeleteBtn>
    </Container>
  );
};

export default SaveItem;
