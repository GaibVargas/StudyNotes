import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Section, IconContainer, Title } from './styles';

const Header = ({title}) => {
  const navigation = useNavigation();

  function handleOpenDrawer() {
    navigation.openDrawer();
  }

  return(
    <Container>
      <Section>
        <IconContainer onPress={handleOpenDrawer}>
          <Icon name="menu" color="#F4F4F4" size={25} />
        </IconContainer>

        <Title>{title}</Title>
      </Section>
    </Container>
  );
}

export default Header;