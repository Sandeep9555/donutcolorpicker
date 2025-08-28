import React, { useState } from "react";

const DonutColorPicker = () => {
  const colors = [
    { name: "Crimson", value: "#DC14#C" },
    { name: "SeaGreen", value: "#2E8B57" },
    { name: "RoyalBlue", value: "#4169E1" },
    { name: "Gold", value: "#FFD700" },
    { name: "Plum", value: "#DDA0DD" },
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
        <circle cx="60" cy="60" r="40" fill="none" strokeWidth="22" />
        <circle
          cx="60"
          cy="60"
          r="40"
          fill="none"
          stroke={currentColor.value}
          strokeWidth="22"
        />
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
