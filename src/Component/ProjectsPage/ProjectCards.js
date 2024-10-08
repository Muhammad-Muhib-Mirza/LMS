import { useState } from "react";
import style from "../../Cards.module.css";
import Filter from "./Filter";
import SubjectFilter from "./SubjectFilter";
import IndustryFilter from "./IndustryFilter";
import RoleFilter from "./RoleFilter";

export default function ProjectCards() {
  let data = [
    {
      image: "/Card-Images/1727524311985.jpg",
      class: ["1", "2", "3", "4"],
      subject: ["Math", "Sci", "S.S"],
      role: [
        "Market Research",
        "Business Analysis",
        "Solution Design",
        "Solution Development",
        "Marketing & Sales",
      ],
      industry: ["Health Care", "Agriculture", "Technology"],
    },
    {
      image: "/Card-Images/1727524388090.jpg",
      class: ["1", "2"],
      subject: ["Math", "Sci"],
      role: ["Market Research", "Business Analysis"],
      industry: ["Health Care", "Agriculture"],
    },
    {
      image: "/Card-Images/1727524599284.jpg",
      class: ["2", "3"],
      subject: ["Math"],
      role: ["Solution Design"],
      industry: ["Health Care"],
    },
    {
      image: "/Card-Images/1727524696934.jpg",
      class: ["1"],
      subject: ["Math", "S.S"],
      role: ["Market Research", "Marketing & Sales"],
      industry: ["Agriculture"],
    },
    {
      image: "/Card-Images/1727524761887.jpg",
      class: ["1", "2"],
      subject: ["Math"],
      role: ["Solution Design", "Solution Development"],
      industry: ["Technology"],
    },
    {
      image: "/Card-Images/1727524857552.jpg",
      class: ["1"],
      subject: ["Math", "S.S"],
      role: ["Marketing & Sales"],
      industry: ["Health Care", "Technology"],
    },
    {
      image: "/Card-Images/1727524983003.jpg",
      class: ["1", "2", "3", "4"],
      subject: ["S.S"],
      role: ["Business Analysis"],
      industry: ["Agriculture", "Technology"],
    },
    {
      image: "/Card-Images/1727525069461.jpg",
      class: ["K", "1", "2", "3"],
      subject: ["Math"],
      role: ["Solution Design"],
      industry: ["Health Care", "Technology"],
    },
  ];
  const [allData, setAllData] = useState(data);
  const [cardData, setCardData] = useState(data);
  const [subjectfilter, setSubjectFilter] = useState([]);
  const [industryFilter, setIndustryFilter] = useState([]);
  const [roleFilter, setRoleFilter] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [classFilter, setClassFilter] = useState([]);
  const handleFilterChange = (filterValue, filterFrom) => {
    if (filterFrom == "Class") {
      console.log("Filter Called")
      setClassFilter((prevFilters) => {
        // Manage all the filter conditions
        const updatedFilters = prevFilters.includes(filterValue)
          ? prevFilters.filter((filter) => filter !== filterValue) // Remove filter if already selected
          : [...prevFilters, filterValue]; // Add filter if not already selected
        let filteredData = applyFilter(updatedFilters, filterFrom);
        setCardData(filteredData);

        return updatedFilters; // Return the updated filters
      });
    } else if (filterFrom == "Subject") {
      // To match the filter value with the value in state
      filterValue =
        filterValue === "Science"
          ? "Sci"
          : filterValue === "Social Studies"
          ? "S.S"
          : filterValue;
      setSubjectFilter((prevFilters) => {
        // Manage all the filter conditions
        const updatedFilters = prevFilters.includes(filterValue)
          ? prevFilters.filter((filter) => filter !== filterValue) // Remove filter if already selected
          : [...prevFilters, filterValue]; // Add filter if not already selected

        // Variables for class, subject, industry, and role filters
        let filteredData = applyFilter(updatedFilters, filterFrom);

        // Set the filtered data to cardData state
        setCardData(filteredData);

        return updatedFilters; // Return the updated filters
      });
    } else if (filterFrom == "Industry") {
      setIndustryFilter((prevFilters) => {
        // Manage all the filter conditions
        const updatedFilters = prevFilters.includes(filterValue)
          ? prevFilters.filter((filter) => filter !== filterValue) // Remove filter if already selected
          : [...prevFilters, filterValue]; // Add filter if not already selected

        // Variables for class, subject, industry, and role filters
        let filteredData = applyFilter(updatedFilters, filterFrom);
        // Set the filtered data to cardData state
        setCardData(filteredData);

        return updatedFilters; // Return the updated filters
      });
    } else {
      setRoleFilter((prevFilters) => {
        // Manage all the filter conditions
        const updatedFilters = prevFilters.includes(filterValue)
          ? prevFilters.filter((filter) => filter !== filterValue) // Remove filter if already selected
          : [...prevFilters, filterValue]; // Add filter if not already selected

        // Variables for class, subject, industry, and role filters
        let filteredData = applyFilter(updatedFilters, filterFrom);
        // Set the filtered data to cardData state
        setCardData(filteredData);

        return updatedFilters; // Return the updated filters
      });
    }
  };
  const applyFilter = (updatedFilter, filterFrom) => {
    let filteredData = allData;
    if (filterFrom == "Class") {
      if (updatedFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          updatedFilter.some((filter) => item.class.includes(filter))
        );
      }
      if (subjectfilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          subjectfilter.some((filter) => item.subject.includes(filter))
        );
      }
      if (industryFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          industryFilter.some((filter) => item.industry.includes(filter))
        );
      }
      if (roleFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          roleFilter.some((filter) => item.role.includes(filter))
        );
      }
      return filteredData;
    } else if (filterFrom == "Subject") {
      if (updatedFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          updatedFilter.some((filter) => item.subject.includes(filter))
        );
      }
      if (classFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          classFilter.some((filter) => item.class.includes(filter))
        );
      }
      if (industryFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          industryFilter.some((filter) => item.industry.includes(filter))
        );
      }
      if (roleFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          roleFilter.some((filter) => item.role.includes(filter))
        );
      }
      return filteredData;
    } else if (filterFrom == "Industry") {
      if (updatedFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          updatedFilter.some((filter) => item.industry.includes(filter))
        );
      }
      if (subjectfilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          subjectfilter.some((filter) => item.subject.includes(filter))
        );
      }
      if (classFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          classFilter.some((filter) => item.class.includes(filter))
        );
      }
      if (roleFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          roleFilter.some((filter) => item.role.includes(filter))
        );
      }
      return filteredData;
    } else {
      if (updatedFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          updatedFilter.some((filter) => item.role.includes(filter))
        );
      }
      if (subjectfilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          subjectfilter.some((filter) => item.subject.includes(filter))
        );
      }
      if (classFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          classFilter.some((filter) => item.class.includes(filter))
        );
      }
      if (industryFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          industryFilter.some((filter) => item.industry.includes(filter))
        );
      }
      return filteredData;
    }
  };
  return (
    <>
    <div style={{display:'flex',width:'90vw',margin:'auto',justifyContent:'space-evenly',marginTop:'2rem',flexDirection:'column'}}>
    <Filter handleFilterChange={handleFilterChange} />
      <SubjectFilter handleFilterChange={handleFilterChange} />
      <IndustryFilter handleFilterChange={handleFilterChange} /> 
      <RoleFilter handleFilterChange={handleFilterChange} />
    </div>
      
      <div
        style={{
          height: "auto",
          width: "85vw",
          margin: "auto",
          marginTop: "2rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        {cardData.length > 0 ? ( // Show Cards Only If there is any data
          cardData.map((item) => {
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
          })
        ) : (
          <div
            style={{
              height: "53vh",
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
