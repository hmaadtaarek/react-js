import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'


function App() {

  const [themeMode, setThemeMode] = useState("light")


  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {

    let htmlWindow = document.querySelector('html').classList
    htmlWindow.remove('dark','light')
    htmlWindow.add(themeMode)

  }, [themeMode])

  return (
    <ThemeProvider value = {{themeMode , lightTheme, darkTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
