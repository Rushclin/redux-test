import { INIT_TODO } from "../../utils/INIT_TODO"
export const ADD_TODO_ACTION = 'ADD_TODO_ACTION'
export const TOGGLE_TODO_ACTION = 'TOGGLE_TODO_ACTION'
export const DELETE_TODO_ACTION = 'DELETE_TODO_ACTION'

let id = INIT_TODO.length
id = id + 1

export const TodoReducer = (state = INIT_TODO, action) => {
    switch (action.type) {
        case ADD_TODO_ACTION: {
            return [...state, { id: id++, completed: false, ...action.payload }]
        }
        case TOGGLE_TODO_ACTION: {
            return state.map(todo => {
                if (todo.id == action.payload.id) {
                    return { ...todo, ...action.payload }
                } else {
                    return todo
                }
            })
        }
        case DELETE_TODO_ACTION: {
            return state.filter(todo => todo.id !== action.payload)
        }
        default:
            return state
    }
}