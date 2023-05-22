import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import MaterialUi from "./MaterialUi";
import {ThemeProvider,createTheme} from "@mui/material";
import MaterialUi2 from "./MaterialUi2";
//custom theme
const myTheme=createTheme({
  palette:{
    primary:{
      main:"#E75480"
    },
    secondary:{
      main:"#006400"
    }
  }
})



function App() {
  //custom theme

  const name="jaydev kalariya"
  return (
    <>
    <ThemeProvider theme={myTheme}>
    <BrowserRouter>
    <Header/>
     <Routes>
          <Route path="/" element={<Home name={name}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact contact="7990554541"/>}/>
          <Route path="/materialUi" element={<MaterialUi/>}/>
          <Route path="/materialUi2" element={<MaterialUi2/>}/>
     </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App;
