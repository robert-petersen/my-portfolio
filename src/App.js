import './App.css';
import Landing from "./components/Landing/Landing.js";
import Navigation from "./components/Navigation/Navigation.js";
import About from "./components/About/About.js";

function App() {
  return (
    <div className="App">
      <Landing />
      <Navigation />
      <About />
    </div>
  );
}

export default App;
