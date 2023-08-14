export function filterContent(
  content = [],
  checkedGenres = [],
  checkedYears = [],
  contentTypeSelected = "",
  searchTerm = ""
) {

  const filteredContent = content
    .filter((media) => {
      if (checkedGenres.length > 0) {
        return media.genre.some((genre) => checkedGenres.includes(genre));
      }
      return true;
    })
    .filter((media) => {
      if (checkedYears.length > 0) {
        return checkedYears.includes(media.year);
      }
      return true;
    })
    .filter((media) => {
        console.log("type", media.type)
      if (contentTypeSelected === "movies") {
        return media.type === "movie";
      }
      if (contentTypeSelected === "books") {
        return media.type === "book";
      }
      return true;
    })
    .filter((media) => {
      if (searchTerm === "") {
        return true;
      }
      return media.title.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));

    return filteredContent
}

export function filterAndSortGenres (arrays) {
  const combinedArray = [].concat(...arrays);

  const lowerCasedArray = combinedArray.map((str) => str.toLowerCase());

  const uniqueArray = [...new Set(lowerCasedArray)];

  const sortedArray = uniqueArray.sort();

  return sortedArray;
};