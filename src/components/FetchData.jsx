import React from "react";
import { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <p>Total items: {data.length}</p>
    </div>
  );
};

export default FetchData;
