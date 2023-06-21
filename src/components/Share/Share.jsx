import React from 'react'
import './Share.css'
import mem from '../../assets/profile-2user.svg'
import stack from '../../assets/Group 600.svg'
import gal from '../../assets/Group 611.svg'

const Share = () => {
  return (
    <div className='Share'>        
        <div className="sh">
            <img src={mem} alt="" />
            <p>Share</p>
        </div>
        
        <div className="vertical-line"></div>

        <div className="other">
            <div className="style stack">
                <img src={stack} alt="" />
            </div>
            <div className="style gallery">
                <img src={gal} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Share