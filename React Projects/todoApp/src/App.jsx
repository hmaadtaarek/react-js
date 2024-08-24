import { useState , useEffect } from 'react'
import { TodoContext, useTodo , TodoProvider } from './contexts'
import {TodoForm , TodoItem} from './components'


function App() {
  const [todos , setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => ([{id:Date.now(), ...todo}, ...prev]))
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo , completed : !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos && JSON.parse(savedTodos).length > 0) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  return (
    <TodoProvider value = {{todos , addTodo , updateTodo , deleteTodo , toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => {
                          return (
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo = {todo}/>
                          </div>
                        )})}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
