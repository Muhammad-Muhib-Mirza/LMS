import { useState } from "react";
import style from "../Cards.module.css";

export default function detail() {
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
        style={{
          width: "90vw",
          display: "flex",
          margin: "auto",
          marginTop: "2rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src="/Card-Images/criticalthinking.png"
            alt=""
            style={{ width: "20rem"}}
          />
          <div>Math</div>
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
            <div style={{ width: "30rem" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
              temporibus ut delectus. Dolorem nostrum quasi quidem pariatur,
              quas voluptas sequi vel non dolorum sed eos nihil quisquam
              architecto praesentium expedita.
            </div>
            <hr />
          </div>
          <div>
            <div>
              <b>Grade :</b> 3
            </div>
            <div>
              <b>Subject :</b> Math
            </div>
            <div>
              <b>Type :</b>{" "}
              <a href="http://" style={{ textDecoration: "none" }}>
                Perfomance Task
              </a>
            </div>
            <div>
              <b>Duration :</b> 2-5 days
            </div>
            <div>
              <b>Downloads :</b> 50
            </div>
            <hr />
          </div>
          <div style={{ width: "30rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            soluta beatae unde, pariatur expedita, sed dolorem in eveniet fuga
            similique, eius libero! Quas nobis et laudantium iure maxime nihil
            autem?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus laboriosam ullam minima tenetur! Quis rem nisi officia
            qui placeat eveniet delectus mollitia debitis dicta illum sit,
            numquam vitae suscipit necessitatibus!Lorem
          </div>
        </div>
      </div>
      <div
        style={{
          height: "auto",
          width: "85vw",
          margin: "auto",
          marginTop: "4rem",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {cardData.map((item) => {
          let i = 0;
          return (
            <a
              href={`/detail/${i}`}
              className="card mb-3"
              style={{
                height: "17rem",
                marginLeft: "1.5rem",
                width: "240px",
                cursor: "pointer",
              }}
            >
              <img
                src={`${item.image}`}
                className="card-img-top"
                alt="..."
                style={{ height: "14rem" }}
              />
              <div
                className="card-body"
                style={{ paddingLeft: "0.3rem", paddingRight: "0.3rem" }}
              >
                <p className="card-text">
                  <span>
                    {item.class.map((classes, index) => {
                      i++;
                      return (
                        <span
                          className={`${style.count} ${
                            i == 1
                              ? style.one
                              : i == 2
                              ? style.two
                              : i == 3
                              ? style.three
                              : i == 4
                              ? style.four
                              : style.five
                          }`}
                        >
                          {classes}
                        </span>
                      );
                    })}
                  </span>
                  <span className={style.subjectContainer}>
                    {item.subject.map((subjects) => {
                      return (
                        <span
                          className={`${style.subject} ${
                            subjects == "Math"
                              ? style.math
                              : subjects == "Sci"
                              ? style.sci
                              : subjects == "Eli"
                              ? style.eli
                              : style.ss
                          }`}
                        >
                          {subjects}
                        </span>
                      );
                    })}
                  </span>
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
}
