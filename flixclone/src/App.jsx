import React from 'react'

import "./App.css"

import Row from "./Row"
import Banner from './Banner'

import requests from './requests'

const App = () => {
  return (
    <div className="app"> 
      {/* navbar */}


      {/* banner */}

      <Banner />

      {/* diffcategories rows */}
      <Row title="ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTrending}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentariesMovies}/>
    </div>
  )
}

export default App
