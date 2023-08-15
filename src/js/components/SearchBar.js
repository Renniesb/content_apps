import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Fuse from "fuse.js";

const SearchBar = ({ allContent, setSearchTerm, searchTerm }) => {
  const [results, setResults] = useState([]);
  const titles = allContent.map((media) => {
    return media.title;
  });

  const fuseOptions = {
    keys: ["name"],
    threshold: 0.3,
  };

  const fuse = new Fuse(titles, fuseOptions);

  const handleFuzzySearch = (newQuery) => {
    const searchResults = fuse.search(newQuery);
    setResults(searchResults);
  };

  return (
    <div className="search-input-container">
        <input
          className="searchbar"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
            handleFuzzySearch(event.target.value);
          }}
          type="text"
          placeholder="Search.."
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <div className="searchbar-list">
                {results.map((result, index) => {
                    return <li key={index}>{result.item}</li>
                })}
        </div>
    </div>
  );
};

export default SearchBar;
