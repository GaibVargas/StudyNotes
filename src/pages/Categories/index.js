import React, { useState, useRef } from 'react';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Container, CategoriesList, Category, CategoryButton, Name,
  DeleteButton, AddButton, Modal, TextInput, SendButton, Box
} from './styles';

import Header from '../../components/Header';

const Categories = () => {
  const [showModal, setShowModal] = useState(false);

  const navigation = useNavigation();

  const textInputRef = useRef(null);

  return(
    <>
    <Header title="Categorias" />

      <Container>
        <CategoriesList>
          <Category>
            <CategoryButton
              onPress={() => navigation.navigate('Notes', { category: 'Programação' })}
            >
              <Name>Programação</Name>
            </CategoryButton>
            <DeleteButton>
              <MaterialIcons name="delete" size={30} color="#F0F0F0" />
            </DeleteButton>
          </Category>

          <Category>
            <CategoryButton
              onPress={() => navigation.navigate('Notes', { category: 'Matemática' })}
            >
              <Name>Matemática</Name>
            </CategoryButton>
            <DeleteButton>
              <MaterialIcons name="delete" size={30} color="#F0F0F0" />
            </DeleteButton>
          </Category>
        </CategoriesList>

        <Modal visible={showModal}
          underlayColor="#272D4799"
          onPress={() => {
            Keyboard.dismiss();
            if(showModal) setShowModal(false);
          }}
        >
          <Box>
            <>
            <TextInput
              placeholder="Adicionar uma Categoria"
              placeholderTextColor="#ddd"
              ref={textInputRef}
            />
            <SendButton>
              <Ionicons
                name="ios-send"
                size={25} 
                style={{transform: [{rotate: "45deg"}]}}
                color="#F0F0F0"  
              />
            </SendButton>
            </>
          </Box>
        </Modal>

        <AddButton
            visible={!showModal}
            onPress={() => {
              setShowModal(!showModal);
              setTimeout(() => textInputRef.current.focus(), 10);              
            }}
          >
            <Icon name="plus" size={30} color="#F0F0F0" />
          </AddButton>
      </Container>
    </>
  );
}

export default Categories;