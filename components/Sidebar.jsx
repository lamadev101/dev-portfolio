import React, { useTransition } from 'react'
import logo from '../public/img/logo.svg';
import {RiHomeHeartLine} from 'react-icons/ri'
import {MdOutlineDesignServices} from 'react-icons/md'
import {SiPolymerproject} from 'react-icons/si'
import {SiMinutemailer} from 'react-icons/si'
import Image from 'next/image';
import { useContextState } from '../context/StateContext';

const navItems = [
  {id: 0, name: 'Home', icon: <RiHomeHeartLine/>},
  {id: 1, name: 'Services', icon: <MdOutlineDesignServices/>},
  {id: 2, name: 'Portfolio', icon: <SiPolymerproject/>},
  {id: 3, name: 'Contact', icon: <SiMinutemailer/>},
]

const Sidebar = ({setPageIndex, pageIndex, setShowSidebar}) => {
  const {dark} = useContextState()
  const [isPanding, startTransition] = useTransition();
  
  const pageNavigate = (id)=>{
    setPageIndex(id);
    setShowSidebar(false)
  }

  return (
    <div className='sidebar'>
      <div className="header">
        <Image src={logo} className="logo" alt="" style={dark[2]} />
      </div>
      <ul className="navItems">
        {navItems.map(item=>(
          <li key={item.id} className={item.id === pageIndex ? 'active' : ''} onClick={()=>{startTransition(()=>pageNavigate(item.id))}}>{item.icon} {item.name}</li>
        ))}
      </ul>
      <div className="footer">
        <p>Copyrights &copy;2022. All rights reserved to KGT.</p>
      </div>
    </div>
  )
}

export default Sidebar