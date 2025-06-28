import React from "react";

const ProgressRing = ({ progress, radius = 36, stroke = 6 }) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      {/* Background Circle */}
      <circle
        stroke="#e5e7eb"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      {/* Progress Circle with rotation via transform */}
      <circle
        stroke="#4f46e5"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + " " + circumference}
        style={{
          strokeDashoffset,
          transition: "stroke-dashoffset 0.5s ease",
          transform: "rotate(-90deg)",
          transformOrigin: "50% 50%",
        }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      {/* Centered Text (not rotated) */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="14"
        fill="#4f46e5"
      >
        {progress}%
      </text>
    </svg>
  );
};

export default ProgressRing;
