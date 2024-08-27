import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todoslist: [ {
        id: 1,
        text: "testing",
        completed: false,
        editable: false
}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
                editable: false
            }
            state.todoslist.push(todo)
        },

        updateTodo: (state, action) => {
            state.todoslist = state.todoslist.map((todo) => todo.id === action.payload.id ? action.payload : todo)
        },

        deleteTodo: (state, action) => {
            state.todoslist = state.todoslist.filter((todo) => todo.id !== action.payload.id)
        },

        toggleComplete: (state, action) => {
            state.todoslist = state.todoslist.map((todo) => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo)
        },

        toggleEditable: (state, action) => {
            state.todoslist = state.todoslist.map((todo) => todo.id === action.payload.id ? { ...todo, editable: !todo.editable } : todo)
        }
    }
})

export const { addTodo, updateTodo, deleteTodo, toggleComplete, toggleEditable } = todoSlice.actions

export default todoSlice.reducer