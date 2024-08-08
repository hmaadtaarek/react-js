import { useCallback, useState , useEffect , useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passReference = useRef(null)



  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    }

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))

    setPassword(pass)

    }

  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = () => {
    passReference.current.select()
    passReference.current.setSelectionRange(0, 99999)
    window.navigator.clipboard.writeText(password)
    // document.execCommand("copy")
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <div className="w-full max-w-md mx-auto py-3 px-4 rounded-lg bg-slate-700 my-10 text-orange-400">
      <h1 className="text-white text-2xl text-center mb-4">Password Generator</h1>
      <div className='flex overflow-hidden rounded-lg mb-4 '>
        <input type="text"
        className='outline-none px-4 py-2 w-full'
        value={password}
        readOnly
        placeholder='Password'
        ref={passReference}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max = {100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => setLength(e.target.value)}
         />
        <label>Length : {length}</label>
        
      </div>

      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        id='numberAllowed'
        className='cursor-pointer'
        onChange={() => setNumberAllowed(prev => !prev)}
        />
        <label>Numbers</label>
        
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={charAllowed}
        id='charAllowed'
        className='cursor-pointer'
        onChange={() => setCharAllowed(prev => !prev)}
        />
        <label>Characters</label>
        
      </div>

      </div>
    </div>
    )
}

export default App
