import {BrowserRouter,Route,Routes} from "react-router-dom";

import './App.css'
import Themes from "./components/Themes";
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import About from './About/About'
import Portfolio from './portfolio/Portfolio'
import Contact from './contact/Contact'

function App() {
  

  return (
   <BrowserRouter>
   <Navbar />
   <Themes />
   <Routes>
    <Route index element={<Home />}/>
    <Route path='about'  element={<About />}/>
    <Route path="portfolio" element={<Portfolio />}/>
    <Route path='contact' element={<Contact />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
