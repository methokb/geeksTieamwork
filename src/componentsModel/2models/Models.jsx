import React from 'react'
import "../2models/Models"
import Aero from '../Aero/Aero'
import Aero2 from '../Aero2/Aero2'
import foro from '../image/1 76.png'

const Models = () => {

return (
    <div className='Models'>
        <div className='foto'>
        <img src={foro} alt="" className='fotoo' />
        </div>
        <div>
            <Aero/>, <Aero2/>
        </div>
    </div>
)
}

export default Models