import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, setMovie } from './features/userSlice';

function Row({title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([])
    const base_url = 'https://image.tmdb.org/t/p/original/';
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData()
    }, [fetchUrl])

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row__posters">
           {
            movies?.map(
                (movie) =>
                 (isLargeRow && movie.poster_path || !isLargeRow && movie.backdrop_path) && (                    
                   <img 
                     onClick={() => {
                      var val = movie;
                      if(isLargeRow){
                         val = {
                          ...movie,
                          media_type: 'tv'
                         }
                      }
                      dispatch(openModal())
                      dispatch(setMovie(val))
                     }}
                     className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                     key={movie.id}
                     src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                     }`}
                     alt={movie.name}
                      />
                        
                )
            )}
            </div>
    </div>
  )
}

export default Row