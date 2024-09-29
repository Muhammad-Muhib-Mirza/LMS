import style from "../../Filter.module.css";

export default function SubjectFilter() {
  return (
    <div style={{width:'75vw',margin:'auto',marginTop:'1rem',display:'flex',flexWrap:'wrap'}}>
        <div className={`${style.filterBox} ${style.subjectBox}`}>
            Math
        </div>
        <div className={`${style.filterBox} ${style.subjectBox}`}>
            Ela
        </div>
        <div className={`${style.filterBox} ${style.subjectBox}`}>
            Social Studies
        </div>
        <div className={`${style.filterBox} ${style.subjectBox}`}>
            Science
        </div>
        </div>
  )
}