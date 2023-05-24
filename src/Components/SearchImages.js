import React, { useEffect, useState } from "react";
import axios from "axios";
const SearchImages = ({ addImages }) => {
  let [searchTerm, setSearchTerm] = useState("lion");
  //   console.log("AccessKey:", process.env.REACT_APP_ACCESS_KEY);
  useEffect(() => {
    getImages();
  }, []);
  function getImages() {
    axios
      .get("https://api.unsplash.com/search/photos/", {
        params: {
          client_id: process.env.REACT_APP_ACCESS_KEY,
          query: searchTerm,
        },
      })
      .then((Response) => addImages(Response.data.results))
      .catch((err) => console.log(err));
  }
  //If we do with fetch:
  //   function getImages1() {
  //     fetch("https://api.unsplash.com/search/photos/", {
  //       params: {
  //         client_id: process.env.REACT_APP_ACCESS_KEY,
  //         query: searchTerm,
  //       },
  //     })
  //       .then((response) => console.log(response.json()))
  //       .then((data) => console.log(data.results,data.status))
  //       .catch((err) => console.log(err));
  //   }
  function Reset() {
    addImages([]);
    setSearchTerm("");
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search Images"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <button onClick={getImages}>search</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};
export default SearchImages;
