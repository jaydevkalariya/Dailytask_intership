import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import MaterialUi from "./MaterialUi";
function App() {
  const name="jaydev kalariya"
  return (
    <>
    
    <BrowserRouter>
    <Header/>
     <Routes>
          <Route path="/" element={<Home name={name}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact contact="7990554541"/>}/>
          <Route path="/materialUi" element={<MaterialUi/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
