import { useState } from 'react';
import { send } from 'emailjs-com';
import Image from 'next/image'
import Head from 'next/head';
import Linkedin from '../images/linkedin.svg';
import Github from '../images/square-github.svg';

function Contact() {
    const [toSend, setToSend] = useState({
      from_name: '',
      to_name: '',
      message: '',
      reply_to: '',
    });
  
    const onSubmit = (e) => {
        e.preventDefault();
        send(
        'service_jwc0ike',
        'template_lfihv3a',
        toSend,
        'fF1jDB4LOgD5Dxqoo'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
        };
  
    const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
  
    return (
      <section id="contact" >
      <Head>
          <title>Contact</title>
      </Head>
      <div className='container' id="contact">
        <h2 className="p-5 text-center">Get In Touch</h2>
        <form onSubmit={onSubmit} class=" d-flex flex-column contactForm">
            <input
                type='text'
                name='from_name'
                placeholder='NAME'
                value={toSend.from_name}
                onChange={handleChange}
                className="m-3"
            />
             <input
                type='text'
                name='reply_to'
                placeholder='EMAIL'
                value={toSend.reply_to}
                onChange={handleChange}
                className="m-3"
            />
            <input
                type='text'
                name='message'
                placeholder='MESSAGE'
                value={toSend.message}
                onChange={handleChange}
                className="m-3"
            />
            <a href="#" class="cta">
              <span>Submit</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
            {/* <button type='submit' id="contactBtn" class="m-3">Submit</button> */}
        </form>
      </div>
        <div className="social_media_connect mt-3 mb-5">
          <a href="https://www.linkedin.com/in/ashley-m-hart/" target="_blank" className="linkedin-logo">
            <Image src={Linkedin} width={30} height={30} />
          </a>
          <a href="https://github.com/AshleyHart12" target="_blank">
            <Image src={Github} width={30} height={30} />
          </a>
        </div>
      </section>
    );
  }

export default Contact;