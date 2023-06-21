import React from 'react'
import './Project.css'

const Project = () => {
  return (
    <div className='Project'>
        <div className="active">
            <div className="point green"></div>
            <h3>Mobile App</h3>
            <div className="dotdot prodot">...</div>
        </div>
        <div className="notactive">
            <div className="point orange"></div>
            <h3>Website Redesign</h3>
        </div>
        <div className="notactive">
            <div className="point purple"></div>
            <h3>Design System</h3>
        </div>
        <div className="notactive">
            <div className="point blue"></div>
            <h3>Wireframes</h3>
        </div>
    </div>
  )
}

export default Project