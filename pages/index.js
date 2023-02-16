import Head from 'next/head'
import Footer from '@components/Footer'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ashley Hart Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <div className="row">
              <p className='light-text fs-1'>Hey! I'm <span className='dark-text'>Ashley Hart</span></p> 
              <p className='light-text fs-3'>I am a Front End <span className='dark-text'>Web Developer</span></p>
            <div className="col-xs-12 col-sm-8 text-center">
              <p className='light-text fs-5'>I am a <span className='dark-text'>customer service guru</span> turned <span className='dark-text'>programmer</span> I enjoy learning new technologies, putting my skills to the test, and being a part of making the world around me a better place</p>
              <p className='light-text fs-5'>While not online, I enjoy <span className='dark-text'>running trails</span> in the high country, friendly competition at the <span className='dark-text'>CrossFit</span> gym, and <span className='dark-text'>camping</span> under the stars in the summer</p>
            </div>
              <div className="col-xs-12 col-sm-4 text-center">
                <Image 
                src="/images/profile.jpg"
                height={250}
                width={250}
                alt="author holding a cup of tea"
                className='profile-photo'
                />
              </div>
          </div>
    </div>
  )
}
