import React from "react";
import "../styles/BackgroundLines.css";

const BackgroundLines = () => {
  return (
    <div className="vertical-line-container">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="vertical-line"
          style={{ animationDelay: `${i * 2.5}s` }}
        />
      ))}
    </div>
  );
};

export default BackgroundLines;
