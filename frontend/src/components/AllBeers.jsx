import React, { useState, useEffect } from "react";
import axios from "axios";

export const AllBeers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("/beer/allbeers")
      .then((res) => {
        setBeers(res.data.data);
      })
      .catch((err) => {
        console.log("Error fetching beers", err);
      });
  }, []);

  return (
    <div>
      <h1>List of Beers</h1>
      <ul>
        {beers.map((beer) => (
          <li key={beer.id}>
            <h2>{beer.name}</h2>
            <p>{beer.description}</p>
            <p>{beer.abv}% ABV</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
