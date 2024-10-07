import { useState } from "react";
import style from "../../RoundImages.module.css";
import { motion } from "framer-motion";

export default function MidComponent() {
  const data = [
    {
      image: "/RoundImages/option1.jpeg",
      title: "Career Counseling",
      desc: "AI-driven career counseling aligns students' strengths.",
    },
    {
      image: "/RoundImages/option2.jpeg",
      title: "Personalized Learning Paths",
      desc: "Personalized AI learning paths adapt to students strengths and pace.",
    },
    {
      image: "/RoundImages/option3.jpeg",
      title: "Preparing for Future AI Roles",
      desc: "Our Curriculum prepares students for exciting AI opportunities.",
    },
    {
      image: "/RoundImages/option4.jpeg",
      title: "Real-Life Learning Projects",
      desc: "Hands-on projects bridge gap between theory.",
    },
    {
      image: "/RoundImages/option5.jpeg",
      title: "Solve Industry Problems",
      desc: "Developing career readiness through industry driven projects.",
    }
  ];
  return (
    <div className={style.container} >
      {data.map((item,index) => {
        return (
          <div
            className={style.textContainer}
          >
            <img src={`${item.image}`} alt="" className={style.images} />
            <h5 style={{marginTop:'0.5rem',textAlign:'center'}} >{item.title}</h5>
            <p style={{textAlign:'center',width:'11rem'}}>{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
