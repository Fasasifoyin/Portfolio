import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Handles from "./component/Handles";
import About from "./component/About";
import Project from "./component/project";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <div className="App position-relative">
        <Navbar />
        <Home />
        <Handles />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
