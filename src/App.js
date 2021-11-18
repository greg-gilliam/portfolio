import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import About from "./About.js";
import Projects from "./Projects.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Projects} />
        <Route path="/about" component={About} />

        <div className="navigation"></div>
        <img src={logo} className="logo" alt="logo" />

        <div className="navigation-sub">
          <Link to="/" className="item">
            Projects
          </Link>
          <Link to="/about" className="item">
            About
          </Link>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
