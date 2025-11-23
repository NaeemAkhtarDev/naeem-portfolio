import React, { useEffect, useState } from "react";
import "../styles/FloatingShapes.css";

const shapes = ["circle", "triangle", "diamond", "square"];

const FloatingShapes = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      setScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setScrolling(false), 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`shape-container ${scrolling ? "animate" : ""}`}>
      {Array.from({ length: 3 }).map((_, i) => {
        const shapeType = shapes[i % shapes.length];
        return <div key={i} className={`shape ${shapeType}`} />;
      })}
    </div>
  );
};

export default FloatingShapes;
