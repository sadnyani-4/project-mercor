import React from 'react'
import './ProInvite.css'
import invite from '../../assets/add-square-purple.svg'
import p1 from '../../assets/Ellipse 12.png'
import p4 from '../../assets/Ellipse 14.png'
import p3 from '../../assets/Ellipse 15.png'
import p2 from '../../assets/Ellipse 13.png'

const ProInvite = () => {
  return (
    <div className='ProInvite'>
        <img className='proinvite' src={invite} alt="" />
        <p>Invite</p>
        <div className="people">
            <img src={p1} alt="" />
            <img src={p2} alt="" />
            <img src={p3} alt="" />
            <img src={p4} alt="" />
            <div className="more">
                <p>+2</p>
            </div>
        </div>
    </div>
  )
}

export default ProInvite