import React from 'react'
import './programs.css'
import {programsData} from  "../../data/programsData.js"
import RightArrow from '../../assets/rightArrow.png'
export default function programs() {
  return (
    <div className="programs" id="programs">
        <div className="programsheader">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>


        </div>

<div className="programs-catogeries">

  {programsData.map((program)=>(
    <div className="categorie"> 
      {program.image}
      <span>{program.heading}</span>
      <span>{program.details}</span>
      <div className="joinnow">
        <span>Join now</span><img src={RightArrow} alt="" />
      </div>
    </div>
  ))}
</div>
    </div>

  )
}
