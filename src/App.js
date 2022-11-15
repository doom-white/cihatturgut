import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Experiences from "./components/Experiences";
import Personal from "./components/Personal";
import Qualifications from "./components/Qualifications";
import Summary from "./components/Summary";
import NotFound from "./components/NotFound";
import Educations from "./components/Educations";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [activeColor, setActiveColor] = useState({
    bgColor: "rgba(220, 20, 60, 0.3)",
    txtColor: "rgba(220, 20, 60, 1)",
  });

  useEffect(() => {
    if (localStorage.getItem("activeColors")) {
      const [bgColor, txtColor] = JSON.parse(
        localStorage.getItem("activeColors")
      );
      setActiveColor({
        bgColor,
        txtColor,
      });
    }
  }, []);

  const chageFooterColorsHandler = (bgColor, txtColor) => {
    setActiveColor({
      bgColor,
      txtColor,
    });

    localStorage.setItem("activeColors", JSON.stringify([bgColor, txtColor]));
  };
  return (
    <div className="container">
      <div className="main-app">
        <div className="header">
          <Navbar chageFooterColorsHandler={chageFooterColorsHandler} />
        </div>
        <div className="data">
          <Routes>
            <Route
              path="/"
              element={
                <Home chageFooterColorsHandler={chageFooterColorsHandler} />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact chageFooterColorsHandler={chageFooterColorsHandler} />
              }
            />
            <Route
              path="/personal"
              element={
                <Personal chageFooterColorsHandler={chageFooterColorsHandler} />
              }
            />
            <Route
              path="/qualifications"
              element={
                <Qualifications
                  chageFooterColorsHandler={chageFooterColorsHandler}
                />
              }
            />
            <Route
              path="/experiences"
              element={
                <Experiences
                  chageFooterColorsHandler={chageFooterColorsHandler}
                />
              }
            />
            <Route
              path="/educations"
              element={
                <Educations
                  chageFooterColorsHandler={chageFooterColorsHandler}
                />
              }
            />
            <Route
              path="/courses"
              element={
                <Courses chageFooterColorsHandler={chageFooterColorsHandler} />
              }
            />
            <Route
              path="/summary"
              element={
                <Summary chageFooterColorsHandler={chageFooterColorsHandler} />
              }
            />
            <Route
              path="*"
              element={
                <NotFound chageFooterColorsHandler={chageFooterColorsHandler} />
              }
            />
          </Routes>
        </div>
        <div
          className="footer"
          style={{
            backgroundColor: activeColor.bgColor,
            borderBottomColor: activeColor.txtColor,
          }}
        >
          <Footer activeColor={activeColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
