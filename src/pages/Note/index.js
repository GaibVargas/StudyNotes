import React from 'react';

import { Container, Text } from './styles';

import Header from '../../components/Header';

const Note = () => {
  return(
    <Container>
      <Header />
      <Text>Single Note</Text>
    </Container>
  );
}

export default Note;