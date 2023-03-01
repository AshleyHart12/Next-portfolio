import Head from 'next/head';
import Image from 'next/image';
import { Storage } from 'aws-amplify';
import { useState, useEffect } from 'react';
// import Lampros from "/../images/lampros.gif";
// import Vantage from "/../images/Vantage.png";
// import Localeyz from "/../images/localeyz.gif"

export default function About() {

    return (
        <section id="projects">
        <Head>
            <title>Projects</title>
        </Head>
        <div className="container project-container">
            <h2 className='text-center m-5'>PROJECTS</h2>
            <div className="row mt-4">
                <div className="col">
                    <div className="project-img img-lampros">
                        <Image src={'/images/lampros.gif'} width={300} height={200} alt="gif going through website" />
                    </div>
                </div>
                <div className="col">
                    <p>Lampros Labs</p>
                    <p>HTML | JAVASCRIPT | BOOTSTRAP | PHP</p>
                    <button class="btn btn-primary project-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#lampros" aria-controls="lampros">
                        View More
                    </button>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <div className="project-img img-vantage">
                        <Image src='/images/Vantage.png' width={300} height={200} alt="gif going through website" />
                    </div>
                </div>
                <div className="col">
                    <p>Vantage Ltd.</p>
                    <p>ANGULAR | BOOTSTRAP | APIs</p>
                    <button class="btn btn-primary project-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#vantage" aria-controls="vantage">
                        View More
                    </button>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <div className="project-img img-localeyz">
                        <Image src='' width={300} height={200} alt="gif going through website" />
                    </div>
                </div>
                <div className="col">
                    <p>Localeyz.io</p>
                    <p>REACT | GRAPHQL | TAILWIND | JSON</p>
                    <button class="btn btn-primary project-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#localeyz" aria-controls="localeyz">
                        View More
                    </button>
                </div>
            </div>

            {/* MODALS */}
            <div class="offcanvas offcanvas-start" tabindex="-1" id="lampros" aria-labelledby="LamprosLabel">
                <div class="offcanvas-header">
                    <h2 class="offcanvas-title" id="LamprosLabel">LAMPROS LABS</h2>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        <ul class="project-tech-list">
                            <li>HTML</li>
                            <li>JAVASCRIPT</li>
                            <li>PHP</li>
                            <li>WORDPRESS</li>
                            <li>SCSS</li>
                        </ul>
                    </div>
                    <div class="project-descr">At Lampros Labs, we are a small team that builds and maintains websites for clients, using custom Wordpress themes and plugins. We also work on building out new features for clients using HTML, SCSS, PHP, and JavaScript, as well as designing mockups for new and desired features using AdobeXD. We  play a critical role in helping clients establish and maintain their online presence, ensuring that their websites are functional, secure, and aesthetically pleasing. Our work requires a combination of technical skills, design skills, and problem-solving abilities to create effective solutions for our clients.</div>
                </div>
            </div>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="vantage" aria-labelledby="VantageLabel">
                <div class="offcanvas-header">
                    <h2 class="offcanvas-title" id="VantageLabel">VANTAGE</h2>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        <ul class="project-tech-list">
                            <li>ANGULAR</li>
                            <li>BOOTSTRAP</li>
                            <li>APIs</li>
                        </ul>
                    </div>
                    <div class="project-descr">
                        At Vantage, the team was focused on developing a full-scale application for wristband technology. We were responsible for following design and functionality standards as needed for the application, and ensuring that it met the requirements of the project. We tested, debugged, and diagnosed any bugs that may arise in the code, and worked to identify and fix issues as quickly and efficiently as possible. This role required a combination of programming skills, problem-solving abilities, and an understanding of design and usability principles to create effective solutions.
                    </div>
                </div>
            </div>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="localeyz" aria-labelledby="LocaleyzLabel">
                <div class="offcanvas-header">
                    <h2 class="offcanvas-title" id="LocaleyzLabel">LOCALEYZ</h2>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        <ul class="project-tech-list">
                            <li>REACT</li>
                            <li>GRAPHQL</li>
                            <li>TAILWIND</li>
                        </ul>
                    </div>
                    <div class="project-descr">
                        This role was focused on building out front-end sites using ReactJS, GraphQL, and Gatsby, as well as providing support for existing clients on the Drupal platform. I assistedwith documentation, videos, and support for existing clients on the Drupal platform, working to ensure that their needs were met and that any issues or questions were addressed quickly and effectively. This role requires a combination of programming skills, design skills, and communication abilities to create effective solutions and provide excellent support to clients.
                    </div>
                </div>
            </div>
        </div>

        </section>
    )
}