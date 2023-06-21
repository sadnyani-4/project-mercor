import React from 'react'
import './Thoughts.css'
import bulb from '../../assets/lamp-on.png'

const Thoughts = () => {
  return (
    <div className='Thoughts'>
        <div className="union">
            <div className="bulb">
                <div className="blur">
                    <div className="overlay"></div>
                    <img src={bulb} alt="" className="additional-blur" />
                </div>
                <div className="tcontent">
                    <h5>Thoughts time</h5>
                    <p>We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
                    <button className='write'>Write a message</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Thoughts