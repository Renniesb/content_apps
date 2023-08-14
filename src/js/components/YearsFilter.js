import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


const YearsFilter = ({ years, checkedYears, setCheckedYears }) => {
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
  
    const handleYearsListChange = (year) => {
      if (checkedYears.includes(year)) {
        setCheckedYears(
          checkedYears.filter((selectedYear) => selectedYear !== year)
        );
      } else {
        setCheckedYears([...checkedYears, year]);
      }
    };
  
    return (
      <div
        ref={dropdownRef}
        className={`dropdown ${isDropdownOpen ? "open" : ""}`}
      >
        <div className="dropdown-toggle" onClick={toggleDropdown}>
          {checkedYears.length === 0 && "YEAR"}
          {checkedYears.length === 1 && "YEAR (1)"}
          {checkedYears.length > 1 && `YEAR (${checkedYears.length})`}
          <FontAwesomeIcon icon={faChevronDown} style={{ color: "#808080" }} />
        </div>
        <div className="dropdown-list">
          {years.map((year) => (
            <label key={year}>
              <input
                type="checkbox"
                value={year}
                checked={checkedYears.includes(year)}
                onChange={() => handleYearsListChange(year)}
              />
              {year}
            </label>
          ))}
        </div>
      </div>
    );
  };

  export default YearsFilter;
