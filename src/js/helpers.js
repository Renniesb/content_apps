export function filterContent(allContent, checkedGenres, checkedYears, contentTypeSelected, searchTerm) {
  
  // Create Sets for faster lookups of checked genres and years 
  // Array.includes() has a time complexity o(n) Set.has() has a time complexity o(1)
  const checkedGenresSet = new Set(checkedGenres);
  const checkedYearsSet = new Set(checkedYears);

  return allContent.filter(media => {
    if (checkedGenres.length > 0 && !media.genre.some(genre => checkedGenresSet.has(genre))) {
      return false;
    }

    if (checkedYears.length > 0 && !checkedYearsSet.has(media.year)) {
      return false;
    }

    if (contentTypeSelected === "movies" && media.type !== "movie") {
      return false;
    }

    if (contentTypeSelected === "books" && media.type !== "book") {
      return false;
    }

    if (searchTerm && !media.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    return true;
  }).slice().sort((a, b) => a.title.localeCompare(b.title));
}


export function filterAndSortGenres (arrays) {
  const combinedArray = [].concat(...arrays);

  const lowerCasedArray = combinedArray.map((str) => str.toLowerCase());

  const uniqueArray = [...new Set(lowerCasedArray)];

  const sortedArray = uniqueArray.sort();

  return sortedArray;
};

export function generateGenreDisplay(checkedGenres){
  if(checkedGenres.length === 0)
    return "GENRE"
  if(checkedGenres.length === 1)
    return "1 GENRE"
  return `${checkedGenres.length} GENRES`
}

export function generateYearsDisplay(checkedYears){
  if(checkedYears.length === 0)
    return "YEAR";
  if(checkedYears.length === 1)
    return "YEAR (1)"
  return `YEAR (${checkedYears.length})`
};