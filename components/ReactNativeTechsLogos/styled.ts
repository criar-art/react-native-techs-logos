import styled from "styled-components/native";

export const ContainerTechs = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
`;

export const ListTechs = styled.FlatList`
  padding: 0px 10px 10px;
`;

export const ContentTech = styled.View`
  background: #eee;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  flex: 1;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #000000;
`;
