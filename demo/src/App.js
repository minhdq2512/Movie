import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Detail from './components/Detail';
import Contact from './components/Contact';
import About from "./components/About";




function App() {
  return (
    <div className="app-container">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Main/>}> </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
