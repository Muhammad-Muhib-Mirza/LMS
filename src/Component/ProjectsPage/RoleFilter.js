import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import style from "../../Filter.module.css";

export default function IndustryFilter({ handleFilterChange }) {
  const subjects = [
    "Market Research",
    "Business Analysis",
    "Solution Design",
    "Solution Development",
    "Marketing & Sales",
  ];

  // Updated color map for roles
  const colorMap = {
    "Market Research": "#FFABAB",
    "Business Analysis": "#FF677D",
    "Solution Design": "#6B4226",
    "Solution Development": "#392F5A",
    "Marketing & Sales": "#61C0BF",
  };

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (filterValue) => {
    handleFilterChange(filterValue, "Role");
    setSelectedFilters((prev) =>
      prev.includes(filterValue)
        ? prev.filter((f) => f !== filterValue) // Remove if already selected
        : [...prev, filterValue] // Add filter if not selected
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
      {/* Toggle Button for the Role Filter */}
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
          borderRadius: "5px",
        }}
      >
        {isOpen ? "Hide Role Filter" : "Show Role Filter"}
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
                <h5 className="modal-title">Role Filter</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {subjects.map((subject) => (
                    <motion.div
                      key={subject}
                      className={`${style.filterBox} ${style.subjectBox}`}
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