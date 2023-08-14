import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const GenreFilter = ({ genres, checkedGenres, setCheckedGenres }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGenreListChange = (genre) => {
    if (checkedGenres.includes(genre)) {
      setCheckedGenres(
        checkedGenres.filter((selectedGenre) => selectedGenre !== genre)
      );
    } else {
      setCheckedGenres([...checkedGenres, genre]);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className={`dropdown ${isDropdownOpen ? "open" : ""}`}
    >
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        {checkedGenres.length === 0 && "GENRE"}
        {checkedGenres.length === 1 && "1 GENRE"}
        {checkedGenres.length > 1 && `${checkedGenres.length} GENRES`}
        <FontAwesomeIcon icon={faChevronDown} style={{ color: "#808080" }} />
      </div>
      <div className="dropdown-list">
        {genres.map((genre) => (
          <label key={genre}>
            <input
              type="checkbox"
              value={genre}
              checked={checkedGenres.includes(genre)}
              onChange={() => handleGenreListChange(genre)}
            />
            {genre.toUpperCase()}
          </label>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;