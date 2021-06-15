import React, { useState, useEffect } from "react";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
// import { CircleToBlockLoading } from "react-loadingg";
import axios from "./axios";
import "./Row.css";

const baseImgUrl = "https://image.tmdb.org/t/p/original";
const defaultImgUrl =
  "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      setMovies([]);
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = movie => {
    const title = movie.name || movie.title;
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(title)
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(error => console.log(error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  };

  return (
    <div>
      {/* {!movies.length && <CircleToBlockLoading />} */}
      <h2 className="row-title">{title}</h2>

      <div className="row">
        <div className="row-posters">
          {movies.length &&
            movies.map(movie => (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row-poster ${isLargeRow && `row-poster-larger`}`}
                src={
                  !movie.poster_path
                    ? defaultImgUrl
                    : `${baseImgUrl}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                      }`
                }
                alt={movie.name || movie.title}
              />
            ))}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
