import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, updateTodo, toggleComplete , toggleEditable} from '../features/todo/todoSlice'

function TodoItem({todoId}) {

    const todo = useSelector(state => state.todoslist.find(todo => todo.id === todoId))

    const dispatch = useDispatch()

    const handleDelete = () =>{
        console.log('Deleting todo with ID:', todo.id);
        dispatch(deleteTodo({id: todo.id}))
    }

    const handleUpdate = (newText) =>{
        dispatch(updateTodo({id: todo.id , text : newText}))
        dispatch(toggleEditable({id: todo.id}))
    }

    const handleToggleCompleted = ()=>{
        dispatch(toggleComplete({id: todo.id}))
    }

    const handleToggleEditable = () => {
        dispatch(toggleEditable({id: todo.id}))
    }

    if (!todo) return ""



    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 mb-2 gap-x-3 shadow-sm shadow-black/50 duration-300 text-black ${
                todo.completed ? "bg-[#cdfba4]" : "bg-[#fdb7b7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={handleToggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    todo.editable ? "border-black/30 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todo.text || ""} // Assuming you want to show the todo text
                onChange={(e) => handleUpdate(e.target.value)}
                readOnly={!todo.editable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={handleToggleEditable} // Call the function to toggle edit mode
                disabled={todo.completed}
            >
                {todo.editable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={handleDelete}
            >
                ❌
            </button>
        </div>
    );
    
}

export default TodoItem
