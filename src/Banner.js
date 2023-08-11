import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios'
import requests from './Requests'
import { useDispatch } from 'react-redux'
import { openModal, setMovie } from './features/userSlice';

function Banner() {
  const dispatch = useDispatch()

    const[movies, setMovies] = useState([])
    useEffect(() => {
      async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOrignials);
        setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
        return request
      }

      fetchData()
    },[])
    console.log(movies, 'movie')

    function truncate(string, n){
        return string?.length > n ? string.substr(0,n - 1) + '...' : string
    }
    function handleClick() {
       const movie = {
        ...movies,
        media_type: 'tv'
       }
            dispatch(openModal())
            dispatch(setMovie(movie))
           
    }

  return (
    <header className='banner' style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`, 
        backgroundSize: 'cover',
        backgroundPosition: "center center"
    }}>
        <div className="banner__contents">
            <h1 className="banner__title">{movies?.title || movies?.name || movies?.orignal_name}</h1>
            <div className="banner__buttons">
                <button className='banner__button'  onClick={handleClick}>Play</button>
                <button className='banner__button' onClick={handleClick}>! More Info</button>
            </div>
            <h1 className="banner__description">{truncate(movies?.overview,150)}</h1>
        </div>
        <div className="banner--fadeBotton"/>
    </header>
  )
}

export default Banner