import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import svgImage from "../images/sword.svg";
import Home from "./Home";
import About from "./About";
import "../styles/index.scss";

export const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
      <div className="imageContainer">
        <section className="moon"></section>
        <img src={svgImage} alt="sword" width="250" />
      </div>
    </div>
  );
};

export default App;
