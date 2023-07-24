import React, { useState } from "react";
import "./Search.css";

const Search = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const search = (event) => {
    event.preventDefault();
    onSearch(keyword);
    console.log(keyword)
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className="Search">
      <form onSubmit={search}>
        <input type="search" className="input" value={keyword} onChange={handleKeywordChange} placeholder="  type..."/>
        <button type="submit" className="btn-submit">search</button>
      </form>
    </div>
  );
};

export default Search;
