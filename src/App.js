import './App.css'
import Navbar from './Navbar'
import About from './About/About.js'
import Beyond from './Beyond/Beyond.js'
import Experience from './Experience/Experience.js'
import Home from './Home/Home.js'
import Projects from './Projects/Projects.js'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar className = "nav"/>
      <div className = "container">
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/experience" element = {<Experience/>}/>
          <Route path = "/projects" element = {<Projects/>}/>
          <Route path = "/beyond" element = {<Beyond/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
