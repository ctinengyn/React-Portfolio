import Navbar from "./components/navbar/Navbar"
import Menu from "./components/menu/Menu"
import Main from "./components/main/Main"
import Works from "./components/works/Works"
import Resume from "./components/resume/Resume"
import Contact from "./components/contact/Contact"
import "./app.css"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Main/>
        <Works/>
        <Resume/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
