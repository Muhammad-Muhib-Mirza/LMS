import { useState } from "react";
import {motion} from "framer-motion"
import style from "../../Week.module.css"

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
    { id: 1, title:'Objectives' ,text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quos quas facilis dolorem temporibus eaque assumenda facere, quidem veniam odit perspiciatis iusto eveniet illum dicta neque, ab aut cum veritatis." },
    { id: 2, title:'Activities' ,text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quos quas facilis dolorem temporibus eaque assumenda facere, quidem veniam odit perspiciatis iusto eveniet illum dicta neque, ab aut cum veritatis." },
    { id: 3, title:'Tools' ,text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quos quas facilis dolorem temporibus eaque assumenda facere, quidem veniam odit perspiciatis iusto eveniet illum dicta neque, ab aut cum veritatis." },
  ];
  return (
    <div className={style.container}>
  <h3 style={{ paddingTop: 10, paddingBottom: 20, textAlign: "center", color: "#2C3E50" }}>Weekly Plans</h3>
  {content.map((weekItem, weekIndex) => (
    <div key={weekItem.id} style={{ display: 'flex', height: '12.5rem', marginBottom: 20 }}>
      <button
        onClick={() => toggleExpand(weekIndex)}
        className={style.weekBtn}
        style={{
          backgroundColor: "#3498DB",
          color: "#FFF",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#2980B9")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#3498DB")}
      >
        Week {weekItem.id} {activeIndex === weekIndex ? "◀" : "▶"}
      </button>
      <motion.div
        // initial={{ opacity: 0, display: "none" }}
        // animate={{
        //   display: activeIndex === weekIndex ? "flex" : "none",
        //   opacity: activeIndex === weekIndex ? 1 : 0,
        // }}
        // transition={{
        //   duration: activeIndex === weekIndex ? 0.2 : 0.2,
        //   ease: "easeInOut",
        // }}
        layout
        className={style.subContainer}
        style={{
          marginLeft: "10px",
          background: "#ECF0F1",
          borderRadius: "10px",
          padding: "15px",
          boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        {subContent.map((subItem, subIndex) => (
          <div key={subItem.id} style={{ marginBottom: 20, width: '32%' }}>
            <button
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#F39C12",
                color: "#FFF",
                border: "none",
                borderRadius: "5px",
                fontSize: "14px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#E67E22")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#F39C12")}
            >
              {subItem.title}
            </button>
            <motion.div
              layout
              style={{
                overflow: "hidden",
                padding: "15px",
                backgroundColor: "#FFF",
                borderRadius: "5px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                height: '87%',
              }}
            >
              <p style={{
                fontSize: "14px",
                color: "#333",
                width: '95%',
                margin: 'auto',
                textAlign: 'justify',
                lineHeight: "1.5",
              }}>{subItem.text}</p>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  ))}
</div>

  )
}