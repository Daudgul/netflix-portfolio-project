import React, { useEffect, useState } from 'react';
import './HomeScreen.css';
import Nav from '../Nav';
import Banner from '../Banner';
import Row from '../Row';
import requests, { API_KEY } from '../Requests';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../features/userSlice';
import axios from 'axios';


function HomeScreen() {
  const showModal = useSelector(state => state.user.showModal)
  return (
    <div className='homescreen'>
          <Nav/>  

          <Banner/>   

          <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOrignials} isLargeRow={true}/>   
          <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>   
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>   
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>   
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedayMovies}/>   
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>   
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>   
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>   
          { showModal && <Modal/>} 
    </div>
  )
}

export default HomeScreen


function Modal() {
  const [loading, setLoading] = useState(false)
  const [trailers, setTrailers] = useState([]);

  const dispatch = useDispatch()
  const movie_id = useSelector(state => state.user.movieId)
  console.log(movie_id, 'now')


  useEffect(() => {
    setLoading(true)
    const fetchTrailers = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, {
          params: {
            api_key: API_KEY,
          },
        });

        if (response.data.results.length > 0) {
          setTrailers(trailers[0]); // Select the first trailer
          console.log(trailers,'treil')
        }else{
          setTrailers(response.data.results);
          console.log(trailers,'trei2')
          
        }
        console.log(trailers,'treil2')

      } catch (error) {
        console.error('Error fetching trailers:', error);
      } finally{
        setLoading(false)
      }
    };

    fetchTrailers();
  }, [movie_id]);

  // const film = `https://www.youtube.com/embed/${trailers.key}`
  // console.log(film,'i am film')

  if(loading){
    console.log('i got fired')
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Loading..</div>
  }
  return(
      <div className='modal__player'>
       <div className='modal' onClick={() => dispatch(closeModal())} />
       <div className="modal__screen">
       <h2>{trailers?.name}</h2>
        <iframe
          title={trailers?.name}
          className='video__screen'
          src={`https://www.youtube.com/embed/${trailers?.key}`}
          allowFullScreen
        ></iframe>
       </div>
      </div>
  )
}