import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from"../../assets/hero_image.png"
import hero_image_back from"../../assets/hero_image_back.png"
import heart from"../../assets/heart.png"
import Calories from"../../assets/calories.png"
import {motion} from 'framer-motion'
export default function Hero() {
const transition={type:'spring',duration:3}
return (
<div className="hero" >
<div className='blur' style={{width:"22rem",height:"30rem",left:"0"}}></div>

  <div className="leftside">
     <Header/>
    <div className="thebestad">
      <motion.div
        initial={{left:'238px'}}
        whileInView={{left:'8px'}}
        transition={transition}>
      </motion.div>

        <span>the best fitness club in the town  </span>
    </div>

    <div className="herotext">
      <div>
        <span className='stroke-text'>Shape </span>
        <span>your </span><tr/>
        <span>Ideal body</span>
      </div>
      <div>
        <span>in here we will help you to shape and build  your ideal body and live up your 
          your life to fullest
            </span>
      </div>
    </div>
    <div className="figures">
      
        <div><span>+140</span><span>expert coachs</span></div>
        <div><span>+978</span><span>members joines</span></div>
        <div><span>+50</span><span>fitness programs</span></div>
        
    </div>
    <div className='herobuttons'>
   <button className='btn'>
  Get Started
  </button>
  <button className='btn'>
Learn More
  </button>
    </div>
  </div>
  <div className="rightside"> 
     <button className='btn'>Join Now</button>
     <motion.div className="heart-rate"
        initial={{right:'-1rem'}}
        whileInView={{right:'4rem'}}
        transition={transition}>
      <img src={heart} alt="" />
      <span>heart rate</span>
      <span>116 bpm</span>
     </motion.div>
     <img src={hero_image} className='hero_image' alt="" />
     <motion.img 
             initial={{right:'11rem'}}
             whileInView={{right:'20rem'}}
             transition={transition}  
     src={hero_image_back} className='hero_image_back' alt=""/>
  <div className="calories">
<img src={Calories} alt="" />
<div>
<span>Calories burned</span>
<span> 220kcal</span> 
</div>
  </div>
   </div>
    </div>
  )
}
