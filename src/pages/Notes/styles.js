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
  color: #F0F0F0;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Category = styled.Text`
  color: #F0F0F0;
  font-size: 14px;
  font-style: italic;
`;

export const ToggleDone = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border-radius: 80px;
  border: 3px solid #394168;
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

export const SendButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
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
  margin-bottom: 20px;
  color: #F0F0F0;
`;

export const NewNoteDetail = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Picker = styled.View`
  width: 70%;
`;

export const PickerStandart = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px 5px 10px;
  border-radius: 4px;
  border: 1px solid #5B638D;
`;

export const StandartLabel = styled.Text`
  font-size: 18px;
  color: #F0F0F0;
`;

export const PickerItems = styled.View`
  display: ${props => props.show ? 'flex' : 'none'};
  background-color: #2f3657;
  padding: 5px 10px;
  border-radius: 4px;
`;

export const PickerItem = styled.TouchableOpacity`
  padding: 10px 0;
`;

export const PickerText = styled.Text`
  color: #F0F0F0;
  font-size: 15px;
`;
