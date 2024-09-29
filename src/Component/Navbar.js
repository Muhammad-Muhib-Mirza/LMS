export default function Navbar() {
  return (
    <nav
      className="navbar"
      style={{ padding: 0, backgroundColor: "#0072CE", height: "4rem" }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          style={{ color: "white", fontWeight: "bold" }}
        >
          NextLesson
        </a>
        <form className="d-flex" role="search">
          <span
            className="input-group-text"
            id="basic-addon1"
            style={{
              boxShadow: "2px 2px 2px rgba(0,0,0,0.2)",
              border: "none",
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
              zIndex: "1000",
              backgroundColor: "#0069AB",
              color: "white",
            }}
          >
            <i className="bi bi-search"></i>
          </span>
          <input
            className="form-control me-2 navsearch"
            type="search"
            placeholder="Search Lesson Library"
            aria-label="Search"
            style={{
              width: "55vw",
              border: "none",
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
              backgroundColor: "#0069AB",
              boxShadow: "2px 2px 2px rgba(0,0,0,0.2)",
              color:'white'
            }}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            style={{
              backgroundColor: "#E67500",
              color: "whitesmoke",
              marginRight: "0.5rem",
            }}
          >
            Sign Up
          </button>
          <button
            className="btn btn-outline-success"
            type="submit"
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              border: "none",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </nav>
  );
}
