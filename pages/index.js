import { lazy, Suspense, useState } from "react";
import Sidebar from "../components/Sidebar";
const Portfolio = lazy(()=>import('../components/Portfolio'));
const Intro = lazy(()=>import('../components/Intro'));
const Services = lazy(()=>import('../components/Services'));
const Contact = lazy(()=>import('../components/Contact'));

import { RiMoonClearLine } from 'react-icons/ri'
import { FaSun } from 'react-icons/fa'
import { GoThreeBars } from 'react-icons/go'
import { client } from "../lib/client";
import { useContextState } from "../context/StateContext";
import Head from "next/head";


export default function Home({ projects }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const { darkMode, setDarkMode, dark } = useContextState();

  const pages = [<Intro setPageIndex={setPageIndex} />, <Services />, <Portfolio projects={projects} />, <Contact />]

  return (
    <>
      <Head>
        <title>KGT</title>
        <meta name="description" content="Frontend Developer Portfolio Webiste" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='layout' style={dark[1]}>
        <div className={showSidebar ? 'left openSidebar' : 'left'} style={dark[0]}>
          <Sidebar setShowSidebar={setShowSidebar} setPageIndex={setPageIndex} pageIndex={pageIndex} />
        </div>
        <div className='right'>
          <Suspense fallback={<h1>Loading...</h1>}>
            {pages[pageIndex]}
          </Suspense>
        </div>
        <div className='darkModeIcon'>
          {darkMode ? <FaSun className="dayIcon" onClick={() => setDarkMode(false)} /> : <RiMoonClearLine className="nightIcon" onClick={() => setDarkMode(true)} />}
        </div>
        <div className='hamburger' onClick={() => setShowSidebar(!showSidebar)}>
          <GoThreeBars className="icon" />
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "project"]';
  const projects = await client.fetch(query);

  return {
    props: { projects }
  }
}
