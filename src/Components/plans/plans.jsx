import React from 'react'
import './plans.css'
import {plansData} from "../../data/plansData"
import tick from "../../assets/tick.png"

export default function plans() {
  return (
    <div id='plans' className='planscontaier' >
      <div className='blur' style={{width:"22rem",height:"30rem",left:"0"}}></div>
      <div className='blur ' style={{width:"22rem",height:"30rem",position:"absolute",right:"0"}}></div>

        <div className="programsheader" style={{gap:"2rem"}}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITH</span>
        </div>
        <div className='plans'>
  {plansData.map((p)=>(
        <div className='planmap'>
        {p.icon}
        <span>{p.name}</span>
        <span>${p.price}</span>
        <div className='feuaturee'>
            {p.features.map((feauture)=>(
                <div className='planfeature'>
             <img src={tick} alt="" /> 
              <span>{feauture}</span>
             </div>
            ))}
        </div>
        <div><span>See more benefits-</span>
        </div>
        <button className='btn'>Join now</button>


        </div>
        
   
   ))}
        </div>
    </div>
  
    
  )
}
