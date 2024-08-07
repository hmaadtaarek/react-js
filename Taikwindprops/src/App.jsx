import { useState } from 'react'
import './App.css'

const colors =  ['red', 'green', 'blue','olive']
function App() {
  const [color , setColor] = useState('black')
  return (
    <div className='w-screen h-screen duration-200 flex justify-center items-center selection:bg-white selection:text-black'
    style={{ backgroundColor: color }}>
    <h1 className='font-bold capitalize text-white'>"Background color changer"</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4'>
        <div className="flex flex-wrap justify-center items-center gap-3 shadow-lg bg-white text-black px-3 py-2 rounded-3xl">

          {colors.map((c) => (
            <button
              
              onClick={() => setColor(c)}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: c}}
              >{c}</button>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default App


