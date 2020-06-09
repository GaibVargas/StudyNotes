import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './note.routes';
import Categories from '../pages/Categories';
import Concludes from '../pages/Concludes';

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return(
    <Drawer.Navigator 
      sceneContainerStyle={{
        backgroundColor: '#303757',
      }}
      drawerStyle={{
        backgroundColor: '#272D47',
      }}
      drawerContentOptions={{
        activeBackgroundColor: '#303757',
        activeTintColor: '#F4F4F4',
        inactiveTintColor: '#BBB',
        labelStyle: {
          fontSize: 20
        },
      }}
    >
      <Drawer.Screen name="Notas" component={Home} />
      <Drawer.Screen name="Categorias" component={Categories} />
      <Drawer.Screen name="Concluídas" component={Concludes} />
    </Drawer.Navigator>
  );
}

export default DrawerRoutes;