import React from 'react';
import { useState, useEffect } from 'react';
import instance from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({ title, fetchURL, isPoster }) {

    const [movies, setMovies] = useState([]);

    const fetchData = async () => {
        const response = await instance.get(fetchURL);
        setMovies(response.data.results);
        // console.log(response.data.results);
    }
  
    useEffect(()=> {
        fetchData();
    }, [fetchURL]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    const baseURL = "https://image.tmdb.org/t/p/original";

    const [trailerURL, setTrailerURL] = useState("");
    const [currentID, setCurrentID] = useState("");

    const handleClick = (movie) => {
        if(trailerURL && movie.id == currentID) {
            setTrailerURL("");
        }

        else {
            console.log(movie);
            movieTrailer(null, { tmdbId: movie?.id || "", id: true, videoType: movie.media_type!=undefined ? null : 'tv' })
            .then((response) => {
                console.log(response);

                if(response == null) {
                    alert("No trailers were found!");
                    return;
                }

                setTrailerURL(response);
                setCurrentID(movie.id);
            })
            .catch((error) => { console.log("error: ", error) });
        }
    }

    return (
    <div className='row'>
        <h2>{ title }</h2>

        <div className='img_container'>
            {movies.map((record) => {
                return <img  key={record.id} className={`img ${(!isPoster) && 'thumbnail'}`} onClick={()=> { handleClick(record) }} src={`${baseURL}${isPoster? record.poster_path : record.backdrop_path}`} />
            })}
        </div>

        {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  )
}

export default Row;