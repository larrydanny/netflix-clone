import React, { useState, useEffect } from "react";
import { TouchBallLoading } from "react-loadingg";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const renderDetails = () => {
    return (
      <>
        <h1 className="banner-title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <button className="banner-button">Play</button>
        <button className="banner-button">My List</button>
        <h1 className="banner-description">{truncate(movie.overview, 50)}</h1>
        <div className="banner-fade-bottom"></div>
      </>
    );
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("${baseImgUrl}/${movie.backdrop_path}")`
      }}
    >
      <div className="banner-contents">
        {!movie.title ? <TouchBallLoading /> : renderDetails()}
      </div>
    </header>
  );
}

export default Banner;
