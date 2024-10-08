import { useState, useEffect } from 'react'
import { Header, Footer } from "./components/index"
import authService, { AuthService } from './appwrite/authenticate'
import { login, logout } from './store/authSlice'
import { useDispatch } from 'react-redux'
import { Outlet, Router } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])



  if (loading) {

    return (
      <div>
        <Header />
        <Outlet />
        <Footer />

      </div>
    )
  } else {

  }
}

export default App
