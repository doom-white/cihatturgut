import React from "react";
import ThemeMode from "./ThemeMode";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import chttrgt from "../assets/images/chttrgt.jpg";

const FooterBar = ({ changeThemeMode, whatsapp }) => {
  return (
    <div className="footerbar-main-container">
      <div className="footerbar-container">
        <ThemeMode changeThemeMode={changeThemeMode} />
        {whatsapp && (
          <div className="div-whatsapp">
            <FloatingWhatsApp
              phoneNumber="+90 501 372 55 93"
              accountName="cihatturgut"
              chatMessage="Welcome! How can I help you?"
              allowEsc
              allowClickAway
              notification
              notificationSound
              darkMode
              avatar={chttrgt}
              placeholder="Message"
              buttonStyle={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "3.3rem",
                height: "3.3rem",
              }}
              chatboxStyle={{ position: "absolute" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FooterBar;
