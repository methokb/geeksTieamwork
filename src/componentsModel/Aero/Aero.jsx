import React from 'react'
import './Aero'
import foto from '../image/Сравнение.svg'
import fotoq from '../image/R44 raven I 1.png'
const Aero = () => {
  return (
    <div className='Aero'>
        <div className='AeroWindow'>
          <div className='aero1'>
            <p>Robinson R44</p>
            <img src={foto} alt="" className='aero1statik' />
            <img src={fotoq} alt="" className='aero2statik'/>
          </div>
          <div className='cardAero1'>
            <p><img src="" alt="" /> 240 км/ч</p>
            <br/>
            <p><img src="" alt="" /> 3+1 пасс</p>
            <br/>
            <p><img src="" alt="" /> 650 км</p>
            <br/>
            <div>
            <button type='button' className='btnAero1'>Подробнее</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Aero