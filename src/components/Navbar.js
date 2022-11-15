import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaDragon } from "react-icons/fa";

const Navbar = ({ chageFooterColorsHandler }) => {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
        <div className="container-fluid">
          <motion.div
            whileHover={{
              rotateY: "180deg",
              scale: 1.5,
            }}
            animated={{ rotateY: "0" }}
            transition={{ duration: 1, type: "spring", stiffness: 30 }}
          >
            <Link to="/" className="navbar-brand">
              <FaDragon
                className="nav-dragon"
                color="#0e3763"
                onClick={() =>
                  chageFooterColorsHandler(
                    "rgba(220, 20, 60, 0.3)",
                    "rgba(220, 20, 60, 1)"
                  )
                }
              />
            </Link>
          </motion.div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <motion.li
                className="nav-item"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(210, 10, 50, 0.1)",
                }}
                animated={{ y: 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 250 }}
              >
                <NavLink
                  to="/"
                  className="nav-link"
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive ? "3px solid crimson" : "none",
                      backgroundColor: isActive
                        ? "rgba(220, 20, 60, 0.3)"
                        : null,
                      color: isActive ? "rgba(220, 20, 60, 1)" : null,
                    };
                  }}
                  onClick={() =>
                    chageFooterColorsHandler(
                      "rgba(220, 20, 60, 0.3)",
                      "rgba(220, 20, 60, 1)"
                    )
                  }
                >
                  Home
                </NavLink>
              </motion.li>
              <motion.li
                className="nav-item"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(255, 166, 0, 0.1)",
                }}
                animated={{ y: 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 250 }}
              >
                <NavLink
                  to="/contact"
                  className="nav-link"
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive ? "3px solid orange" : "none",
                      backgroundColor: isActive
                        ? "rgba(255, 166, 0, 0.2)"
                        : null,
                      color: isActive ? "rgba(255, 166, 0,1)" : null,
                    };
                  }}
                  onClick={() =>
                    chageFooterColorsHandler(
                      "rgba(255, 166, 0, 0.2)",
                      "rgba(255, 166, 0,1)"
                    )
                  }
                >
                  Contact
                </NavLink>
              </motion.li>
              <motion.li
                className="nav-item"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(255, 255, 0, 0.1)",
                }}
                animated={{ y: 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 250 }}
              >
                <NavLink
                  to="/personal"
                  className="nav-link"
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive
                        ? "3px solid rgb(163, 163, 6)"
                        : "none",
                      backgroundColor: isActive
                        ? "rgba(255, 255, 0, 0.2)"
                        : null,
                      color: isActive ? "rgb(163,163,6)" : null,
                    };
                  }}
                  onClick={() =>
                    chageFooterColorsHandler(
                      "rgba(255, 255, 0, 0.2)",
                      "rgb(163, 163,6)"
                    )
                  }
                >
                  Personal
                </NavLink>
              </motion.li>
              <motion.li
                className="nav-item"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(0, 128, 0, 0.1)",
                }}
                animated={{ y: 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 250 }}
              >
                <NavLink
                  to="/qualifications"
                  className="nav-link "
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive ? "3px solid green" : "none",
                      backgroundColor: isActive ? "rgba(0, 128, 0, 0.2)" : null,
                      color: isActive ? "green" : null,
                    };
                  }}
                  onClick={() =>
                    chageFooterColorsHandler("rgba(0, 128, 0, 0.2)", "green")
                  }
                >
                  Qualifications
                </NavLink>
              </motion.li>
              <motion.li
                className="nav-item"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(0, 60, 255,.1)",
                }}
                animated={{ y: 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 250 }}
              >
                <NavLink
                  to="/experiences"
                  className="nav-link "
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive
                        ? "3px solid rgb(0, 60, 255)"
                        : "none",
                      backgroundColor: isActive ? "rgba(0, 60, 255,.2)" : null,
                      color: isActive ? "rgb(0,60,255)" : null,
                    };
                  }}
                  onClick={() =>
                    chageFooterColorsHandler(
                      "rgba(0, 60, 255, 0.2)",
                      "rgb(0, 60,255)"
                    )
                  }
                >
                  Experiences
                </NavLink>
              </motion.li>
              <motion.li
                className="nav-item"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(0, 0, 128, 0.1)",
                }}
                animated={{ y: 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 250 }}
              >
                <NavLink
                  to="/educations"
                  className="nav-link "
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive ? "3px solid navy" : "none",
                      backgroundColor: isActive ? "rgba(0, 0, 128, 0.2)" : null,
                      color: isActive ? "navy" : null,
                    };
                  }}
                  onClick={() =>
                    chageFooterColorsHandler("rgba(0, 0, 128, 0.2)", "navy")
                  }
                >
                  Educations
                </NavLink>
              </motion.li>
              <motion.li
                className="nav-item"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(128, 0, 128, 0.1)",
                }}
                animated={{ y: 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 250 }}
              >
                <NavLink
                  to="/courses"
                  className="nav-link "
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive ? "3px solid purple" : "none",
                      backgroundColor: isActive
                        ? "rgba(128, 0, 128, 0.2)"
                        : null,
                      color: isActive ? "purple" : null,
                    };
                  }}
                  onClick={() =>
                    chageFooterColorsHandler("rgba(128, 0, 128, 0.2)", "purple")
                  }
                >
                  Courses
                </NavLink>
              </motion.li>

              <motion.li
                className="nav-item"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                }}
                animated={{ y: 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 250 }}
              >
                <NavLink
                  to="/summary"
                  className="nav-link"
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive ? "3px solid black" : "none",
                      backgroundColor: isActive ? "rgba(0, 0, 0, 0.2)" : null,
                      color: isActive ? "black" : null,
                    };
                  }}
                  onClick={() =>
                    chageFooterColorsHandler("rgba(0, 0, 0, 0.2)", "black")
                  }
                >
                  Summary
                </NavLink>
              </motion.li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
