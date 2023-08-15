const TwoOptionsSelector = ({
  optionSelected,
  setSelectedOption,
  option1,
  option2,
  title1,
  title2,
}) => {
  return (
    <div className="option-selector">
      <input
        type="radio"
        id="radio-one"
        name="selection"
        value={option1}
        checked={optionSelected === option1}
        onChange={(event) => setSelectedOption(event.target.value)}
      />
      <label>{title1}</label>
      <input
        type="radio"
        id="radio-two"
        name="selection"
        value={option2}
        checked={optionSelected === option2}
        onChange={(event) => setSelectedOption(event.target.value)}
      />
      <label>{title2}</label>
    </div>
  );
};

export default TwoOptionsSelector;
