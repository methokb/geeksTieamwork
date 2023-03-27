import React from 'react'
import Navbar from '../components/Navbar'
import "../styles/Home.css"
import Model from './Model'
import GTA from "../assets/CTA.svg"
import faebook from "../assets/facebook (1) 1.svg"
import youtube from "../assets/YOUtube.svg"
import instagram from "../assets/Instagram.svg"
import Elipse from "../assets/Ellipse 7.svg"
const Home = () => {
  return (
    <div>
      <Navbar />
      <Model />

      <div className="container_home">
        <div className="component_home">
          <div className="text_home">
            <h1 className='h1_home'>УСПЕЙТЕ КУПИТЬ <br /><br /> <p className='p_home'>ROBINSON  R44, R66</p> </h1>
            <p className='p_home_'>Желающие приобрести вертолет могут оформить заказ по действующим <br />
              ценам до очередного ежегодного повышения цен в январе 2021 года</p>
            <img src={GTA} alt="" />
            <div className="vec_footer">
              <p className='footer_p'></p>
              <img className='image' src={faebook} alt="" />
              <img className='image' src={youtube} alt="" />
              <img className='image' src={instagram}  alt="" />
            </div>
            <img className='elipse' src={Elipse} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home