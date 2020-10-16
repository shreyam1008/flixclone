import React from 'react'

import Row from "./Row"

import requests from './requests'

const App = () => {
  return (
    <div>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>


    </div>
  )
}

export default App
