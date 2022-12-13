import React, { lazy, Suspense, useState } from 'react'
import { GrReactjs } from 'react-icons/gr'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaJsSquare } from 'react-icons/fa'
import {FaFigma} from 'react-icons/fa'
import { urlFor } from '../lib/client'
import { useContextState } from '../context/StateContext'

const Project = lazy(()=>import('./Project'))


const Portfolio = ({ projects }) => {
  const { dark } = useContextState();
  const [btnValue, setBtnValue] = useState("react");
  const [openImg, setOpenImg] = useState(false);
  const [fullImg, setFullImg] = useState("");

  const tags = [
    { id: 0, name: "UX/UI", key: "ui", icon: <FaFigma/>, active: "active0"},
    { id: 1, name: "React JS", key: "react", icon: <GrReactjs />, active: "active1" },
    { id: 2, name: "Next JS", key: "next", icon: <TbBrandNextjs />, active: "active2" },
    { id: 3, name: "Vanilla JS", key: "vanilla", icon: <FaJsSquare />, active: "active4" },
  ]

  const filterProjects = projects.filter(({ group }) => group === btnValue)

  return (
    <div className='portfolio'>
      <div className='head'>
        <div className="heading">my<span>Portfolio</span></div>
        <div className="line" />
      </div>
      <div className="title" style={dark[1]}>
        <h3>My Last Projects</h3>
        <div className="tabs">
          {tags.map(tag => <button key={tag.id} className={tag.key == btnValue ? tag.active : ""} onClick={() => setBtnValue(tag.key)}>{tag.icon}{tag.name}</button>)}
        </div>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Project filterProjects={ filterProjects} setFullImg={setFullImg} setOpenImg={setOpenImg} dark={dark} />
      </Suspense>

      {openImg && <div className='uiFullScreen'>
        <img src={urlFor(fullImg)} alt="" /> 
        <button className='closeBtn' onClick={()=>setOpenImg(false)}>Close</button>
        </div>
      }
    </div>
  )
}

export default Portfolio