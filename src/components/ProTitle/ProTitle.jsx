import React from 'react'
import './ProTitle.css'
import pen from '../../assets/arrow-square-up.svg'
import link from '../../assets/link.svg'

const ProTitle = () => {
  return (
    <div className='ProTitle'>
        <h1>Mobile App</h1>
        <div className="main-icons">
            <img src={pen} alt="" />
            <img src={link} alt="" />
        </div>
    </div>
  )
}

export default ProTitle