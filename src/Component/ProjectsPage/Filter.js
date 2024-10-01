import style from "../../Filter.module.css";
import { useState } from "react";

export default function Filter({ handleFilterChange }) {
  const classes = ['K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  
  // Define a color map for different background colors
  const colorMap = {
    'K': '#4defd6', 
    '1': '#FFABAB',
    '2': '#FFC3A0',
    '3': '#FF677D',
    '4': '#D4A5A5',
    '5': '#392F5A',
    '6': '#31A2AC',
    '7': '#61C0BF',
    '8': '#6B4226',
    '9': '#D9BF77',
    '10': '#ACD8AA',
    '11': '#FFD31D',
    '12': '#42d7d2',
  };

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleItemClick = (filterValue) => {
    handleFilterChange(filterValue,'Class');
    setSelectedFilters((prev) =>
      prev.includes(filterValue) ? prev.filter((f) => f !== filterValue) : [...prev, filterValue] //If Same Filter Exists then Remove it from the selected State
    );
  };

  return (
    <div style={{ width: '75vw', margin: 'auto', marginTop: '1rem', display: 'flex', flexWrap: 'wrap' }}>
      {classes.map((filterValue) => (
        <div
          key={filterValue}
          className={`${style.filterBox}`}
          style={{
            backgroundColor: selectedFilters.includes(filterValue) ? colorMap[filterValue] : '#7B9DD4',
          }}
          onClick={() => handleItemClick(filterValue,"Class")}
        >
          {filterValue}
        </div>
      ))}
    </div>
  );
}
