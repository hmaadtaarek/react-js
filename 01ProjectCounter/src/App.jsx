
// -----------------------------------react hooks , first tutorial--------------------------------------

import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCount] = useState(10) 
  // counter = 0 index of array , setcounter = function to change the value

  const addValue = () => {
    if(counter < 20) {
    setCount(counter + 1)   
    }
  }
  
  const removeValue = () => {
    if(counter > 0) {
      
      setCount(counter - 1)
    }
  }
  return (
    <>
     <h1>Chai aur React!</h1>
     <h2>Counter Value : {counter} </h2>

     <button onClick={addValue}>Add Value</button>
     
     <p></p>
     <button onClick={removeValue}>Remove Value</button>
     <h4>Hence the counnter is working and the cureent value is : {counter}</h4>
    </>
  )
}

export default App

