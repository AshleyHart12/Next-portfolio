import {useState, useEffect} from 'react';
import Head from 'next/head'
// import Footer from '@components/Footer'
// import Image from 'next/image'
import Contact from '../components/contact'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Navbar from '@components/Navbar'
import About from '../components/About'
import Typewriter from 'typewriter-effect';


export default function Home() {
  const [pageTitle, setPageTitle] = useState('Ashley Hart Portfolio')
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle])
  return (
    <div className="container-fluid">
      <Head>
        <title>{pageTitle}</title>
      </Head>
        <Navbar />
        <div className="firstImg">
          <div className='caption'>
          <Typewriter
                    onInit={(typewriter) => {
                    typewriter.typeString('ASHLEY HART')
                        .pauseFor(2500)
                        .start();
                    }}
                />
            {/* <span className='border'>ASHLEY HART</span> */}
          </div>
        </div>
        <About id="about" title="About" />
        <div className='secondImg'></div>
        <Experience setPageTitle={setPageTitle} />
        {/* <div className='thirdImg'></div> */}
        <Projects setPageTitle={setPageTitle} />
        {/* <div className='fourthImg'></div> */}
        <Contact setPageTitle={setPageTitle} />
        <div className='fourthImg'></div>
        {/* <Footer /> */}
    </div>
  )
}
