import React from 'react'
import './Navbar.css'
import add from '../../assets/add-square.svg'
import Basic from '../Basic/Basic'
import Project from '../Project/Project'
import Thoughts from '../Thoughts/Thoughts'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <Basic/>
        <div className="projects">
            <div className="heading">
                <h4>MY PROJECTS</h4>
                <img className='heading' src={add} alt="" />
            </div>
            <Project/>
            <Thoughts/>
        </div>
    </div>
  )
}

export default Navbar