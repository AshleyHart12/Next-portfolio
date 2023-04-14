import styles from './Footer.module.css'
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p className="m-0"></p>
        {/* <div className='footer-heart'>
          <Image src="/images/heart.jpg" width={15} height={15} />
        </div> */}
        {/* <p className="m-0">2023</p> */}
      </footer>
    </>
  )
}
