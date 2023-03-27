import React from 'react'
import "../styles/Navbar.css"
import langue from "../assets/Language.svg"
import sravnenie from "../assets/Сравнение.svg"
import vector from "../assets/Vector (1).svg"
import Logo from "../assets/Logo (2).svg"
import burger from "../assets/Group 19 (1).svg"
import { Link } from 'react-router-dom'

const Navbar = () => {
    console.log('jhfkj', langue)
    return (
        <div className='navbar_container'>
            <div className="navbar_content">
                <div className="neit">
                    <img className='burgir' src={burger} alt="" />
                </div>
                <div className="navbar">
                <img src={Logo} alt="" />
                    <ul className='ul_navbar'>
                        <li>
                            <Link to="/model"> Модели</Link>
                            </li>
                        <li>
                           <Link to="/obzor">Обзор вертолетов</Link> 
                            </li>
                        <li>О компании</li>
                        <li>Преимущества</li>
                        <li>Калькулятор</li>
                        <li>Услуги</li>
                        <li>Новости</li>
                    </ul>
                    <img className='btn' src={langue} alt="" />
                    <img src={sravnenie} alt="" />
                    <img src={vector} alt="" />
                </div>


            </div>
        </div>

    )
}

export default Navbar