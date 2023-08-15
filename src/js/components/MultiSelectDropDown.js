import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


const MultiSelectDropDown = ({ options, selectedOptions, setSelectedOptions, dropDownDisplayText }) => {
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
  
    const handleSelectedOptionsChange = (option) => {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(
          selectedOptions.filter((selectedOption) => selectedOption !== option)
        );
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    };
  
    return (
      <div
        ref={dropdownRef}
        className={`dropdown ${isDropdownOpen ? "open" : ""}`}
      >
        <div className="dropdown-toggle" onClick={toggleDropdown}>
          {dropDownDisplayText}
          <FontAwesomeIcon icon={faChevronDown} style={{ color: "#808080" }} />
        </div>
        <div className="dropdown-list">
          {options.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleSelectedOptionsChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    );
  };

  export default MultiSelectDropDown;
