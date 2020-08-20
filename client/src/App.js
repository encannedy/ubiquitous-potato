import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import Header from "./components/Header/index";
import Wrapper from "./components/Wrapper/index";

import Search from "./pages/search";
import Saved from "./pages/saved";

import "./App.css";

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Header />
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />

          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;