import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const ThemeMode = ({ changeThemeMode }) => {
  const [status, setStatus] = useState(false); //light theme status

  const changeStatusMode = () => {
    setStatus(!status);
    changeThemeMode(status);
  };

  return (
    <div className="div-main-theme">
      <motion.div
        className="div-theme"
        whileHover={{
          rotateY: "180deg",
          scale: 1.5,
        }}
        animated={{ rotateY: "0" }}
        transition={{ duration: 1, type: "spring", stiffness: 30 }}
      >
        {status === true ? (
          <FaSun className="theme-theme" onClick={changeStatusMode} />
        ) : (
          <FaMoon className="theme-theme" onClick={changeStatusMode} />
        )}
      </motion.div>
    </div>
  );
};

export default ThemeMode;
