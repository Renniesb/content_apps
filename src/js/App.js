import { useState, useEffect } from "react";
import { fetchData } from "./api";
import { filterAndSortGenres } from "./helpers";
import ContentControls from "./components/ContentControls";
import Content from "./components/Content";

function App() {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [years, setYears] = useState([]);
  const [checkedGenres, setCheckedGenres] = useState([]);
  const [checkedYears, setCheckedYears] = useState([]);
  const [contentTypeSelected, setSelectedContentType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData()
      .then((responseData) => {
        const genreArrays = responseData.map((data) => data.genre);

        const sortedGenres = filterAndSortGenres(genreArrays);

        const years = responseData.map((data) => {
          return data.year;
        });
        const sortedYears = [...new Set(years)].sort(
          (a, b) => parseInt(a) - parseInt(b)
        );

        setData(responseData);
        setGenres(sortedGenres);
        setYears(sortedYears);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  const filters = {
    genres,
    years,
  };

  const selections = {
    checkedGenres,
    checkedYears,
    contentTypeSelected,
    searchTerm,
  };

  const selectionMethods = {
    setCheckedGenres,
    setCheckedYears,
    setSelectedContentType,
    setSearchTerm,
  };

  return (
    <div className="app">
      <div>
        <ContentControls
          allContent={data}
          {...filters}
          {...selections}
          {...selectionMethods}
        />
        <Content allContent={data} {...selections} />
      </div>
    </div>
  );
}

export default App;
