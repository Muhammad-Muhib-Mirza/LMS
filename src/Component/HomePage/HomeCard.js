import { useState } from "react";
import { motion } from "framer-motion";

export default function HomeCard() {
  let data = [
    {
      title: "Perfomance Task",
      content:
        "Engaging, standards-aligned math & ELA activities on topics students love. Students develop and apply critical thinking skills in authentic, real world scenarios using real data.",
    },
    {
      title: "Projects",
      content:
        "Extended units designed to require deeper learning and in-depth inquiry while also incorporating student voice and choice, reflection and revision and student collaboration.",
    },
    {
      title: "Activities",
      content:
        "Ready-to-use interactive or printable lesson plans, which include all necessary resources, such as links, videos, documents and student/teacher notes.",
    },
    {
      title: "Rand & Reason",
      content:
        "Activities where students rank items in a list to answer a set question, which often does not have a right answer. Students are required to think critically to justify their rankings.",
    },
    {
      title: "Skill Builder",
      content:
        "Skill Builders are short exercises where students focus on repeated practice of math & ELA skills. We offer five lines of skill builders, which incorporate real world and high interest topics.",
    },
  ];
  const [cardData, setCardData] = useState(data);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "2rem" }}>
      {cardData.map((item) => {
        return (
          <motion.a href={`/type/${item.title}`}
            className="card"
            style={{
              width: "23rem",
              backgroundColor: "#D9EAF8",
              marginLeft: "2.5rem",
              marginTop: "2rem",
              height: "14rem",
              textDecoration: "none",
              cursor: "pointer",
              boxShadow: "1px 1px 1px rgba(0,0,0,0.2)"
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "2px 2px 2px rgba(0,0,0,0.2)",
            }}
          >
            <div className="card-body" style={{ padding: "0" }}>
              <h5
                className="card-title"
                style={{
                  textAlign: "center",
                  height: "3rem",
                  paddingTop: "0.5rem",
                  fontSize: "1.5rem",
                  backgroundColor: "#B8D7F0",
                }}
              >
                {item.title}
              </h5>
              <p
                className="card-text"
                style={{
                  textAlign: "center",
                  fontSize: "1.1rem",
                  paddingTop: "0.5rem",
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                }}
              >
                {item.content}
              </p>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}
