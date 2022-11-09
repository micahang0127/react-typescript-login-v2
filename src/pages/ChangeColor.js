import React, { useState } from "react";
import { useSelector } from "react-redux";

function ChangeColor() {
  const [color, setColor] = useState("");
  const colorState = useSelector((state) => state.color.value);
  console.log("test", color, colorState);
  return (
    <div>
      <div>
        <span style={{ color: colorState }}>tttttt</span>
      </div>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button>CHANGE COLOR</button>
    </div>
  );
}

export default ChangeColor;
