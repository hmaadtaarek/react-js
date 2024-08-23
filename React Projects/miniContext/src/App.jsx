import { useState , useContext } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {


  return (
    <UserContextProvider>
      <Profile/>
      <Login/>
    </UserContextProvider>
  )
}

export default App
