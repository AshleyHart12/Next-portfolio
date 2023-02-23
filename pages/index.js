import Head from 'next/head'
import Footer from '@components/Footer'
import Image from 'next/image'
import Contact from '../components/contact'
import Experience from '../components/experience'
import Projects from '../components/projects'


export default function Home() {
  return (
    <div className="container-fluid">
      <Head>
        <title>Ashley Hart Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <div class="row about-section">
            <div className="col-md-6 order-2 order-md-1">
              <div className="row text-center">
                <p className='light-text welcome'>I'm <span className='dark-text'>Ashley Hart</span></p> 
                <p className='light-text job-title'>Front End <span className='dark-text'>Web Developer</span></p>
             </div>
              <p className='light-text'>I am a <span className='dark-text'>customer service guru</span> turned <span className='dark-text'>programmer</span> I enjoy learning new technologies, putting my skills to the test, and being a part of making the world around me a better place</p>
              <p className='light-text'>While not online, I enjoy <span className='dark-text'>running trails</span> in the high country, friendly competition at the <span className='dark-text'>CrossFit</span> gym, and <span className='dark-text'>camping</span> under the stars in the summer</p>
            </div>
            <div className="col-md-6 text-center order-1 order-md-2">
              <Image 
              src="/images/profile.jpg"
              height={350}
              width={350}
              alt="author holding a cup of tea"
              className='profile-photo'
              />
            </div>
          </div>
          <Experience />
          <Projects />
          <Contact />
          <Footer />
    </div>
  )
}
