import Chai from "./Chai"



function Myapp() {

  const evaluatedExpression = " jsx ke andr jb javvascript inject ji jai to wo evaluated expression khlata h , because waha sirf javascript evaluate hoti h.  declare nhi hoti"
  return (
    <>
      <h1>custom App {Chai()} {evaluatedExpression}</h1>
    </>
  )
}

// const ReactElement = {
//   type: "a",
//   props : {
//       href: "https://reactjs.org",
//       target : "_blank",
//   },
//   children : "Click me to visit react documentaion"
// }

// const anotherReactElement = (

//   <a href="https://reactjs.org" target="_blank"> click me</a>
// )


function App() {
  return (
  <Myapp/>
  )
}

export default App
