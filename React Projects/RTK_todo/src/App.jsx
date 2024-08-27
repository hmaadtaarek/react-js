import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "./features/todo/todoSlice"



function App() {
  // const dispatch = useDispatch()
  // const todos = useSelector(state => state.todoslist)

  // const [data, setData] = useState([])


  // useEffect(() => {
  //   const savedTodos = JSON.parse(localStorage.getItem('todoslist'));
  //   if (savedTodos && savedTodos.length > 0) {
  //     savedTodos.forEach((todo) => {
  //       dispatch(addTodo(todo)); 
  //     });
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   localStorage.setItem('todoslist', JSON.stringify(todos))
  // }, [todos]);

  return (
    <>
      <div className="bg-[#020c1b] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-600 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2 uppercase">Organize Your Agenda</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <TodoList />
        </div>
      </div>
    </>
  )
}

export default App
