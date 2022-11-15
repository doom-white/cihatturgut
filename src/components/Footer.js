import React from "react";

const Footer = ({ activeColor }) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <small id="footer-text" style={{ color: activeColor.txtColor }}>
        cihatturgut - 2022 ©
      </small>
    </div>
  );
};

export default Footer;
