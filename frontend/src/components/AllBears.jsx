import React, {useContext, useEffect} from "react";
import { MyContext } from "../context/context.js";
import axios from "axios";
import { NavLink } from "react-router-dom";

export const AllBeers = () => {
    const { beers, setBeers } = useContext(MyContext);
    useEffect(() => {
        axios
            .get("/beer/allbeers")
            .then((res) => {
                console.log(res.data);
                setBeers(res.data.data);
                console.log(beers);
            })
            .catch((err) => {
                console.log("All Beers Error", err);
            }
            );
    }, []);



    return (
        <>
          <div>
            <h1>Beers</h1>
          </div>
          <div>
            {beers.length > 0 ? (
              beers.map((beer) => {
                return (
                  <div key={beer._id}>
                    <h2>{beer.name}</h2>
                    <p>{beer.description}</p>
                    <p>{beer.abv}</p>
                    <p>{beer.brewerName}</p>
                  </div>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </>
      );
    };