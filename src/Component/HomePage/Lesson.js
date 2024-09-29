export default function Lesson() {
  return (
    <div
      style={{
        width: "100vw",
        height: "82vh",
        backgroundColor:'#5FC6CD',
        display: "flex",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          margin: "auto",
          backgroundImage: "url('/hero-image.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", 
          display:'flex',
          alignItems:'flex-end',
          justifyContent:'center'
        }}
      >
        <a href="/type/browselessons" style={{backgroundColor:'#E67500',padding:'8px 8px 8px 8px',cursor:'pointer',color:'white',fontWeight:'700',borderRadius:'5px',marginBottom:'4%',marginRight:'1rem'}} >Browse Lessons</a>
      </div>
      <div
        style={{
          height: "100%",
          width: "20%",
          backgroundImage: "url('/header-books-clock.png')",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat", 
        }}
      ></div>
    </div>
  );
}
