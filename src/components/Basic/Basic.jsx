import React from 'react'
import './Basic.css'
import home from '../../assets/category.svg'
import nmes from '../../assets/nav message.svg'
import task from '../../assets/task-square.svg'
import mem from '../../assets/profile-2user.svg'
import set from '../../assets/setting-2.svg'

const Basic = () => {
  return (
    <div className='Basic'>
        <div className="bnav home">
            <img className='nav-img' src={home} alt="" />
            <h3>Home</h3>
        </div>
        <div className="bnav messages">
            <img className='nav-img' src={nmes} alt="" />
            <h3>Messages</h3>
        </div>
        <div className="bnav tasks">
            <img className='nav-img' src={task} alt="" />
            <h3>Tasks</h3>
        </div>
        <div className="bnav members">
            <img className='nav-img' src={mem} alt="" />
            <h3>Members</h3>
        </div>
        <div className="bnav settings">
            <img className='nav-img' src={set} alt="" />
            <h3>Settings</h3>
        </div>
    </div>
  )
}

export default Basic