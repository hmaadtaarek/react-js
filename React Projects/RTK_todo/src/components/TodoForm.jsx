import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

function TodoForm() {
    const [input, setInput] = useState([])
    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault()
        if (input.length > 0 ) {
            
            dispatch(addTodo(input))
        }
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className="flex">
            <input
                type="text"
                value={input}
                onChange={(e)=> setInput(e.target.value)}
                placeholder="Write Task..."
                className="w-full border border-black/20 rounded-l-lg px-3 outline-none duration-150 bg-black/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-blue-800 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

