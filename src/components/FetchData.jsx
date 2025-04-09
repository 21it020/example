import React from "react";
import FetchApiData from "./FetchApiData";

const FetchData = () => {

  const [data] = FetchApiData("https://jsonplaceholder.typicode.com/posts");
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
