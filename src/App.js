import React, { useState, useEffect } from "react";
import FlareComponent from "flare-react";
import "./styles.css";

import ufoAnimation from "../assets/ufo.flr";

export default function App() {
  const [animation, setAnimation] = useState("Start");
  useEffect(() => {
    setTimeout(() => {
      setAnimation("Float");
    }, 5500);
  }, []);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#f5f8ff",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <FlareComponent
        width={400}
        height={400}
        animationName={animation}
        transparent
        file={ufoAnimation}
      />
    </div>
  );
}
