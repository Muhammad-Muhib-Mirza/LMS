import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import style from "../../Filter.module.css";
import { useParams } from "react-router-dom";

export default function SubjectFilter({ handleFilterChange }) {
  const { typeName } = useParams(); // Get the search query from the URL
  const subjects = ['Math', 'Ela', 'Social Studies', 'Science'];

  const colorMap = {
    "Math": "#FFABAB",
    "Ela": "#FF677D",
    "Social Studies": "#6B4226",
    "Science": "#392F5A",
  };

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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
      {/* Toggle Button for the Subject Filter */}
      <motion.button
        className={style.filterToggle}
        onClick={() => setIsOpen(!isOpen)}
        initial={{ backgroundColor: "#3498db" }}
        animate={{ backgroundColor: isOpen ? "#2980b9" : "#3498db" }}
        transition={{ duration: 0.3 }}
        style={{
          marginBottom: "1rem",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "10px",
        }}
      >
        {isOpen ? "Hide Subject Filter" : "Show Subject Filter"}
      </motion.button>

      {/* Bootstrap Modal Structure */}
      {isOpen && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Subject Filter</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                >
                  {subjects.map((subject) => (
                    <motion.div
                      key={subject}
                      className={`${style.filterBox} ${style.subjectBox}`}
                      style={{
                        backgroundColor: selectedFilters.includes(subject)
                          ? colorMap[subject]
                          : '#7B9DD4',
                        cursor: 'pointer',
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
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bootstrap modal-backdrop */}
      {isOpen && <div className="modal-backdrop fade show"></div>}
    </>
  );
}
