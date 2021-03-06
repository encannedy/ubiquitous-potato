import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Header from "./components/Header/index";
import Wrapper from "./components/Wrapper/index";

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