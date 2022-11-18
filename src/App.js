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
import FooterBar from "./components/FooterBar";

function App() {
  const [whatsapp, setWhatsapp] = useState(false);
  const [theme, setTheme] = useState("light");
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

  const changeThemeMode = (mode) => {
    if (mode === false) {
      setTheme("dark");
    } else if (mode === true) {
      setTheme("light");
    }
  };

  const getWhatsappStatus = (lockStatus) => {
    setWhatsapp(lockStatus);
  };

  const chageFooterColorsHandler = (bgColor, txtColor) => {
    setActiveColor({
      bgColor,
      txtColor,
    });

    localStorage.setItem("activeColors", JSON.stringify([bgColor, txtColor]));
  };
  return (
    <div className="container">
      <div className={`main-app ${theme}`}>
        <div className="header">
          <Navbar
            chageFooterColorsHandler={chageFooterColorsHandler}
            theme={theme}
            getWhatsappStatus={getWhatsappStatus}
          />
        </div>
        <div className="data">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  chageFooterColorsHandler={chageFooterColorsHandler}
                  getWhatsappStatus={getWhatsappStatus}
                  theme={theme}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact
                  chageFooterColorsHandler={chageFooterColorsHandler}
                  getWhatsappStatus={getWhatsappStatus}
                  theme={theme}
                />
              }
            />
            <Route
              path="/personal"
              element={
                <Personal
                  chageFooterColorsHandler={chageFooterColorsHandler}
                  getWhatsappStatus={getWhatsappStatus}
                  theme={theme}
                />
              }
            />
            <Route
              path="/qualifications"
              element={
                <Qualifications
                  chageFooterColorsHandler={chageFooterColorsHandler}
                  theme={theme}
                />
              }
            />
            <Route
              path="/experiences"
              element={
                <Experiences
                  chageFooterColorsHandler={chageFooterColorsHandler}
                  theme={theme}
                />
              }
            />
            <Route
              path="/educations"
              element={
                <Educations
                  chageFooterColorsHandler={chageFooterColorsHandler}
                  theme={theme}
                />
              }
            />
            <Route
              path="/courses"
              element={
                <Courses
                  chageFooterColorsHandler={chageFooterColorsHandler}
                  theme={theme}
                />
              }
            />
            <Route
              path="/summary"
              element={
                <Summary
                  chageFooterColorsHandler={chageFooterColorsHandler}
                  theme={theme}
                />
              }
            />
            <Route
              path="*"
              element={
                <NotFound
                  chageFooterColorsHandler={chageFooterColorsHandler}
                  theme={theme}
                />
              }
            />
          </Routes>
        </div>

        <FooterBar
          changeThemeMode={changeThemeMode}
          whatsapp={whatsapp}
          theme={theme}
        />

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
