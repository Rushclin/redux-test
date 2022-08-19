import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoAction, toggleTodoAction } from '../../redux/actions';
import { TodoSelectors } from '../../redux/selectors/TodoSelectors';
import { styles } from '../../styles/styles';

const ListTodo = () => {
    const navigation = useNavigation()
    const todos = useSelector(TodoSelectors);
    const dispatch = useDispatch();
    const toggleTodo = useCallback((todo) => {
        dispatch(toggleTodoAction(todo))
    }, [])
    const deleteTodo = useCallback((todo) => {
        dispatch(deleteTodoAction(todo))
    }, [])

    console.log(todos)

    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                renderItem={({ item }) => (<Todo todo={item} toggleTodo={toggleTodo} onDelete={deleteTodo} />)}
                keyExtractor={todo => todo.id}
            />
            <View style={styles.floationButton}>
                <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("NewTodo")}>
                    <Text style={styles.h1}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const Todo = props => {
    const { onDelete, todo, toggleTodo } = props
    return (
        <View style={styles.todoContainer}>
            <View>
                <Text>Titre : {todo.title} </Text>
                <Text>Complet : {todo.completed ? "Oui" : "Non"}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Button title="FINIR" onPress={() => toggleTodo(todo)} />
                <Button title="SUP" onPress={() => onDelete(todo)} />
            </View>
        </View>
    );
};

export default ListTodo;
