import { Routes, Route } from 'react-router-dom'
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"
import Home from "./Pages/Home"
// import { Route } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar/> 

      <Routes>
       <Route path='/' element={ <Home/>} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
