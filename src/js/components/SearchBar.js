import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({setSearchTerm, searchTerm}) => (
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
)

export default SearchBar;