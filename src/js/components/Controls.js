import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import GenreFilter from './GenreFilter';
import YearsFilter from "./YearsFilter";
import ContentTypeSelector from "./ContentTypeSelector";

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
              <GenreFilter
              genres={genres}
              checkedGenres={checkedGenres}
              setCheckedGenres={setCheckedGenres}
              />
            )}
            {genres.length > 0 && (
              <YearsFilter
              years={years}
              checkedYears={checkedYears}
              setCheckedYears={setCheckedYears}
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