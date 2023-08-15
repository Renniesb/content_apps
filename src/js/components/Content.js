import { filterContent } from "../helpers";

const Content = ({
  allContent,
  checkedGenres,
  checkedYears,
  contentTypeSelected,
  searchTerm,
}) => {
  const filteredContent = filterContent(
    allContent,
    checkedGenres,
    checkedYears,
    contentTypeSelected,
    searchTerm
  );

  return (
    <div className="grid-container">
      {filteredContent.length > 0 && (
        <p className="results-text">Results: {filteredContent.length}</p>
      )}
      {filteredContent.length === 0 && (
        <div className="content-container">
          <b>
            No Matching Results: Press <u>Clear Filters</u> to clear all filters
            and try again
          </b>
        </div>
      )}
      {filteredContent.map((content) => {
        return (
          <div className="content-container" key={content.title}>
            <img
              className="image"
              src={content.poster}
              alt={`${content.title}`}
              onError={(event) => {
                event.target.src =
                  "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
                event.onerror = null;
              }}
            ></img>
            <p className="title-text">
              {content.title} ({content.year})
            </p>
            <p className="genres">Genres: {content.genre.join(", ")}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
