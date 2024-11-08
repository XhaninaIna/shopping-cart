import React, { useState } from "react";
import LeftToggle from "./LeftToggle";
import RightToggle from "./RightToggle";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import "../styles/homepage.css";

export default function ToggleApiPage() {
  const [toggle, setToggle] = useState("left");

  const handleToggleChange = (event, newToggle) => {
    if (newToggle !== null) {
      setToggle(newToggle);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <ToggleButtonGroup
        value={toggle}
        exclusive
        onChange={handleToggleChange}
        aria-label="toggle button group"
      >
        <ToggleButton value="left" aria-label="left toggle">
          Show Respositories name
        </ToggleButton>
        <ToggleButton value="right" aria-label="right toggle">
          Show Author name
        </ToggleButton>
      </ToggleButtonGroup>

      {toggle === "left" && <LeftToggle />}
      {toggle === "right" && <RightToggle />}
    </div>
  );
}
