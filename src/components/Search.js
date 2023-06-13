import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  let [keyword, setKeyword] = useState("");

  const search = (event) => {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  };

  const handleKeyWordChange = (event) => {
        setKeyword(event.target.value)
  };

  return (
    <div className="Search">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyWordChange} />
      </form>
    </div>
  );
};
export default Search;
