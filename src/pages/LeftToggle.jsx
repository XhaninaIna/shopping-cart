import React, { useState, useEffect } from "react";
import "../styles/homepage.css";
export default function LeftToggle() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchRespositoriesNameData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://api.github.com/search/repositories?q=language:javascript+created:%3E2024-11-01&sort=stars&order=desc"
        );
        if (!response.ok) throw new Error("Error fetching left API data");
        const result = await response.json();
        setData(result.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRespositoriesNameData();
  }, []);
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((items, index) => (
            <li key={index} style={{ color: "white" }}>
              {items.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
