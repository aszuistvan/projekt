import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FelhasznaloProvider } from "./context/FelhasznaloContext";
import { TermekProvider } from "./context/TermekContext";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import TermekLista from "./components/TermekLista";
import Regisztracio from "./components/Regisztracio";
import Bejelentkezes from "./components/Bejelentkezes";
import Footer from "./components/Footer";


function App() {
  return(
    <BrowserRouter>
    <TermekProvider>
      <FelhasznaloProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/termeklista' element={<TermekLista/>}/>
          <Route path='/regisztracio' element={<Regisztracio/>}/>
          <Route path='/bejelentkezes' element={<Bejelentkezes/>}/>
      
          
        </Routes>
        <Footer/>
      </FelhasznaloProvider>
    </TermekProvider>
    </BrowserRouter>
  )
}

export default App;