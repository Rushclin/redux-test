import { ADD_TODO_ACTION, DELETE_TODO_ACTION, TOGGLE_TODO_ACTION } from "../reducers/TodoReducer";

export const toggleTodoAction = (todo) => ({
    type: TOGGLE_TODO_ACTION,
    payload: { ...todo, completed: !todo.completed }
})

export const deleteTodoAction = (todo) => ({
    type: DELETE_TODO_ACTION,
    payload: todo.id
})

export const addTodoAction = (title) => ({
    type: ADD_TODO_ACTION,
    payload: { title }
})