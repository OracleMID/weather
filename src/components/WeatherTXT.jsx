import React from 'react'

const WeatherTXT = ({ weathercode }) => {
    let weather_text = "Солнечно, без осадков"
    if (weathercode == 0) {
        weather_text = "Солнечно, без осадков"
    }
    else if (weathercode >= 1 & weathercode <= 2) {
        weather_text = "Облачно, без осадков"
    }
    else if (weathercode == 3) {
        weather_text = "Пасмурно, без осадков"
    }
    else if (weathercode >= 45 & weathercode <= 48) {
        weather_text = "Туман, без осадков"
    }
    else if (weathercode >= 51 & weathercode <= 55) {
        weather_text = "Пасмурно, небольшой дождь"
    }
    else if (weathercode >= 61 & weathercode <= 65) {
        weather_text = "Пасмурно, дождь"
    }
    else if (weathercode >= 66 & weathercode <= 67) {
        weather_text = "Пасмурно, холодный дождь"
    }
    else if (weathercode >= 71 & weathercode <= 77) {
        weather_text = "Пасмурно, снегопад"
    }
    else if (weathercode >= 80 & weathercode <= 82) {
        weather_text = "Пасмурно, ливень"
    }
    else if (weathercode >= 85 & weathercode <= 86) {
        weather_text = "Пасмурно, метель"
    }
    else if (weathercode >= 95 & weathercode <= 99) {
        weather_text = "Гроза"
    }
    return (
        <><p className="weathercode_info">{weather_text}</p></>
    )
}

export default WeatherTXT