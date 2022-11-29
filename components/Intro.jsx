import Image from 'next/image'
import React from 'react'
import { useContextState } from '../context/StateContext'
import pp from '../public/img/profile1.png'

const Intro = ({setPageIndex}) => {
  const {dark} = useContextState()

  return (
    <div className='intro'>
      <div className='desc'>
        <h6>Hi there,</h6>
        <h2>My name is <span>Karma Lama Ghising</span></h2>
        <h3>I'm a <span>Web Developer</span></h3>
        <p style={dark[5]}>JS and JS framework - library Angular, React, Next JS Developer with hands-on experience in identifying web-based user interactions along with designing & implementing highly-responsive user interface components by deploying React concepts.</p>

        <div className="btns">
          <button onClick={()=>setPageIndex(3)}>hireMe</button>
          <button onClick={()=>setPageIndex(2)}>myWorks</button>
        </div>
      </div>
      <div className="img">
        <Image src={pp} alt="" priority />
      </div>
    </div>
  )
}

export default Intro