import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main"
import Works from "./components/works/Works"
import Resume from "./components/resume/Resume"
import Contact from "./components/contact/Contact"
import "./app.css"

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
