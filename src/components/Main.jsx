import React, { useState, useEffect } from 'react'
import WeatherWeekly from './weather/WeatherWeekly'
import WeatherDaily from './weather/WeatherDaily'
import WeatherTenDays from './weather/WeatherTenDays'
import WeatherThreeDays from './weather/WeatherThreeDays'
import WeatherCurrent from './weather/WeatherCurrent'

const Main = ({ lat, lng, formatted, active }) => {
    return (
        <section className="weather">
            <div className="container">
                <div className="weather_content">
                    <div className="block_weather">
                        <div className="weather_heading">
                            <a href="#">{formatted}</a>
                            <h2>Погода в {formatted.slice(0, formatted.indexOf(',') != -1 ? formatted.indexOf(',') : formatted.length)} сегодня</h2>
                        </div>
                        <WeatherWeekly active={active == 'weekly' ? 'active' : ''} lat={lat} lng={lng} />
                        <WeatherDaily active={active == 'daily' ? 'active' : ''} lat={lat} lng={lng} />
                        <WeatherThreeDays active={active == 'threeDays' ? 'active' : ''} lat={lat} lng={lng} />
                        <WeatherTenDays active={active == 'tenDays' ? 'active' : ''} lat={lat} lng={lng} />
                        <WeatherCurrent active={active == 'current' ? 'active' : ''} lat={lat} lng={lng} />
                        <div className="after_weather">
                            <div className="button_block">
                                <button className="weather_parameters">
                                    <i className="fa-solid fa-sliders"></i>
                                    Набор данных
                                </button>
                                <button className="recension">
                                    Оставить отзыв
                                </button>
                            </div>
                            <a href="#">Распечатать...</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main