import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todolist: [
        { id: 1,
          text: "Todo Message",
          completed: false  
        }
    ],

    addTodo: (todo)=>{},
    updateTodo: (todo, id)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{},
})

export const useTodo = () => (
    useContext(TodoContext)
)

export const TodoProvider = TodoContext.Provider

