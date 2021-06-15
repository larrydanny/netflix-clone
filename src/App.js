import React from "react";
import Row from "./Row";
import Navbar from "./Navbar";
import Banner from "./Banner";
import requests from "./requests";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        isLargeRow
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrendingNow} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Popular Movies" fetchUrl={requests.fetchPopularMovies} />
      {/* <Row title="Action Movies" fetchUrl={requests.fetchTrendingNow} /> */}
      {/* <Row title="Comedy Movies" fetchUrl={requests.fetchTrendingNow} /> */}
      {/* <Row title="Horror Movies" fetchUrl={requests.fetchTrendingNow} /> */}
      {/* <Row title="Romance Movies" fetchUrl={requests.fetchTrendingNow} /> */}
      {/* <Row title="Documentaries" fetchUrl={requests.fetchTrendingNow} /> */}
    </div>
  );
}

export default App;
