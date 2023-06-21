import React from 'react'
import filter from '../../assets/filter.svg'
import cale from '../../assets/calendar-2.svg'
import doarrow from '../../assets/arrow-down-2.svg'
import './Dropdowns.css'

const Dropdowns = () => {
  return (
    <div className='Dropdowns'>
        <div className="drop">
            <img src={filter} alt="" />
            <p>Filter</p>
            <img src={doarrow} alt="" />
        </div>
        <div className="drop">
            <img src={cale} alt="" />
            <p>Today</p>
            <img src={doarrow} alt="" />
        </div>
    </div>
  )
}

export default Dropdowns