import axios from "axios";
import request from "./requests";

const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGQ1Mzc4OGViYTBjYjllMmJkYTExM2U0MWVlMjk2OCIsInN1YiI6IjY1YzFmMjAwZWZlYTdhMDE4NDUyODM1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TQByOU83jqLw81gTpPmBo_qDkgqJNHY91qdVxIwT8Kc',
    }
});

export default instance;