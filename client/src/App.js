import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import Header from "./components/Header/index";
import Wrapper from "./components/Wrapper/index";

//import Search from "./pages/Search";
//import Saved from "./pages/Saved";

import "./App.css";

function App() {

    return (
      <Router>
        <div>
          <NavBar />
          <Header />
          <Wrapper>



          </Wrapper>
        </div>
      </Router>
    )
  };

export default App;