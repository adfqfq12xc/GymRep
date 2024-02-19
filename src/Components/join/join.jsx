import React, { useRef } from 'react'
import "./join.css"
import emailjs from"@emailjs/browser"
export default function Join() {
    const form =useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_h2h2p64', 'template_sq15lx7', form.current, {
            publicKey: '1mQxxT21-e5EUjJnd',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div className='join'>
        <div className="left-j">
            <hr />
            <div><span className='stroke-text' >READY TO </span>
                <span> LEVEL UP </span>
            </div>
            <div><span>YOUR BODY</span>
            <span className='stroke-text'> WITH US</span></div>
        </div>
        <div className="right-j">
            <form ref={form} className='email-container'
             onSubmit={sendEmail} >

                <input type='email' name="user-email" 
                placeholder='Enter your Email adress '/>
                <button className='btn'>Join How</button>
            </form>
        </div>
    </div>
  )
}
