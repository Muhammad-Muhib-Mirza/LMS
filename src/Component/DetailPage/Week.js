import { useState } from "react";
import {motion} from "framer-motion"

export default function Week() {
    const [activeIndex, setActiveIndex] = useState(null); // Track the currently active div
  const [expandedSubIndices, setExpandedSubIndices] = useState({}); 
  const toggleExpand = (weekIndex) => {
    setActiveIndex((prevIndex) => (prevIndex === weekIndex ? null : weekIndex)); // Allow only one week to be active at a time
    setExpandedSubIndices({}); // Collapse all sub-divs when switching between weeks
  };

  const toggleSubExpand = (weekIndex, subIndex) => {
    setExpandedSubIndices((prevState) => ({
      ...prevState,
      [weekIndex]: {
        ...prevState[weekIndex],
        [subIndex]: !prevState[weekIndex]?.[subIndex],
      },
    }));
  };

  const content = [
    { id: 1, text: "This is content for div 1" },
    { id: 2, text: "This is content for div 2" },
    { id: 3, text: "This is content for div 3" },
  ];
  const subContent = [
    { id: 1, text: "Sub-content for div 1" },
    { id: 2, text: "Sub-content for div 2" },
    { id: 3, text: "Sub-content for div 3" },
  ];
  return (
    <div
      style={{
        padding: 20,
        background: "#f9f9f9",
        borderRadius: 10,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3 style={{ marginBottom: 20, textAlign: "center" }}>Weekly Plans</h3>
      {content.map((weekItem, weekIndex) => (
        <div key={weekItem.id} style={{ marginBottom: 20 }}>
          <button
            onClick={() => toggleExpand(weekIndex)} // Toggle only the selected week
            style={{
              width: "100%",
              padding: 10,
              cursor: "pointer",
              borderBottom:'1px solid black'
            }}
          >
            Week {weekItem.id} {activeIndex === weekIndex ? "▲" : "▼"}
          </button>
          <motion.div
            initial={{ opacity: 0, display: "none" }}
            animate={{
              display: activeIndex === weekIndex ? "block" : "none",
              opacity: activeIndex === weekIndex ? 1 : 0,
            }}
            transition={{
              duration: activeIndex === weekIndex ? 0.2 : 0.2, // Faster collapse
              ease: "easeInOut",
            }}
            layout
            style={{
              overflow: "hidden",
              background: "#f7f7f7",
              padding: 20,
              borderRadius: 5,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            {subContent.map((subItem, subIndex) => (
              <div key={subItem.id} style={{ marginBottom: 20 }}>
                <button
                  onClick={() => toggleSubExpand(weekIndex, subIndex)}
                  style={{
                    width: "100%",
                    padding: 10,
                    background:
                      expandedSubIndices[weekIndex]?.[subIndex] ? "#28a745" : "lightgrey",
                    color: expandedSubIndices[weekIndex]?.[subIndex] ? "#fff" : "#333",
                    border: "none",
                    borderRadius: 5,
                    cursor: "pointer",
                  }}
                >
                  Sub-div {subItem.id} {expandedSubIndices[weekIndex]?.[subIndex] ? "▲" : "▼"}
                </button>
                <motion.div
                  initial={{ opacity: 0, display: "none" }}
                  animate={{
                    display: expandedSubIndices[weekIndex]?.[subIndex] ? "block" : "none",
                    opacity: expandedSubIndices[weekIndex]?.[subIndex] ? 1 : 0,
                  }}
                  transition={{
                    duration: expandedSubIndices[weekIndex]?.[subIndex] ? 0.5 : 0.2,
                    ease: "easeInOut",
                  }}
                  layout
                  style={{
                    overflow: "hidden",
                    background: "#e9e9e9",
                    padding: 15,
                    borderRadius: 5,
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <p style={{ fontSize: 14, color: "#333" }}>{subItem.text}</p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  )
}