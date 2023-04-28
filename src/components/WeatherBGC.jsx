import React from 'react'
import sunny from '../img/weather_bgc/clear-sky.jpg'
import partlyCloudy from '../img/weather_bgc/cloudy-sky.jpg'
import overcast from '../img/weather_bgc/overcast.jpg'
import fog from '../img/weather_bgc/fog-sky.jpg'
import drizzle from '../img/weather_bgc/drizzle.jpg'
import rain from '../img/weather_bgc/rain.jpg'
import snowy from '../img/weather_bgc/snowfall.jpg'
import rainshower from '../img/weather_bgc/rainshower.jpg'
import snowshower from '../img/weather_bgc/blizzard.jpg'
import thunderstorm from '../img/weather_bgc/thunderstorm.jpg'

const WeatherBGC = ({ weathercode }) => {
    let weather_image = sunny
    if (weathercode == 0) {
        weather_image = sunny
    }
    else if (weathercode >= 1 & weathercode <= 2) {
        weather_image = partlyCloudy
    }
    else if (weathercode == 3) {
        weather_image = overcast
    }
    else if (weathercode >= 45 & weathercode <= 48) {
        weather_image = fog
    }
    else if (weathercode >= 51 & weathercode <= 55) {
        weather_image = drizzle
    }
    else if (weathercode >= 61 & weathercode <= 65) {
        weather_image = rain
    }
    else if (weathercode >= 71 & weathercode <= 77) {
        weather_image = snowy
    }
    else if (weathercode >= 80 & weathercode <= 82) {
        weather_image = rainshower
    }
    else if (weathercode >= 85 & weathercode <= 86) {
        weather_image = snowshower
    }
    else if (weathercode >= 95 & weathercode <= 99) {
        weather_image = thunderstorm
    }
    return (
        <><img className='current_bg' src={weather_image} alt="" /></>
    )
}
export default WeatherBGC