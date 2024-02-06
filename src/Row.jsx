import React from 'react';
import { useState, useEffect } from 'react';
import instance from './axios';
import './Row.css';

function Row({ title, fetchURL, isPoster }) {

    const [movies, setMovies] = useState([]);

    const fetchData = async () => {
        const response = await instance.get(fetchURL);
        setMovies(response.data.results);
        console.log(response.data.results);
    }
  
    useEffect(()=> {
        fetchData();
    }, [fetchURL]);

    const baseURL = "https://image.tmdb.org/t/p/original";

    return (
    <div className='row'>
        <h2 className='title'>{ title }</h2>

        <div className='img_container'>
            {movies.map((record) => {
                return <img className='img' key={record.id} src={`${baseURL}${isPoster? record.poster_path : record.backdrop_path}`} />
            })}
        </div>
    </div>
  )
}

export default Row;