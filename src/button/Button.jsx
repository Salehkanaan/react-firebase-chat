import React, { useState, useEffect } from "react";
import "./button.css";

function Button() {
  const [blur, setBlur] = useState(0);
  const [hue1, setHue1] = useState(30);
  const [sat1, setSat1] = useState(50);
  const [hue2, setHue2] = useState(5);
  const [sat2, setSat2] = useState(80);
  const [grad, setGrad] = useState(30);
  const [gradoff, setGradoff] = useState(50);

  const randomise = () => {
    setHue1(Math.floor(Math.random() * 360));
    setSat1(Math.floor(Math.random() * 360));
    setHue2(Math.floor(Math.random() * 70) + 15);
    setSat2(Math.floor(Math.random() * 70) + 15);
    setGrad(Math.floor(Math.random() * 10) + 20);
    setGradoff(Math.floor(Math.random() * 20) + 40);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--hue", `${hue1}deg`);
    root.style.setProperty("--sat", `${sat1}%`);
    root.style.setProperty("--hue2", `${hue2}deg`);
    root.style.setProperty("--sat2", `${sat2}%`);
    root.style.setProperty("--gradgap", `${grad}%`);
    root.style.setProperty("--gradoffset", `${gradoff}%`);
    root.style.setProperty("--blur", `${blur}px`);
  }, [blur, hue1, sat1, hue2, sat2, grad, gradoff]);

  return (
    <div id="buttton">
      <div className="custom">
        <button onClick={randomise}><span className="animated-text"> Sev Beni</span></button>
      </div>
    </div>
  );
}

export default Button;
