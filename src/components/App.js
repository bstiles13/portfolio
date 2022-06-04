import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { Home } from "./Home/Home";
import { Projects } from "./Projects/Projects";
import { Contact } from "./Contact/Contact";

import "./App.scss";

export const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <div className='app-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};
