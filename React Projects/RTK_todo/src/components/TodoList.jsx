import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList() {
    const todos = useSelector(state => state.todoslist)

    return (

         <div>
            {todos.map(todo => (
                <TodoItem key={todo.id} todoId={todo.id} />
            ))}
        </div>
    )
}

export default TodoList
