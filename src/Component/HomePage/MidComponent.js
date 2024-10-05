import { useState } from "react";
import style from "../../RoundImages.module.css";
import { motion } from "framer-motion";

export default function MidComponent() {
  const data = [
    {
      image: "/RoundImages/option1.jpg",
      title: "Innovative learning",
      desc: "Creative Explorations",
    },
    {
      image: "/RoundImages/option2.png",
      title: "Curious Mind",
      desc: "Critical thinking and bright ideas",
    },
    {
      image: "/RoundImages/option3.jpg",
      title: "World wisdom",
      desc: "Connecting lessons to everyday experiences",
    },
    {
      image: "/RoundImages/option4.jpg",
      title: "Unlocking passion",
      desc: "Critical thinking and bright ideas",
    },
  ];
  return (
    <div className={style.container} >
      {data.map((item,index) => {
        return (
          <div
            className={style.textContainer}
          >
            <img src={`${item.image}`} alt="" className={style.images} />
            <h4 style={{marginTop:'0.5rem',textAlign:'center'}} >{item.title}</h4>
            <p style={{textAlign:'center'}}>{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
