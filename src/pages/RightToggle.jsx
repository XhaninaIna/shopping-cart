import React, { useState, useEffect } from "react";

import "../styles/homepage.css";

export default function RigthToggle() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchAuthorNameData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://openlibrary.org/search.json?q=crime&fields=key,title,author_name,editions,first_publish_year&limit=5&page=1&sort=new"
        );
        if (!response.ok) throw new Error("Error fetching left API data");
        const result = await response.json();
        setData(result.docs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAuthorNameData();
  }, []);
  return (
    <>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index} style={{ color: "white" }}>
              {item.author_name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
