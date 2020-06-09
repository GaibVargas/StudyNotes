import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container, NotesList, Note, Details, 
  Title, Category, ToggleDone
} from './styles';

import Header from '../../components/Header';

const Notes = () => {
  return(
    <>
    <Header title="Concluídas" />
    
    <Container>
      <NotesList>
        <Note>
          <Details>
            <Title>Aprender Python</Title>
            <Category>Programação</Category>
          </Details>
          <ToggleDone>
            <Icon name="check" size={25} color="#303757" />
          </ToggleDone>
        </Note>
        <Note>
          <Details>
            <Title>Aprender Python</Title>
            <Category>Programação</Category>
          </Details>
          <ToggleDone>
            <Icon name="check" size={25} color="#303757" />
          </ToggleDone>
        </Note>
        <Note>
          <Details>
            <Title>Aprender Python</Title>
            <Category>Programação</Category>
          </Details>
          <ToggleDone>
            <Icon name="check" size={25} color="#303757" />
          </ToggleDone>
        </Note>
      </NotesList>      
    </Container>
    </>
    );
  }
  
  export default Notes;