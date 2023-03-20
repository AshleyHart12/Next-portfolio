import Head from 'next/head';
import Image from 'next/image';
import Profile from '../images/profile.jpg'

export default function About() {

    return (
        <section id="about">
        <Head>
            <title>About</title>
        </Head>
          <div className="row about-section">
            <div className="col-md-8 order-2 order-md-1 p-5">
              <div className="row text-center">
                {/* <p className='light-text welcome'>I'm <span className='dark-text'>Ashley Hart</span></p>  */}
                <p className='light-text job-title'>Front End <span className='dark-text'>Web Developer</span></p>
              </div>
              <p className='light-text home-text'>I am a <span className='dark-text'>customer service guru</span> turned <span className='dark-text'>programmer</span> I enjoy learning new technologies, putting my skills to the test, and being a part of making the world around me a better place</p>
              <p className='light-text home-text'>While not online, I enjoy <span className='dark-text'>running trails</span> in the high country, friendly competition at the <span className='dark-text'>CrossFit</span> gym, and <span className='dark-text'>camping</span> under the stars in the summer</p>
            </div>
            <div className="col-md-4 text-center order-1 order-md-2 d-flex align-items-center about-img justify-content-center">
              <Image 
              src={Profile}
              height={600}
              width={600}
              alt="author holding a cup of tea"
              className='profile-photo'
              />
            </div>
          </div>
        </section>
    )
}