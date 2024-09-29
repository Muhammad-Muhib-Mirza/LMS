import style from "../../Filter.module.css";

export default function Filter({ handleFilterChange, selectedFilters }) {
  return (
    <div style={{ width: '75vw', margin: 'auto', marginTop: '1rem', display: 'flex', flexWrap: 'wrap' }}>
      {['K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map((filterValue) => (
        <div
          key={filterValue}
          className={`${style.filterBox} ${selectedFilters.includes(filterValue) ? style.active : ''}`} // Add class if selected
          onClick={() => handleFilterChange(filterValue)}
        >
          {filterValue}
        </div>
      ))}
    </div>
  );
}
