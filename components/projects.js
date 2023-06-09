import Head from 'next/head';
import Image from 'next/image';
// import { Storage } from 'aws-amplify';
// import { useState, useEffect } from 'react';
import Lampros from "../images/ocusell.png";
import Vantage from "../images/vantageps.jpg";
import Localeyz from "../images/local.png";
import Shadow from '../images/shadowbud.png';
import Loslens from '../images/loslens.png';

export default function About() {

    return (
        <section id="projects">
        <Head>
            {/* <title>Projects</title> */}
        </Head>
        {/* <div className='waveWrapper waveAnimation'>
            <div className='waveWrapperInner bgTop'>
                <div className='wave waveTop'></div>
            </div>
            <div className='waveWrapperInner bgMiddle'>
                <div className='wave waveMiddle'></div>
            </div>
            <div className='waveWrapperInner bgBottom'>
                <div className='wave waveBottom'></div>
            </div>
        </div> */}
        <div className="container project-container">
            <div className='text-center p-5 project-headline'><h2>PROJECTS</h2></div>
            <div className="row mt-4 text-center d-flex flex-row justify-content-center">
                    <div className="project-img img-lampros col-md-4" data-bs-toggle="offcanvas" data-bs-target="#lampros" aria-controls="lampros">
                        <Image src={Lampros} width={375} height={230} alt="gif going through website" unoptimized={true} class="projectImage" />
                    </div>
                    <div className="project-img img-vantage col-md-4" data-bs-toggle="offcanvas" data-bs-target="#vantage" aria-controls="vantage">
                        <Image src={Vantage} width={375} height={230} alt="gif going through website" class="projectImage" />
                    </div>
                    <div className="project-img img-localeyz col-md-4" data-bs-toggle="offcanvas" data-bs-target="#localeyz" aria-controls="localeyz">
                        <Image src={Localeyz} width={375} height={230} alt="gif going through website" unoptimized={true} class="projectImage" />
                    </div>
                    <div className="project-img img-shadow col-md-4" data-bs-toggle="offcanvas" data-bs-target="#shadow" aria-controls="shadow">
                        <Image src={Shadow} width={375} height={230} alt="gif going through website" class="projectImage shadow-img" />
                    </div>
                    <div className="project-img img-los col-md-4" data-bs-toggle="offcanvas" data-bs-target="#loslens" aria-controls="shadow">
                        <Image src={Loslens} width={375} height={230} alt="gif going through website" class="projectImage shadow-img" />
                    </div>
            </div>

            {/* MODALS */}
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="lampros" aria-labelledby="LamprosLabel">
                <div className="offcanvas-header">
                    <h2 className="offcanvas-title" id="LamprosLabel">LAMPROS LABS</h2>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <ul className="project-tech-list">
                            <li>HTML</li>
                            <li>JAVASCRIPT</li>
                            <li>PHP</li>
                            <li>WORDPRESS</li>
                            <li>SCSS</li>
                        </ul>
                    </div>
                    <div className="project-descr">At Lampros Labs, we are a small team that builds and maintains websites for clients, using custom Wordpress themes and plugins. We also work on building out new features for clients using HTML, SCSS, PHP, and JavaScript, as well as designing mockups for new and desired features using AdobeXD. We  play a critical role in helping clients establish and maintain their online presence, ensuring that their websites are functional, secure, and aesthetically pleasing. Our work requires a combination of technical skills, design skills, and problem-solving abilities to create effective solutions for our clients.</div>
                </div>
            </div>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="vantage" aria-labelledby="VantageLabel">
                <div className="offcanvas-header">
                    <h2 className="offcanvas-title" id="VantageLabel">VANTAGE</h2>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <ul className="project-tech-list">
                            <li>ANGULAR</li>
                            <li>BOOTSTRAP</li>
                            <li>APIs</li>
                        </ul>
                    </div>
                    <div className="project-descr">
                        At Vantage, the team was focused on developing a full-scale application for wristband technology. We were responsible for following design and functionality standards as needed for the application, and ensuring that it met the requirements of the project. We tested, debugged, and diagnosed any bugs that may arise in the code, and worked to identify and fix issues as quickly and efficiently as possible. This role required a combination of programming skills, problem-solving abilities, and an understanding of design and usability principles to create effective solutions.
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="localeyz" aria-labelledby="LocaleyzLabel">
                <div className="offcanvas-header">
                    <h2 className="offcanvas-title" id="LocaleyzLabel">LOCALEYZ</h2>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <ul className="project-tech-list">
                            <li>REACT</li>
                            <li>GRAPHQL</li>
                            <li>TAILWIND</li>
                        </ul>
                    </div>
                    <div className="project-descr">
                        This role was focused on building out front-end sites using ReactJS, GraphQL, and Gatsby, as well as providing support for existing clients on the Drupal platform. I assistedwith documentation, videos, and support for existing clients on the Drupal platform, working to ensure that their needs were met and that any issues or questions were addressed quickly and effectively. This role requires a combination of programming skills, design skills, and communication abilities to create effective solutions and provide excellent support to clients.
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="shadow" aria-labelledby="shadow">
                <div className="offcanvas-header">
                    <h2 className="offcanvas-title" id="shadow">Shadow Buddy</h2>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <ul className="project-tech-list">
                            <li>REACT</li>
                            <li>ADOBE XD</li>
                            <li>TAILWIND</li>
                        </ul>
                    </div>
                    <div className="project-descr">
                        This is a project created with passion and dedication, using the powerful combination of React and Tailwind. The project will be built around a carefully crafted design, which I created using Adobe XD. This project is being developed gradually, with care and consideration given to each aspect of the construction. You can check out the entire design <a href="https://xd.adobe.com/view/b9fe1da9-45f2-4499-a76d-b056ab49cf18-ecad/" target="_blank"><u>here</u></a>
                    </div>
                </div>
            </div>
        </div>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="loslens" aria-labelledby="los">
                <div className="offcanvas-header">
                    <h2 className="offcanvas-title" id="loslens">Lo's Lens</h2>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <ul className="project-tech-list">
                            <li>WORDPRESS</li>
                        </ul>
                    </div>
                    <div className="project-descr">
                        For this project I built a captivating Wordpress website for a talented dog photographer, loslens.com. I began by selecting an appropriate theme that reflected the brand's aesthetics. To showcase the stunning photographs, I created an immersive image gallery, ensuring that each picture would leave a lasting impression on visitors. I integrated a user-friendly contact page, allowing potential clients to easily get in touch. Throughout the process, I collaborated closely with the client, guiding them through the intricacies of the site and empowering them to make future updates and adjustments with confidence. The end result is a visually captivating and functional website that beautifully captures the essence of the client's dog photography business You can check out the site <a href="www.loslens.com" target="_blank"><u>here</u></a>
                    </div>
                </div>
            </div>


        </section>
    )
}