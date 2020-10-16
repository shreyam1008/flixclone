const API_KEY = "43bbcd5a5cc0c93679fefe0899614809"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movies/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_generes=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_generes=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_generes=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_generes=10749`,
    fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_generes=99`,
}

export default requests