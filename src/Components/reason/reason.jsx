import React from 'react'
import './reason.css'
import image1 from "../../assets/image1.png"
import image4 from "../../assets/image4.png"
import image3 from "../../assets/image3.png"
import image2 from "../../assets/image2.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"

export default function reason() {
  return (
    <div id='why-us' className="reasons">
<div className="left">

<img src={image1} alt="" />
<img src={image2} alt="" />
<img src={image3} alt="" />
<img src={image4} alt="" />

</div>
<div className="right">
  <span>
    Some reasons</span>
    <div>
    <span className='stroke-text'>why </span>
    <span>Choose us</span>
    </div>
<div className='details'>
<div><img src={tick} alt=""></img><span>over 1400 coaches</span></div>
<div><img src={tick} alt="" /><span>train smarter and faster than befor</span></div>
<div><img src={tick} alt="" /><span>1 free program for new members</span></div>
<div><img src={tick} alt="" /><span>reliable partners</span></div>
</div>
<span style={{color:"var(--gray)",fontWeight:"normal"}}>Our partners</span>
<div className="partners">
  <img src={nb} alt="" />
  <img src={adidas} alt="" />
  <img src={nike} alt="" />
  </div>
</div>
    </div>
  )
}
