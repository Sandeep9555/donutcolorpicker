import React, { useState } from "react";

const DonutColorPicker = () => {
  const colors = [
    { name: "Tomato", value: "#ff6b6b" },
    { name: "Coral", value: "#ff8f66" },
    { name: "Sunflower", value: "#ffcc33" },
    { name: "Lime", value: "#7ed957" },
    { name: "Teal", value: "#20c997" },
    { name: "Sky", value: "#63c2ff" },
    { name: "Violet", value: "#9b7cff" },
    { name: "Plum", value: "#8b5cf6" },
    { name: "Pink", value: "#ff6fb5" },
    { name: "Graphite", value: "#344055" },
  ];

  const [index, setIndex] = useState(0);

  const changeColor = () => {
    setIndex((prev) => (prev + 1) % colors.length);
  };

  const currentColor = colors[index];

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <svg viewBox="0 0 120 120" width="220" height="220">
        {/* background ring */}
        <circle
          cx="60"
          cy="60"
          r="40"
          fill="none"
          stroke="#eee"
          strokeWidth="22"
        />
        {/* colored donut */}
        <circle
          cx="60"
          cy="60"
          r="40"
          fill="none"
          stroke={currentColor.value}
          strokeWidth="22"
        />
        {/* inner hole */}
        <circle cx="60" cy="60" r="20" fill="white" />
      </svg>

      <h3 style={{ marginTop: "1rem", color: currentColor.value }}>
        {currentColor.name}
      </h3>

      <button
        onClick={changeColor}
        style={{
          marginTop: "1rem",
          padding: "0.6rem 1rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Change Color
      </button>
    </div>
  );
};

export default DonutColorPicker;
