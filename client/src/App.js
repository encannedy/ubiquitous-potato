import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components1/Navbar1/index";
import Header from "./components1/Header/index";
import Wrapper from "./components1/Wrapper/index";

import Search from "./pages/Search";
import Saved from "./pages/Saved";

import "./App.css";

function App() {
 

    return (
      <Router>
        <div>
          <Navbar />
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

export default App;