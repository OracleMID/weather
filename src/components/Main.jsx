import React from 'react'
import Weather from './weather/Weather'

const Main = () => {
    return (
        <section className="weather">
            <div className="container">
                <div className="weather_content">
                    <div className="block_weather">
                        <div className="weather_heading">
                            <a href="#">Россия</a> / <a href="#">Донецкая народная республика</a> / <a href="#">Енакиево</a>
                            <h2>Погода в Енакиево сегодня</h2>
                        </div>
                        <Weather/>
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