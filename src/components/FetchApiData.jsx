import React from "react";
import { useState, useEffect } from "react";

const FetchApiData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });

    
  }, []);

  return [data];
};

export default FetchApiData;