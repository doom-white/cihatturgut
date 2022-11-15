import React from "react";
import doomW from "../assets/images/chttrgt.jpg";
import divider from "../assets/images/divider.png";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div className="profile-container">
      <motion.img
        src={doomW}
        alt="doomW"
        whileHover={{
          y: -15,
          scale: 1.2,
        }}
        animated={{ y: 0 }}
        transition={{ duration: 1.3, type: "spring", stiffness: 30 }}
      />
      <h2>Cihat Turgut</h2>
      <h4>an unemployed & inexperienced engineer ...</h4>
      <img src={divider} alt="divider" />
    </div>
  );
};

export default Profile;
