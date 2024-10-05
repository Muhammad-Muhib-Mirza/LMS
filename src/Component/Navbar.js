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

    if (window.location.pathname.includes("/type")) {
      // We're already on the "/type" page, perform any search logic directly here
      // This allows you to call a function from the "/type" component
      const searchEvent = new CustomEvent("searchQueryEvent", {
        detail: searchQuery,
      });
      window.dispatchEvent(searchEvent); // Dispatch a custom event with the search query
    } else {
      // Navigate to the "/type" route with the search query in the URL
      navigate(`/type/${searchQuery}`);
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
