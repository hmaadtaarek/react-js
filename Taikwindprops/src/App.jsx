import { useState } from 'react'
import './App.css'

function App() {
  const [color , setColor] = useState('black')
  return (
    <div className='w-screen h-screen duration-200 flex justify-center items-center selection:bg-white selection:text-black'
    style={{ backgroundColor: color }}>
    <h1 className='font-bold capitalize text-white'>"Background color changer"</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4'>
        <div className="flex flex-wrap justify-center items-center gap-3 shadow-lg bg-white text-black px-3 py-2 rounded-3xl">


        <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
        <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
        <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
        <button
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "olive"}}
          >Olive</button>
        <button
          onClick={() => setColor("grey")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "grey"}}
          >Grey</button>
        <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
        <button
          onClick={() => setColor("Pink")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "Pink"}}
          >Pink</button>
        <button
          onClick={() => setColor("Purple")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "Purple"}}
          >Purple</button>
        <button
          onClick={() => setColor("Lavender")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "Lavender"}}
          >Lavender</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
