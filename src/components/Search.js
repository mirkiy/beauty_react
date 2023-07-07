import React, { useState } from "react";
import "./Search.css";

const Search = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const search = (event) => {
    event.preventDefault();
    onSearch(keyword);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className="Search">
      <form onSubmit={search}>
        <input type="search" value={keyword} onChange={handleKeywordChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
