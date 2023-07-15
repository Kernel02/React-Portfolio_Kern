import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <AboutMe />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;
