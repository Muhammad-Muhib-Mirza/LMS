import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import style from "../../Filter.module.css";
import { useParams } from "react-router-dom";

export default function IndustryFilter({ handleFilterChange }) {
  const subjects = ["Health Care", "Agriculture", "Technology"];
  const { typeName } = useParams(); // Get the search query from the URL

  const colorMap = {
    "Health Care": "#FFABAB",
    "Agriculture": "#FF677D",
    "Technology": "#6B4226",
  };

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    if (typeName) {
      if(subjects.includes(typeName)){
        setSelectedFilters([typeName])
        handleFilterChange(typeName, "Industry");
      }
    }
    const handleSearchQueryEvent = (event) => {
      if(subjects.includes(event.detail)){
        setSelectedFilters([event.detail])
        handleFilterChange(event.detail, "Industry");
      }
    };

    window.addEventListener("searchQueryEvent", handleSearchQueryEvent);

    return () => {
      window.removeEventListener("searchQueryEvent", handleSearchQueryEvent); // Clean up event listener
    };
  },[])

  const handleItemClick = (filterValue) => {
    handleFilterChange(filterValue, "Industry");
    setSelectedFilters((prev) =>
      prev.includes(filterValue)
        ? prev.filter((f) => f !== filterValue)
        : [...prev, filterValue]
    );
  };

  // Close modal on pressing Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap",width:'75vw',margin:'auto',justifyContent:'flex-start' }}>
                  {subjects.map((subject) => (
                    <motion.div
                      key={subject}
                      className={`${style.filterBox} ${style.industryBox}`}
                      style={{
                        backgroundColor: selectedFilters.includes(subject)
                          ? colorMap[subject]
                          : "#7B9DD4",
                        cursor: "pointer",
                        margin: "5px",
                        borderRadius: "8px",
                        textAlign: "center",
                        fontSize: "18px",
                        padding: "10px 20px",
                      }}
                      onClick={() => handleItemClick(subject)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {subject}
                    </motion.div>
                  ))}
                </div>
    </>
  );
}
