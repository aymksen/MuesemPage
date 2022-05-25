import './App.scss';
import TopBar from "./components/topbar/TopBar";
import Main from "./components/main/Main"
import Maps from "./components/map/Map"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import "./global.scss"
import {useState } from "react";



function App() {
  const [menuOpen , setMenuOpen] = useState(false);
  
  return (
    
    <div className="App">
        <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections" onClick={()=>setMenuOpen(false)}>
        <Main/>
        <Maps/>
        <About/> 
        <Contact/>
      </div> 
    </div>
  );
}

export default App;
