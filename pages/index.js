import Head from 'next/head'
import Footer from '@components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Linkedin from '../public/images/linkedin.svg';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ashley Hart Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <div className="row text-center">
            <p className='light-text fs-1'>Hey! I'm <span className='dark-text'>Ashley Hart</span></p> 
            <p className='light-text fs-4'>I am a Front End <span className='dark-text'>Web Developer</span></p>
          </div>
          <div class="row about-me-div">
            <div className="col-sm-8">
              <h4 className="mb-3">About Me</h4>
              {/* <p>I am a Frontend Developer experienced working with teams to produce impactful, leading edge
websites that engage customers and deliver business results. Well-versed in design standards and user preferences. Organized and dependable, successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals</p> */}
              <p className='light-text'>I am a <span className='dark-text'>customer service guru</span> turned <span className='dark-text'>programmer</span> I enjoy learning new technologies, putting my skills to the test, and being a part of making the world around me a better place</p>
              <p className='light-text'>While not online, I enjoy <span className='dark-text'>running trails</span> in the high country, friendly competition at the <span className='dark-text'>CrossFit</span> gym, and <span className='dark-text'>camping</span> under the stars in the summer</p>
            </div>
              <div className="col-sm-4 text-center">
                <Image 
                src="/images/profile.jpg"
                height={250}
                width={250}
                alt="author holding a cup of tea"
                className='profile-photo'
                />
              </div>
              {/* <div class="col-sm-4">
                <h4 className="mb-3">Details</h4>
                <p><FontAwesomeIcon icon={faLocationDot} /> Colorado</p>
                <p>Hobbies:  </p>
                <p>Pets:</p>
                <a href="https://www.linkedin.com/in/ashley-m-hart/" target="_blank"><Image src='/images/linkedin.svg' width={18} height={18}  /></a>
              </div> */}
          </div>
    </div>
  )
}
