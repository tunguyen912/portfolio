import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from "./components/nav_bar";
import Home from "./components/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./components/projects";
import Capstone from "./components/capstone";
import Resume from "./components/resume";
import Skills from "./components/skills";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact >
            <Home />
          </Route>
          <Route path="/projects" >
            <Projects />
          </Route>
          <Route path="/capstone" >
            <Capstone />
          </Route>
          <Route path="/resume" >
            <Resume />
          </Route>
          <Route path="/skills" >
            <Skills />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
