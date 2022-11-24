import React from 'react'
import {GiVibratingSmartphone} from 'react-icons/gi'
import { SiGmail } from 'react-icons/si'
import { FaViber } from 'react-icons/fa'
import {BsInfoCircle} from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='head'>
        <div className="heading">contact<span>Me</span></div>
        <div className="line" />
      </div>
      <div className="box">
        <div className="card">
          <GiVibratingSmartphone className="icon" />
          <span>988-0819-993</span>
        </div>
        <div className="card">
          <SiGmail className="icon" />
          <span>ghisingkarma740@gmail.com</span>
        </div>
        <div className="card">
          <FaViber className="icon"/>
          <span>988-0819-993</span>
        </div>
      </div>
      <div className="note">
        <p><BsInfoCircle/>I'm available for Freelance too !</p>
      </div>
    </div>
  )
}

export default Contact