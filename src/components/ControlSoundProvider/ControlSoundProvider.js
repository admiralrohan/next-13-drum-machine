"use client";
import React from "react";

export const ControlSoundContext = React.createContext();

function ControlSoundProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  return (
    <ControlSoundContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </ControlSoundContext.Provider>
  );
}

export function useControlSound() {
  const value = React.useContext(ControlSoundContext);

  if (!value) {
    throw new Error("You must use this context within ControlSoundProvider");
  }

  return value;
}

export default ControlSoundProvider;
