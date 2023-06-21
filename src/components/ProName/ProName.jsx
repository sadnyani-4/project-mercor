import React from 'react'
import './ProName.css'
import arrow from '../../assets/double-arrow-left-icon.svg'
import logo from '../../assets/logo.png'

const ProName = () => {
  return (
    <div className='ProName'>
        <div className="pro-logo">            
          <img src={logo} alt="" />
        </div>
        <h2>Project M.</h2>
        <div className="toggle">
            <img src={arrow} alt="arrow" />
        </div>
    </div>
  )
}

export default ProName