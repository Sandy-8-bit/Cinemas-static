import React from "react";

import MoviesList from "./MoviesList";
import TheatreGallery from "./Gallery";

import Nav from "./nav";
import TheatreSpec from "./equip";
import Footer from "./footer";
import Private from "./private";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Component from "./Component";
function App() {


  return (
    <>
     <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Component/>} />
        <Route path="/movies" element={<MoviesList />} />
        <Route path="/gallery" element={<TheatreGallery />} />
        <Route path="/private-screening" element={<Private />} />
        <Route path="/contact" element={<Private/>} />
        <Route path="/theatre-spec" element={<TheatreSpec />} />
      </Routes>

    
     
      <Footer />
    </Router>
    </>
  );
}

export default App;

