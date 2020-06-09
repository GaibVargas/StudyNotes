import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const CategoriesList = styled.ScrollView`
  flex: 1;
  padding: 0 5px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-bottom-width: 1px;
  border-bottom-color: #394168;
`;

export const CategoryButton = styled.TouchableOpacity`
  flex: 1;
  padding: 20px 15px; 
`;

export const Name = styled.Text`
  color: #F0F0F0;
  font-size: 18px;
  font-weight: bold;
`;

export const DeleteButton = styled.TouchableOpacity`
  padding: 5px 10px 5px 5px;
`;

export const AddButton = styled.TouchableOpacity`
  width: 55px;
  height: 55px;
  background-color: #47BFAC;
  border-radius: 90px;
  position: absolute;
  bottom: ${props => props.visible ? '20px' : '-1000px'};
  right: 20px;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.TouchableHighlight`
  width: 100%;
  height: 100%;
  background-color: #272D4799;
  position: absolute;
  bottom: ${props => props.visible ? 0 : '-1000px'};
`;

export const Box = styled.TouchableHighlight`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: #272D47;
  position: absolute;
  bottom: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 20px;
`;

export const TextInput = styled.TextInput`
  font-size: 19px;
  padding: 2px;
  color: #F0F0F0;
`;

export const SendButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
