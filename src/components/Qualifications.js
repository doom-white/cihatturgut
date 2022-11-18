import React, { useState } from "react";
import { motion } from "framer-motion";
import html5 from "../assets/images/html5.png";
import css3 from "../assets/images/css3.png";
import jscript from "../assets/images/javascript.png";
import reactjs from "../assets/images/reactjs.png";
import native from "../assets/images/native.png";
import ENG from "../assets/images/eng.png";
import Speaking from "../assets/images/speaking.png";
import Reading from "../assets/images/reading.png";
import Listening from "../assets/images/listening.png";
import Taekwondo from "../assets/images/tae.png";
import TaekwondoW from "../assets/images/taew.png";
import Bodybuilding from "../assets/images/bb.png";
import BodybuildingW from "../assets/images/bbw.png";
import Coding from "../assets/images/coding.jpg";
import Chess from "../assets/images/chess.jpg";
import { Link } from "react-router-dom";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { ScreenButtonsVariant } from "../helpers/Variants";

const Qualifications = ({ chageFooterColorsHandler, theme }) => {
  const [category, setCategory] = useState("PL");

  return (
    <div className="qua-main-container">
      <motion.div
        className="div-navigation-button"
        variants={ScreenButtonsVariant}
        initial="hidden"
        animate="visible"
      >
        <Link to="/personal" className="btn btn-outline-navy">
          <span>
            <FaCaretLeft
              className="fa-navigation-button"
              color={theme === "dark" ? "#F8F9FA" : "#0e3763"}
              onClick={() =>
                chageFooterColorsHandler(
                  "rgba(255, 255, 0, 0.2)",
                  "rgb(163, 163,6)"
                )
              }
            />
          </span>
        </Link>
      </motion.div>
      <div className="qua-container">
        <div className="qua-buttons">
          <button
            className={`${
              category === "PL"
                ? theme === "dark"
                  ? "btn-navy-dark"
                  : "btn-navy"
                : theme === "dark"
                ? "btn-qua-outline-navy-dark"
                : "btn-qua-outline-navy"
            } btn-lg qua-my-btn`}
            style={{ width: "33%" }}
            onClick={() => setCategory("PL")}
          >
            Prog. Languages
          </button>
          <button
            className={`${
              category === "FL"
                ? theme === "dark"
                  ? "btn-navy-dark"
                  : "btn-navy"
                : theme === "dark"
                ? "btn-qua-outline-navy-dark"
                : "btn-qua-outline-navy"
            } btn-lg qua-my-btn`}
            style={{ width: "33%" }}
            onClick={() => setCategory("FL")}
          >
            Foreign Language
          </button>
          <button
            className={`${
              category === "HB"
                ? theme === "dark"
                  ? "btn-navy-dark"
                  : "btn-navy"
                : theme === "dark"
                ? "btn-qua-outline-navy-dark"
                : "btn-qua-outline-navy"
            } btn-lg qua-my-btn`}
            style={{ width: "33%" }}
            onClick={() => setCategory("HB")}
          >
            Hobbies
          </button>
        </div>
        {category === "PL" && (
          <div className="qua-screens">
            <div className="row">
              {/*reactjs*/}
              <motion.div
                className="col qua-matrix-column"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.3,
                  stiffness: 250,
                }}
              >
                <img
                  src={reactjs}
                  alt="reactjs"
                  className="qua-png qua-react-png"
                />
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-info progress-bar-animated"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{ width: "70%", fontSize: "1.1rem" }}
                  >
                    70%
                  </div>
                </div>
              </motion.div>
              <div className="col qua-matrix-column"></div>
              <div className="col qua-matrix-column"></div>
              {/*html5*/}
              <motion.div
                className="col qua-matrix-column"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.6,
                  stiffness: 210,
                }}
              >
                <img src={html5} alt="html5" className="qua-png" />
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{ width: "90%", fontSize: "1.1rem" }}
                  >
                    90%
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="row">
              <div className="col qua-matrix-column"></div>
              {/*css3*/}
              <motion.div
                className="col qua-matrix-column"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.7,
                  stiffness: 200,
                }}
              >
                <img src={css3} alt="css3" className="qua-png" />
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-primary progress-bar-animated"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{ width: "90%", fontSize: "1.1rem" }}
                  >
                    90%
                  </div>
                </div>
              </motion.div>
              <div className="col qua-matrix-column"></div>
            </div>

            <div className="row">
              {/*native*/}
              <motion.div
                className="col qua-matrix-column"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.5,
                  stiffness: 230,
                }}
              >
                <img
                  src={native}
                  alt="react-native"
                  className="qua-png qua-native-png"
                />
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-success progress-bar-animated"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{ width: "60%", fontSize: "1.1rem" }}
                  >
                    60%
                  </div>
                </div>
              </motion.div>
              <div className="col qua-matrix-column"></div>
              <div className="col qua-matrix-column"></div>
              {/*javascript*/}
              <motion.div
                className="col qua-matrix-column"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.8,
                  stiffness: 180,
                }}
              >
                <img src={jscript} alt="javascript" className="qua-png" />
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{ width: "80%", fontSize: "1.1rem" }}
                  >
                    80%
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
        {category === "FL" && (
          <div className="qua-screens">
            <div className="row">
              {/*eng*/}
              <motion.div
                className="col qua-matrix-column"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 1.5,
                  stiffness: 500,
                }}
              >
                <img
                  src={ENG}
                  alt="reactjs"
                  className="qua-png qua-react-png"
                />
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "1rem" }}>
                    English - Upper Intermediate
                  </span>
                </div>
              </motion.div>
              <div className="col qua-matrix-column"></div>
              <div className="col qua-matrix-column"></div>
              <div className="col qua-matrix-column"></div>
            </div>

            <div className="row">
              {/*speaking*/}
              <motion.div
                className="col qua-matrix-column"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.3,
                  stiffness: 150,
                }}
              >
                <img
                  src={Speaking}
                  alt="speaking"
                  className="qua-png qua-native-png"
                />
                <div id="div-qua-speaking">
                  <span style={{ fontSize: "1rem" }}>speaking</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{ width: "60%", fontSize: "1.1rem" }}
                  >
                    60%
                  </div>
                </div>
              </motion.div>
              {/*listening*/}
              <motion.div
                className="col qua-matrix-column"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.6,
                  stiffness: 190,
                }}
              >
                <img src={Listening} alt="listening" className="qua-png" />
                <div id="div-qua-listening">
                  <span style={{ fontSize: "1rem" }}>listening</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-success progress-bar-animated"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{ width: "80%", fontSize: "1.1rem" }}
                  >
                    80%
                  </div>
                </div>
              </motion.div>
              {/*reading*/}
              <motion.div
                className="col qua-matrix-column"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  delay: 1,
                  stiffness: 220,
                }}
              >
                <img
                  src={Reading}
                  alt="reading"
                  className="qua-png qua-reading-png"
                />
                <div id="div-qua-reading">
                  <span style={{ fontSize: "1rem" }}>reading</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-primary progress-bar-animated"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{ width: "90%", fontSize: "1.1rem" }}
                  >
                    90%
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="row">
              <div className="col qua-matrix-column"></div>
              <div className="col qua-matrix-column"></div>
              <div className="col qua-matrix-column"></div>
              <div className="col qua-matrix-column"></div>
            </div>
          </div>
        )}
        {category === "HB" && (
          <div className="qua-screens">
            <div className="row">
              {/*coding*/}
              <motion.div
                className="col qua-matrix-column"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.3,
                  stiffness: 250,
                }}
              >
                <img
                  src={Coding}
                  alt="coding"
                  className="qua-png qua-coding-png"
                />
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "1rem" }}>coding</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-success progress-bar-animated"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{ width: "100%", fontSize: "1.1rem" }}
                  >
                    100%
                  </div>
                </div>
              </motion.div>
              <div className="col qua-matrix-column"></div>
              <div className="col qua-matrix-column"></div>
              {/*hb-reading*/}
              <motion.div
                className="col qua-matrix-column"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.6,
                  stiffness: 210,
                }}
              >
                <img
                  src={Reading}
                  alt="reading"
                  className="qua-png qua-reading-png"
                />
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "1rem" }}>reading</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-primary progress-bar-animated"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{ width: "50%", fontSize: "1.1rem" }}
                  >
                    50%
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="row">
              <div className="col qua-matrix-column"></div>
              {/*taekwondo*/}
              <motion.div
                className="col qua-matrix-column"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.7,
                  stiffness: 200,
                }}
              >
                <div>
                  <span
                    className="badge rounded-pill text-bg-warning"
                    style={{ fontSize: ".8rem" }}
                  >
                    back in the day - taekwon-do
                  </span>
                </div>
                {theme === "dark" ? (
                  <img
                    src={TaekwondoW}
                    alt="taekwon-do"
                    className="qua-png qua-taekwondo-png"
                  />
                ) : (
                  <img
                    src={Taekwondo}
                    alt="taekwon-do"
                    className="qua-png qua-taekwondo-png"
                  />
                )}
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-dark progress-bar-animated"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{ width: "99%", fontSize: "1.1rem" }}
                  >
                    99%
                  </div>
                </div>
              </motion.div>
              <div className="col qua-matrix-column"></div>
            </div>

            <div className="row">
              {/*chess*/}
              <motion.div
                className="col qua-matrix-column"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.5,
                  stiffness: 230,
                }}
              >
                <img
                  src={Chess}
                  alt="chess"
                  className="qua-png qua-chess-png"
                />
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "1rem" }}>chess</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{ width: "75%", fontSize: "1.1rem" }}
                  >
                    75%
                  </div>
                </div>
              </motion.div>
              <div className="col qua-matrix-column"></div>
              <div className="col qua-matrix-column"></div>
              {/*body-building*/}
              <motion.div
                className="col qua-matrix-column"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.8,
                  stiffness: 180,
                }}
              >
                <div>
                  <span
                    className="badge rounded-pill text-bg-warning"
                    style={{ fontSize: ".8rem" }}
                  >
                    back in the day - body-building
                  </span>
                </div>
                {theme === "dark" ? (
                  <img
                    src={BodybuildingW}
                    alt="body-building"
                    className="qua-png qua-body-png"
                  />
                ) : (
                  <img
                    src={Bodybuilding}
                    alt="body-building"
                    className="qua-png qua-body-png"
                  />
                )}
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{ width: "60%", fontSize: "1.1rem" }}
                  >
                    60%
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
      <motion.div
        className="div-navigation-button"
        variants={ScreenButtonsVariant}
        initial="hidden"
        animate="visible"
      >
        <Link to="/experiences" className="btn btn-outline-navy">
          <span>
            <FaCaretRight
              className="fa-navigation-button"
              color={theme === "dark" ? "#F8F9FA" : "#0e3763"}
              onClick={() =>
                chageFooterColorsHandler(
                  "rgba(0, 60, 255, 0.2)",
                  "rgb(0, 60,255)"
                )
              }
            />
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Qualifications;
