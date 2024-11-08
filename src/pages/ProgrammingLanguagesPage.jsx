import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "../components/LanguageSelector";
import RepoTable from "../components/RepoTable";
import RepoNameSearch from "../components/RepoNameSearch";
import DateInput from "../components/DateInput";
import StarsInput from "../components/StarsInput";
import SortSelect from "../components/SortSelect";
import "../styles/programminglanguagepage.css";

const ProgrammingLanguagesPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState("");
  const [searchName, setSearchName] = useState("");
  const [date, setDate] = useState("2024-11-01");
  const [stars, setStars] = useState(5);
  const [sortOrder, setSortOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    if (language) {
      fetchLanguageData(
        language,
        searchName.trim(),
        date,
        stars,
        sortOrder,
        currentPage
      );
    }
  }, [language, searchName, date, stars, sortOrder, currentPage]);

  const fetchLanguageData = async (
    language,
    searchName,
    date,
    stars,
    sortOrder,
    page
  ) => {
    if (!stars) {
      console.error("Stars value is invalid.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const searchQuery = `${
        searchName ? `${searchName}+` : ""
      }language:${language.toLowerCase()}+created:>${date}+stars:>${stars}`;
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&order=${sortOrder}&page=${page}&per_page=${itemsPerPage}`
      );

      if (!response.ok) throw new Error("Error fetching data");
      const result = await response.json();
      setData(result.items);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLanguageChange = (e) => setLanguage(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleStarsChange = (e) => setStars(parseInt(e.target.value));
  const handleSortOrderChange = (e) => setSortOrder(e.target.value);
  const handleSearchName = (e) => setSearchName(e.target.value);
  const handleNextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const handlePreviousPage = () =>
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <div className="programming-languages-container">
      <LanguageSelector
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      <div className="filters">
        <RepoNameSearch
          searchName={searchName}
          onSearchName={handleSearchName}
        />
        <DateInput date={date} onDateChange={handleDateChange} />
        <StarsInput stars={stars} onStarsChange={handleStarsChange} />
        <SortSelect
          sortOrder={sortOrder}
          onSortOrderChange={handleSortOrderChange}
        />
      </div>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <>
          {error && <p className="error-text">{error}</p>}
          {data.length > 0 && <RepoTable data={data} />}
          <div className="pagination-buttons">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              Back
            </button>
            <button
              onClick={handleNextPage}
              disabled={data.length < itemsPerPage}
              className="pagination-btn"
            >
              Forward
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProgrammingLanguagesPage;
