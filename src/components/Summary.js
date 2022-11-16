import React from "react";
import medal from "../assets/images/medal.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ScreenMedalVariant,
  ScreenMedalButtonsVariant,
} from "../helpers/Variants";
import { FaCaretLeft } from "react-icons/fa";

const Summary = (props) => {
  return (
    <div className="summary-main-container">
      <motion.div
        className="div-navigation-button"
        variants={ScreenMedalButtonsVariant}
        initial="hidden"
        animate="visible"
      >
        <Link to="/courses" className="btn btn-outline-navy">
          <span>
            <FaCaretLeft
              className="fa-navigation-button"
              color={props.theme === "dark" ? "#F8F9FA" : "#0e3763"}
              onClick={() =>
                props.chageFooterColorsHandler(
                  "rgba(128, 0, 128, 0.2)",
                  "purple"
                )
              }
            />
          </span>
        </Link>
      </motion.div>
      <div className="summary-container">
        <div className="div-text-img">
          <p className="txt-medal">Thank you for patiently reviewing my CV.</p>
          <motion.div
            variants={ScreenMedalVariant}
            initial="hidden"
            animate="visible"
          >
            <img src={medal} alt="medal" />
          </motion.div>
        </div>
      </div>
      <motion.div
        className="invisible"
        variants={ScreenMedalButtonsVariant}
        initial="hidden"
        animate="visible"
      >
        <Link to="/courses" className="btn btn-outline-navy me-2">
          <span>
            <FaCaretLeft
              className="fa-navigation-button"
              onClick={() =>
                props.chageFooterColorsHandler(
                  "rgba(128, 0, 128, 0.2)",
                  "purple"
                )
              }
            />
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Summary;
