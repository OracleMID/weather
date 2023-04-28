import React, { useState, useEffect } from 'react'
import logo from '../img/gismeteo_logo.png'

const Navbar = ({ getPlace, toggleActive }) => {
    const [query, setQuery] = useState('')
    // useEffect(() => {
    //     getPlace(query)
    //     return () => {
    //     }
    // }, [query])
    return (
        <nav>
            <div className="container">
                <div className="nav_container">
                    <img src={logo} alt="" />
                    <ul className="nav_list">
                        <li className="active">Погода</li>
                        <li>Новости</li>
                        <li>Карты</li>
                        <li>Информеры</li>
                        <li>Приложения</li>
                    </ul>
                </div>
            </div>
            <div className="subnav">
                <div className="container">
                    <div className="subnav_container">
                        <div className="input_field">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <form onSubmit={(e) => { e.preventDefault(); getPlace(query) }
                            }>
                                <input value={query} onChange={(e) => { setQuery(e.target.value) }} type="text" />
                            </form>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <ul className="search_list">
                            <li onClick={() => { toggleActive('current') }}>Сейчас</li>
                            <li onClick={() => { toggleActive('daily') }}>Сегодня</li>
                            <li onClick={() => { toggleActive('threeDays') }}>3 дня</li>
                            <li onClick={() => { toggleActive('weekly') }}>Неделя</li>
                            <li onClick={() => { toggleActive('tenDays') }}>10 дней</li>
                            <li>Ещё</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar