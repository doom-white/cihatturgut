import React from "react";
import Profile from "./Profile";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaQuestion, FaCaretRight } from "react-icons/fa";
import {
  ScreenHeaderVariant,
  ScreenVariant,
  ScreenButtonsVariant,
} from "../helpers/Variants";

const Home = ({ chageFooterColorsHandler, theme, getWhatsappStatus }) => {
  return (
    <div className="home-main-container">
      <motion.div
        className="invisible"
        variants={ScreenButtonsVariant}
        initial="hidden"
        animate="visible"
      >
        <Link to="/contact" className="btn btn-outline-navy">
          <span>
            <FaCaretRight
              className="fa-navigation-button"
              onClick={() =>
                chageFooterColorsHandler(
                  "rgba(255, 166, 0, 0.2)",
                  "rgba(255, 166, 0,1)"
                )
              }
            />
          </span>
        </Link>
      </motion.div>

      <div className="home-container">
        <Profile theme={theme} />
        <motion.div
          className="div-home-header"
          variants={ScreenHeaderVariant}
          initial="hidden"
          animate="visible"
        >
          <h2 className="d-flex align-items-center">
            About Me
            <FaQuestion className=" home-question ms-2" />
          </h2>
        </motion.div>

        <motion.div
          className="div-home-paragraf"
          variants={ScreenVariant}
          initial="hidden"
          animate="visible"
        >
          <p className="txtHome">
            Hello, I'm Cihat and I want to talk something about me! Coding web
            and mobile applications is like playing games for me. I love it very
            much and I want to include myself among the best. I met with
            software late, but I realized that it is an event that connects me
            to life. I even have a slogan that is:
            <mark className="txt-slogan">Software until to die...</mark>
          </p>
        </motion.div>
      </div>
      <motion.div
        className="div-home-navigation-button"
        variants={ScreenButtonsVariant}
        initial="hidden"
        animate="visible"
      >
        <Link to="/contact" className="btn btn-outline-navy">
          <span>
            <FaCaretRight
              className="fa-navigation-button"
              color={theme === "dark" ? "#F8F9FA" : "#0e3763"}
              onClick={() => {
                getWhatsappStatus(true);
                chageFooterColorsHandler(
                  "rgba(255, 166, 0, 0.2)",
                  "rgba(255, 166, 0,1)"
                );
              }}
            />
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
