import './App.css';
import Landing from "./components/Landing/Landing.js";
import Navigation from "./components/Navigation/Navigation.js";
import About from "./components/About/About.js";
import Projects from "./components/Projects/Projects.js";

function App() {
  return (
    <div className="App">
      <Landing />
      <Navigation />
      <About />
      <Projects />
    </div>
  );
}

export default App;
