import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import style from "../../Filter.module.css";
import { useParams } from "react-router-dom";

export default function SubjectFilter({ handleFilterChange,reset }) {
  const { typeName } = useParams(); // Get the search query from the URL
  const subjects = ['Math', 'Ela', 'Social Studies', 'Science','Physics'];

  const colorMap = {
    "Math": "#FFABAB",
    "Ela": "#FF677D",
    "Social Studies": "#6B4226",
    "Science": "#392F5A",
    "Physics" : "#DB2064"
  };

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    if(reset){
      setSelectedFilters([])
    }
  },[reset])
  useEffect(()=>{
    if (typeName) {
      if(subjects.includes(typeName)){
        setSelectedFilters([typeName])
        handleFilterChange(typeName, "Subject");
      }
    }
    const handleSearchQueryEvent = (event) => {
      if(subjects.includes(event.detail)){
        setSelectedFilters([event.detail])
        handleFilterChange(event.detail, "Subject");
      }
    };

    window.addEventListener("searchQueryEvent", handleSearchQueryEvent);

    return () => {
      window.removeEventListener("searchQueryEvent", handleSearchQueryEvent); // Clean up event listener
    };
  },[])

  const handleItemClick = (filterValue) => {
    handleFilterChange(filterValue, 'Subject');
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
      <div
                  className={style.subjectContainer}
                >
                  {subjects.map((subject) => (
                    <motion.div
                      key={subject}
                      className={`${style.filterBox} ${style.subjectBox}`}
                      style={{
                        backgroundColor: selectedFilters.includes(subject)
                          ? colorMap[subject]
                          : '#7B9DD4',
                          color: selectedFilters.includes(subject) ? "white" : "black" 
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
