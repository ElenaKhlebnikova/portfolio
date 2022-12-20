import React from "react";
import About from "./components/about/About";

import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./components/projects/Projects";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
