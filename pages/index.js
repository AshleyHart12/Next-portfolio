import Head from 'next/head'
import Footer from '@components/Footer'
import Image from 'next/image'
import Contact from '../components/contact'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Navbar from '@components/Navbar'
import About from '../components/About'
import Typewriter from 'typewriter-effect';


export default function Home() {
  return (
    <div className="container-fluid">
      <Head>
        <title>Ashley Hart Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
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
        <About />
        <div className='secondImg'></div>
        <Experience />
        <div className='thirdImg'></div>
        <Projects />
        <div className='fourthImg'></div>
        <Contact />
        <Footer />
    </div>
  )
}
