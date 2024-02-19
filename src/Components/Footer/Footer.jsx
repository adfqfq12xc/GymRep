import React from 'react'
import Github from "../../assets/github.png"
import Instgram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"
import "./footer.css"


export default function Footer() {

  return (
    <div className="footercontainer" id="fid">
      <hr/>
      <div className='blur' style={{width:"22rem",height:"30rem",left:"15%"
      ,filter:"blur(200px)",background:"red"}}></div>
      <div className='blur ' style={{width:"22rem",filter:"blur(200px)",height:"30rem",position:"absolute",right:"15%",background:"red"}}></div>

      <div className="footer">
      <div className="sociallinks">
        <img src={Github} alt="" />
        <img src={Instgram} alt="" />
        <img src={LinkedIn} alt="" />
      </div>
      <div className="logo-f">
        <img src={Logo} alt="" />
      </div>
      </div>
    </div>
  )
}
