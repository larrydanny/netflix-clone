const API_KEY = "c8c9bfdbacfa175d638f15a555fcd057";

const requests = {
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&primary_release_year=2020&sort_by=vote_average.desc`,
  fetchTrendingNow: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopularMovies: `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=en-US`
};

export default requests;
