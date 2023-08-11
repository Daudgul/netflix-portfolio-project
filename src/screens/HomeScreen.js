import React from "react";
import "./ModalScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import Row from "../Row";
import requests from "../Requests";
import {  useSelector } from "react-redux";
import axios from "axios";
import ModalScreen from "./ModalScreen";

function HomeScreen() {
  const showModal = useSelector((state) => state.user.showModal);
  return (
    <div className="homescreen">
      <Nav />

      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOrignials}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedayMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      {showModal && <ModalScreen />}
    </div>
  );
}

export default HomeScreen;




