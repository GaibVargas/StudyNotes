import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #303757;
  flex: 1;
  position: relative;
`;

export const NotesList = styled.ScrollView`
  flex: 1;
  padding: 0 5px;
`;

export const Note = styled.View`
  flex-direction: row;
  padding: 20px 15px;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #394168;
`;

export const Details = styled.TouchableOpacity`
  flex: 1;
  margin-right: 20px;
`;

export const Title = styled.Text`
  color: #AAA;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  text-decoration: line-through;
`;

export const Category = styled.Text`
  color: #AAA;
  font-size: 14px;
  font-style: italic;
`;

export const ToggleDone = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #AAA;
  border-radius: 80px;
  border: 3px solid #AAA;
  justify-content: center;
  align-items: center;
`;
