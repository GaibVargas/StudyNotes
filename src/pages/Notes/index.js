import React, { useState, useRef } from 'react';
import { useRoute } from '@react-navigation/native';
import { TouchableHighlight, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Container, NotesList, Note, Details, 
  Title, Category, ToggleDone, AddButton,
  Modal, NewNoteDetail, TextInput, SendButton,
  Picker, PickerStandart, StandartLabel,
  PickerItems, PickerItem, PickerText, Box
} from './styles';

import Header from '../../components/Header';

const Notes = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPickerItems, setShowPickerItems] = useState(false);

  const route = useRoute();
  const textInputRef = useRef(null);

  function handleSelectPickerItem() {
    setShowPickerItems(false);
  }

  return(
    <>
    <Header title={
      route.params.category === 'default' ? 'Notas' : `Notas de ${route.params.category}`
    } />

      <Container>
        <NotesList>
          <Note>
            <Details>
              <Title>Aprender Python</Title>
              <Category>Programação</Category>
            </Details>
            <ToggleDone />
          </Note>
          <Note>
            <Details>
              <Title>Aprender Python</Title>
              <Category>Programação</Category>
            </Details>
            <ToggleDone />
          </Note>
          <Note>
            <Details>
              <Title>Aprender Python</Title>
              <Category>Programação</Category>
            </Details>
            <ToggleDone />
          </Note>
        </NotesList>

        <Modal visible={showModal}
          underlayColor="#272D4799"
          onPress={() => {
            Keyboard.dismiss();
            if(showModal) setShowModal(false);
            if(showPickerItems) setShowPickerItems(false);
          }}
        >
          <Box>
            <>
            <TextInput 
              placeholder="Adicionar uma nota de estudo"
              placeholderTextColor="#ddd"
              ref={textInputRef}
            />
            <NewNoteDetail>
              <Picker>
                <TouchableHighlight
                  underlayColor="#2f3657"
                  onPress={() => {
                    setShowPickerItems(!showPickerItems);
                  }}
                >
                  <>
                    <PickerStandart>
                      <StandartLabel>Categorias</StandartLabel>
                      <Icon name="chevron-down" size={20} color="#F0F0F0" />
                    </PickerStandart>
                    <PickerItems
                      show={showPickerItems}
                    >
                      <>
                        <PickerItem onPress={handleSelectPickerItem}>
                          <PickerText>Programação</PickerText>
                        </PickerItem>
                        <PickerItem onPress={handleSelectPickerItem}>
                          <PickerText>Matemática</PickerText>
                        </PickerItem>
                      </>
                    </PickerItems>
                  </>
                </TouchableHighlight>
              </Picker>
              <SendButton>
                <Ionicons
                  name="ios-send"
                  size={25} 
                  style={{transform: [{rotate: "45deg"}]}}
                  color="#F0F0F0"  
                />
              </SendButton>
            </NewNoteDetail>
            </>
          </Box>
        </Modal>

        <AddButton
          visible={!showModal}
          onPress={() => {
            setTimeout(() => textInputRef.current.focus(), 10);  
            setShowModal(!showModal);
          }}
        >
          <Icon name="plus" size={30} color="#F0F0F0" />
        </AddButton>
      </Container>
    </>
  );
}

export default Notes;