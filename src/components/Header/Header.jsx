import React from 'react'
import './Header.css'
import ProName from '../ProName/ProName'
import mag from '../../assets/magnifying glass.svg'
import cal from '../../assets/calendar.svg'
import mes from '../../assets/message.svg'
import noti from '../../assets/notification.svg'
import img1 from '../../assets/image 1.png'
import darrow from '../../assets/arrow-down.svg'

const Header = () => {
  return (
    <div className='Header'>
        <ProName/>
        <div className="search">
            <img src={mag} alt="" />
            <input type="search" className="searchb" name="search" placeholder='Search for anything...'></input>
        </div>
        <div className="rest-header">
            <div className="icons">
                <img src={cal} alt="" />
                <img src={mes} alt="" />
                <img src={noti} alt="" />
            </div>
            <div className="per">
                <div className="per-info">
                    <div className="name">Anima Agrawal</div>
                    <div className="location">U.P, India</div>
                </div>
                <div className="per-pic">
                    <img src={img1} alt="" />
                </div>
                <img className='darrow' src={darrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header