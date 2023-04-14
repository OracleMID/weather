import React, { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Main from './components/Main'
import './style.css'
function App() {
  let [active, setActive] = useState('daily')
  function toggleActive(value) {
    setActive(value)
  }
  const geoApi = '870873bcca2f48c3aa705fdbda101d52'
  const [data, setData] = useState({ status: { code: 400 }, results: [{ geometry: { "lat": 50.9775106, "lng": 11.3285424 }, formatted: "Енакиево, Донецкая область, Украина" }] })

  const getPlace = (placeName) => {
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${placeName}&key=${geoApi}`)
      .then(response => response.json())
      .then(response => {
        if (response) {
          if (response.status.code == 200 && response.results.length) {
            setData(response)
          }
        }
      })
  }
  return (
    <div className="App">
      <Navbar toggleActive={toggleActive} getPlace={getPlace} />

      <Main active={active} formatted={data.results[0].formatted}{...data.results[0].geometry} />
    </div>
  );
}


export default App;
