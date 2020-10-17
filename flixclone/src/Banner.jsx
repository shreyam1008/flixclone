import React, {useState, useEffect} from 'react'
import axios from './axios'
import requests from './requests'

const Banner = () => {
    
    const [movie, setMovie] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals)

            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.length -1)
                ]
            )
            console.log(movie)

        }
        fetchData()
        
    }, [])
    return (
        <header>
            heeader

           {/* banner */}
            {/* with bg image */}


            {/* title */}

            {/* two div buttons */}

            {/* description
             */}
            
        </header>
    )
}

export default Banner
