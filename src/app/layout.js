import React from "react";
import ControlSoundProvider from "../components/ControlSoundProvider/ControlSoundProvider";

import Header from "../components/Header";

import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ControlSoundProvider>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </ControlSoundProvider>
      </body>
    </html>
  );
}

export default RootLayout;
