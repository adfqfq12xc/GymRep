import React, { useState } from 'react'
import './testim.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from "../../assets/leftArrow.png"
import RightArrow from "../../assets/rightArrow.png"
export default function Testim() {
    const [selected,setselected]=useState(0)
    const length=testimonialsData.length
  return (
    <div id='testimonials' className='testi'>
        <div className="leftt">
<span> Testimonials</span>
    <span className='stroke-text'> what they </span>
        <span> say about us</span>
        <span>{testimonialsData[selected].review}</span>
      <div>  <span style={{color:"var(--orange)"}}>{testimonialsData[selected].name}</span>-
        <span>{testimonialsData[selected].status}</span>
        </div>
        </div>
<div className="rightt">

<div></div>
   <div></div>
<img src={testimonialsData[selected].image} alt="" />
   

    <div className="arrows">

        <img src={leftArrow} onClick={()=>{
          setselected((prev)=>(prev-1+length)%length)
        }} alt="" />
        <img src={RightArrow} onClick={()=>{
          setselected((prev)=>(prev+1)%length)
        }} alt="" />
    </div>
    </div>
    </div>
  )
}
