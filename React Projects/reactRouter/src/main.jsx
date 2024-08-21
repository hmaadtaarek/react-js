import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Home from './Components/Home/Home.jsx'
// import About from './Components/About/About'
// import Contact from './Components/Contact/Contact'
// import User from './Components/User/User'
// import Github, {githubInfo} from './Components/Github/Github.jsx'
import {Home, About, Contact, User, Github, githubInfo} from './Components'
import Layout from './Layout'
import './index.css'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path: '/about',
//         element: <About/>
//       },
//       {
//         path: '/contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path = '' element={<Home/>}/>
      <Route path = 'about' element={<About/>}/>
      <Route path = 'contact' element={<Contact/>}/>
      <Route path = 'user/:id' element={<User/>}/>
      <Route 
      loader = {githubInfo}
      path = 'github' 
      element={<Github/>}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>
)
