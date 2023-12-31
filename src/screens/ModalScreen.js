import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NameJumpAnimation from "../NameJumpAnimation ";
import { API_KEY } from "../Requests";
import { closeModal } from "../features/userSlice";
import ReactPlayer from "react-player/youtube";





function ModalScreen() {
    const [loading, setLoading] = useState(false);
    const [trailers, setTrailers] = useState([]);
  
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.user.movie);
    const nameWords = ['N', 'E', 'T', 'F', 'L', 'I', 'X'];
  
    useEffect(() => {
      async function fetchTrailers() {
        setLoading(true);
        axios
          .get(`https://api.themoviedb.org/3/${(movie.media_type ? movie.media_type: 'movie')+"/"+movie.id}/videos?api_key=${API_KEY}`)
          .then((res) => {
            setTrailers(res.data.results);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
      }
  
      fetchTrailers();
    }, []);
  
    return (
      <div className="modal__player">
        <div className="modal" onClick={() => dispatch(closeModal())} />
        <div className="modal__screen">
          {loading ? (
            <div className="loading">
              <NameJumpAnimation nameWords={nameWords} />
            </div>
          ) : (
            <>
              {trailers && trailers.length > 0 ? (
                <div className="video__screen">
                <ReactPlayer 
                url={`https://www.youtube.com/embed/${trailers[0].key}`} 
                playing={true}
                controls={true}
                playsinline={true}
                width='100%'
                height='100%'
                />               
                </div>
              ) : (
               <div className="loading">No video available</div>
              )}
            </>
          )}
        </div>
        <button className="close__btn" onClick={() => dispatch(closeModal())}>X</button>
      </div>
    );
  }

  export default ModalScreen