import Image from 'next/image'
import React from 'react'
import { useContextState } from '../context/StateContext'
import pp from '../public/img/profile1.png'
import {BsFacebook, BsLinkedin, BsBehance} from 'react-icons/bs'


const Intro = ({setPageIndex}) => {
  const {dark} = useContextState()

  return (
    <div className='intro'>
      <div className='desc'>
        <h4>Hi there,</h4>
        <h2>My name is <span>Karma Lama Ghising</span></h2>
        <h3>I'm a <span>UX/UI Designer & Frontend Developer</span></h3>
        <p style={dark[5]}>Web developement experience with proficient knowledge of entire software devlopment life cycle and React expertise Adept at using javaScript, CSS and HTML to design the user interface and deploy it effectively in applications. </p>

        <div className="btns">
          <button onClick={()=>setPageIndex(3)}>hireMe</button>
          <button onClick={()=>setPageIndex(2)}>myWorks</button>
        </div>

        <div className="socialMedia">
          <div>Get-together</div>
          <span>
            <a href="https://www.linkedin.com/in/karma-lama-0a2237235/" target="_blank" rel="noreferrer"><BsLinkedin className='linkedin'/></a>
            <a href="https://www.facebook.com/lama.kgt.99/" target="_blank" rel="noreferrer"><BsFacebook className='facebook'/></a>
            <a href="https://www.behance.net/swornimkarma" target="_blank" rel="noreferrer"><BsBehance className='behance'/></a>
          </span>
        </div>
      </div>
      <div className="img">
        <Image src={pp} alt="" priority />
      </div>
    </div>
  )
}

export default Intro