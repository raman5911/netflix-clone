const api = process.env.REACT_APP_API_KEY;

const request = {
    fetchNetflixOriginals: `/discover/tv?api_key=${api}&with_networks=213`,
    fetchTrendingNow: `/trending/all/week?api_key=${api}?language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${api}?language=en-US`,
    fetchAction: `/discover/movie?api_key=${api}&with_genres=28`,
    fetchComedy: `/discover/movie?api_key=${api}&with_genres=35`,
    fetchHorror: `/discover/movie?api_key=${api}&with_genres=27`,
    fetchDocumentaries: `/discover/movie?api_key=${api}&with_genres=99`
};

export default request;