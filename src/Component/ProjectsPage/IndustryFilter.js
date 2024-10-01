import { useState } from "react"
import style from "../../Filter.module.css";

export default function IndustryFilter({ handleFilterChange }) {
  const subjects = ['Health Care', 'Agriculture','Technology'];

  // Define a color map for different background colors
  const colorMap = {
    "Health Care": "#FFABAB",
    "Agriculture": "#FF677D",
    "Technology": "#6B4226"
  };

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleItemClick = (filterValue) => {
    handleFilterChange(filterValue,'Industry');
    setSelectedFilters((prev) =>
      prev.includes(filterValue)
        ? prev.filter((f) => f !== filterValue) // Remove if already selected
        : [...prev, filterValue] // Add filter if not selected
    );
  };

  return (
    <div style={{ width: '75vw', margin: 'auto', marginTop: '1rem', display: 'flex', flexWrap: 'wrap' }}>
      {subjects.map((subject) => (
        <div
          key={subject}
          className={`${style.filterBox} ${style.subjectBox}`}
          style={{
            backgroundColor: selectedFilters.includes(subject)
              ? colorMap[subject] // Apply color if selected
              : '#7B9DD4', // Default color if not selected
          }}
          onClick={() => handleItemClick(subject)} // Trigger filter change on click
        >
          {subject}
        </div>
      ))}
    </div>
  );
}
