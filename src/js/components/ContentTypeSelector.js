const ContentTypeSelector = ({ contentTypeSelected, setSelectedContentType }) => {
    return (
      <div className="content-selector">
        <input
          type="radio"
          id="radio-one"
          name="selection"
          value="movies"
          checked={contentTypeSelected === "movies"}
          onChange={(event) => setSelectedContentType(event.target.value)}
        />
        <label>Movies</label>
        <input
          type="radio"
          id="radio-two"
          name="selection"
          value="books"
          checked={contentTypeSelected === "books"}
          onChange={(event) => setSelectedContentType(event.target.value)}
        />
        <label>Books</label>
      </div>
    );
  };

  export default ContentTypeSelector;