import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ContentTypeSelector from "./ContentTypeSelector";
import { generateGenreDisplay } from "../helpers";
import {generateYearsDisplay} from "../helpers";
import MultiSelectDropDown from "./MultiSelectDropDown";


const Controls = ({
    genres,
    years,
    checkedGenres,
    setCheckedGenres,
    checkedYears,
    setCheckedYears,
    contentTypeSelected,
    setSelectedContentType,
    searchTerm,
    setSearchTerm,
  }) => {
   const [genreDisplay, setGenreDisplay] = useState("Genre");
   const [yearDisplay, setYearsDisplay] = useState("Year");
    useEffect(() => {
      setGenreDisplay(generateGenreDisplay(checkedGenres));
      setYearsDisplay(generateYearsDisplay(checkedYears));
    }, [checkedGenres, checkedYears]);
    const clearFilters = () => {
      setCheckedGenres([]);
      setCheckedYears([]);
      setSelectedContentType("");
      setSearchTerm("");
    };
    return (
      <div className="controls">
        <div className="content-filters">
          <div className="dropdown-filters">
            {genres.length > 0 && (
              <MultiSelectDropDown
              options={genres}
              selectedOptions={checkedGenres}
              setSelectedOptions={setCheckedGenres}
              dropDownDisplayText = {genreDisplay}
              />
            )}
            {years.length > 0 && (
              <MultiSelectDropDown
              options={years}
              selectedOptions={checkedYears}
              setSelectedOptions={setCheckedYears}
              dropDownDisplayText ={yearDisplay}
              />
            )}
          </div>
          <ContentTypeSelector
            contentTypeSelected={contentTypeSelected}
            setSelectedContentType={setSelectedContentType}
          />
        </div>
  
        <div className="search-clear">
          <div className="search-input-container">
            <input
              className="searchbar"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              type="text"
              placeholder="Search.."
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
  
          <button className="clear-filter" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>
    );
};

  export default Controls;