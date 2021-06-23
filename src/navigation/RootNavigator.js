import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CatList from '../Components/CatList';
import AddCat from '../Components/AddCat';
import EditCat from '../Components/EditCat';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CatList"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="CatList" component={CatList} />
        <Stack.Screen name="AddCat" component={AddCat} />
        <Stack.Screen name="EditCat" component={EditCat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
