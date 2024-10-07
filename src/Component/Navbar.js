import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Use navigate instead of window.location for routing

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      return; // Prevent empty searches
    }
  
    // Check if the current page includes "/type"
    if (window.location.pathname.includes("/type")) {
      // Dispatch the search event if already on the "/type" page
      const searchEvent = new CustomEvent("searchQueryEvent", {
        detail: searchQuery,
      });
      window.dispatchEvent(searchEvent); // Dispatch the custom event with the search query
    } else {
      // Navigate to the "/type" page and pass searchValue via state
      navigate("/type/browselesson", { state: { searchValue: searchQuery } });
    }
  };
  
  
  return (
    <nav
      className="navbar"
      style={{ padding: 0, backgroundColor: "#0072CE", height: "4rem" }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          style={{ color: "white", fontWeight: "bold" }}
          href="/"
        >
          <img src="/Logos/Navbarlogo.png" alt="" />
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
            <i className="bi bi-search" onClick={handleSearch}></i>
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
              color: "white",
            }}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          <button
            className="btn btn-outline-success"
            style={{
              backgroundColor: "#E67500",
              color: "whitesmoke",
              marginRight: "0.5rem",
            }}
            onClick={(e)=>{
              e.preventDefault()
              window.location.href = "/signup"
            }}
          >
            Sign Up
          </button>
          <button
            className="btn btn-outline-success"
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              border: "none",
            }}
            onClick={(e)=>{
              e.preventDefault()
              window.location.href = "/login"
            }}
          >
            Login
          </button>
        </form>
      </div>
    </nav>
  );
}
