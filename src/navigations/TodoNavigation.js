import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewTodo from '../screens/Todo/NewTodo';
import ListTodo from '../screens/Todo/ListTodo';

const Stack = createNativeStackNavigator()

const TodoNavigation = () => {
    return (

        <Stack.Navigator initialRouteName='ListTodo'>
            <Stack.Screen name="NewTodo" component={NewTodo} options={{ title: 'Nouvelle Tache' }} />
            <Stack.Screen name="ListTodo" component={ListTodo} options={{ title: 'Liste des taches' }} />
        </Stack.Navigator>

    )
}

export default TodoNavigation