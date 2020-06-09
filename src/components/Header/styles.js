import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  background-color: #272D47;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #F4F4F4;
  font-size: 20px;
  margin-left: 20px;
`;
