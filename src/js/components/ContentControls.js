import { useState, useEffect } from "react";
import TwoOptionsSelector from "./TwoOptionsSelector";
import { generateGenreDisplay } from "../helpers";
import {generateYearsDisplay} from "../helpers";
import MultiSelectDropDown from "./MultiSelectDropDown";
import TwoOptionsSelector from "./TwoOptionsSelector";
import SearchBar from './SearchBar';

const ContentControls = ({
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
          <TwoOptionsSelector
            optionSelected={contentTypeSelected}
            setSelectedOption={setSelectedContentType}
            option1="movies"
            option2="books"
            title1="Movies"
            title2="Books"
          />
        </div>
        <div className="search-clear">
          <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
          <button className="clear-filter" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>
    );
};

  export default ContentControls;