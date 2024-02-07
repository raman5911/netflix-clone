import React, { useEffect, useState } from 'react';
import instance from './axios';
import './Banner.css';

function Banner({ fetchURL }) {

    const [movie, setMovie] = useState({});

    const fetchData = async () => {
        const response = await instance.get(fetchURL);
        
        const randNum = Math.floor(Math.random() * response.data.results.length - 1);
        setMovie(response.data.results[randNum]);
    }

    useEffect(() => {
        fetchData();
        console.log(movie);
    }, [])

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

  return (
    <header className='banner_header' style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }}>
        <div className="banner_content">
            <h2 className="title">{movie.name || movie.title || movie.original_name}</h2>

            <button className='btn'>Play</button>
            <button className='btn'>Info</button>

            <p className="description">{truncate(movie.overview, 150)}</p>
        </div>

        <div className="fade_bottom"></div>
    </header>
  )
}

export default Banner;