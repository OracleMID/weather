import React from 'react'
import sunny from '../img/weather_img/clear_weather.png'
import partlyCloudy from '../img/weather_img/less_cloudy.png'
import overcast from '../img/weather_img/more_cloudy.png'
import fog from '../img/weather_img/full_cloudy.png'
import drizzle from '../img/weather_img/drizzle.png'
import rain from '../img/weather_img/sunny_rain.png'
import freezingRain from '../img/weather_img/snowy_rain.png'
import snowy from '../img/weather_img/snowy.png'
import rainshower from '../img/weather_img/heavyrain.png'
import snowshower from '../img/weather_img/heavysnow.png'
import thunderstorm from '../img/weather_img/thunderstorm.png'

const WeatherIMG = ({weathercode}) => {
    let weather_image = sunny
    if (weathercode == 0) {
        weather_image = sunny
    }
    else if (weathercode >= 1 & weathercode <= 2) {
        weather_image = partlyCloudy
    }
    else if (weathercode == 3 ) {
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
    else if (weathercode >= 66 & weathercode <= 67) {
        weather_image = freezingRain
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
        <><img src={weather_image} alt="" /></>
    )
}

export default WeatherIMG