import React, { Component } from "react";
import Header from "./Header.js";
import Navbar from "./Navbar.js";
import Article from "./Article.js";
import Section from "./Section.js";
import data from "../data/data.json";
import Footer from "./Footer.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Navbar></Navbar>
        <Article></Article>
        <Section data={data}></Section>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
