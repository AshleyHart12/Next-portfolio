import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Wave from '@components/Wave'

function Application({ Component, pageProps }) {
  return(
    <>
      <Navbar />
      <Component {...pageProps} />
      {/* <Wave /> */}
    </>
  ) 
}

export default Application
