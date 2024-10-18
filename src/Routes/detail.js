import { useState,useEffect } from "react";
import Week from "../Component/DetailPage/Week";
import style from "../Style/Detail.module.css";
import axios from "axios";

export default function detail() {
  // const [data,setData] = useState();
  // useEffect(()=>{
  //   axios.get("").then((result)=>{
  //     console.log(result)
  //   }).catch((err)=>{
  //     console.log(err)
  //   })
  // },[])
  let data = [
    {
      image: "/Card-Images/1727524311985.jpg",
      class: ["1", "2", "3", "4"],
      subject: ["Math", "Sci", "S.S"],
    },
    {
      image: "/Card-Images/1727524388090.jpg",
      class: ["1", "2"],
      subject: ["Math", "Sci"],
    },
    {
      image: "/Card-Images/1727524599284.jpg",
      class: ["2", "3"],
      subject: ["Math"],
    },
    {
      image: "/Card-Images/1727524696934.jpg",
      class: ["1"],
      subject: ["Math", "S.S"],
    },
    {
      image: "/Card-Images/1727524761887.jpg",
      class: ["1", "2"],
      subject: ["Math"],
    },
    {
      image: "/Card-Images/1727524857552.jpg",
      class: ["1"],
      subject: ["Math", "S.S"],
    },
    {
      image: "/Card-Images/1727524983003.jpg",
      class: ["1", "2", "3", "4"],
      subject: ["S.S"],
    },
    {
      image: "/Card-Images/1727525069461.jpg",
      class: ["K", "1", "2", "3"],
      subject: ["Math"],
    },
  ];
  
  const [cardData, setCardData] = useState(data);
  return (
    <>
      <div
        className={style.container}
      >
        <div className={style.imageContainer}>
          <img
            src="/Card-Images/criticalthinking.png"
            alt=""
            style={{ width: "20rem" }}
          />
          <div className={style.tagContainer} >Math</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "2rem",
          }}
        >
          <div>
            <h3>Title</h3>
            <hr />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ width: "5.5rem", fontWeight: "bold" }}>
                Industry :
              </div>{" "}
              <div> Checmical </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "5.5rem", fontWeight: "bold" }}>
                Grades :
              </div>{" "}
              <div> 3 2 1 </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "5.5rem", fontWeight: "bold" }}>
                Duration :
              </div>{" "}
              <div> 3-4 days </div>
            </div>
            <hr />
          </div>
          <h3>Objectives</h3>
          <div className={style.headObjective}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            soluta beatae unde, pariatur expedita, sed dolorem in eveniet fuga
            similique, eius libero! Quas nobis et laudantium iure maxime nihil
            autem?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus laboriosam ullam minima tenetur! Quis rem nisi officia
            qui placeat eveniet delectus mollitia debitis dicta illum sit,
            numquam vitae suscipit necessitatibus!Lorem
          </div>
          <hr />
        </div>
      </div>
      <Week />
    </>
  );
}
