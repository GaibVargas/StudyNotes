import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Notes from '../pages/Notes';
import Note from '../pages/Note';

const Stack = createStackNavigator();

const NoteRoutes = () => {
  return(
    <Stack.Navigator
      initialRouteName="Notes"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Notes" component={Notes} initialParams={{ category: 'default' }} />
      <Stack.Screen name="Note" component={Note} />
    </Stack.Navigator>
  );
}

export default NoteRoutes;