import React from 'react'

import "./App.css"

import Row from "./Row"
import Banner from './Banner'

import requests from './requests'

const App = () => {
  return (
    <div>
      {/* navbar */}


      {/* banner */}

      <Banner />

      {/* diffcategories rows */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTrending}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentariesMovies}/>
    </div>
  )
}

export default App
