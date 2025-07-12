//import Home from './pages/home'
//import './App.css'
import NavBar from "./components/navbar"
import Aboutme from "./pages/about"
import { Routes,Route } from "react-router-dom"
import Home from "./pages/home"
import Projects from "./pages/projects"
import Contact from "./pages/contact"

function App() {
 

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Aboutme/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
    </div> 
  )
}

export default App
