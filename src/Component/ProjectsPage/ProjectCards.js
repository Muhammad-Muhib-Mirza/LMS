import { useState } from "react";
import style from "../../Cards.module.css";
import Filter from "./Filter";
import SubjectFilter from "./SubjectFilter";

export default function ProjectCards() {
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
  const [allData, setAllData] = useState(data);
  const [cardData, setCardData] = useState(data);
  const [subjectfilter, setSubjectFilter] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const handleFilterChange = (filterValue) => {
    filterValue = filterValue == "Science" ? "Sci" : filterValue == "Social Studies" ? "S.S": filterValue //To match the filter Value with the value in state
    setSelectedFilters((prevFilters) => {
      //State to manage all the filter conditions
      const updatedFilters = prevFilters.includes(filterValue)
        ? prevFilters.filter((filter) => filter !== filterValue) // Remove filter if already selected
        : [...prevFilters, filterValue]; // Add filter if not already selected
  
      let classFilters = []; // Variable for class filter
      let subjectFilters = []; // Variable for subject filter
      // Separate class and subject filters
      updatedFilters.forEach((filter) => {
        if (!isNaN(parseInt(filter)) || filter === "K") {
          // Check if filter is a class (number or 'K')
          classFilters.push(filter);
        } else {
          // Otherwise, it's a subject filter
          subjectFilters.push(filter);
        }
      });
  
      // Filter the data based on class filters
      let filteredData = allData;
      if (classFilters.length > 0) {
        filteredData = filteredData.filter((item) =>
          classFilters.some((filter) => item.class.includes(filter))
        );
      }
  
      // Filter the data based on subject filters
      if (subjectFilters.length > 0) {
        filteredData = filteredData.filter((item) =>
          subjectFilters.some((filter) => item.subject.includes(filter))
        );
      }
  
      // Set the filtered data to cardData state
      setCardData(filteredData);
  
      return updatedFilters; // Return the updated filters
    });
  };
  

  return (
    <>
      <Filter handleFilterChange={handleFilterChange} />
      <SubjectFilter handleFilterChange={handleFilterChange} />
      <div
        style={{
          height: "auto",
          width: "85vw",
          margin: "auto",
          marginTop: "2rem",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {cardData.length > 0 ? ( // Show Cards Only If there is any data
          cardData.map((item) => {
            let i = 0;
            return (
              <div
                className="card mb-3"
                style={{
                  height: "17rem",
                  marginLeft: "1.5rem",
                  width: "240px",
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
              </div>
            );
          })
        ) : (
          <div
            style={{
              height: "50.5vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            No Data Found
          </div>
        )}
      </div>
    </>
  );
}
