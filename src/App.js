import React from "react"
import Navbar from "./components/navbar/Navbar"
import Main from "./components/main/Main"


function App() {
  return (
    <div className="app">
      <Navbar/>
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
