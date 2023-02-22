import Head from 'next/head';
import Image from 'next/image';
import Lampros from "../public/images/lampros.gif";
import Vantage from "../public/images/Vantage.png";
import Localeyz from "../public/images/localeyz.gif"

export default function About() {
    return (
        <>
        <Head>
            <title>Projects</title>
        </Head>
        <div className="container project-container">
            <div className="row mt-4">
                <div className="col">
                    <div className="project-img img-lampros">
                        <Image src={Lampros} width={300} height={200} alt="gif going through website" />
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
                        <Image src={Vantage} width={300} height={200} alt="gif going through website" />
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
                        <Image src={Localeyz} width={300} height={200} alt="gif going through website" />
                    </div>
                </div>
                <div className="col">
                    <p>Localeyz.io</p>
                    <p>REACT | GRAPHQL | GATSBY | JSON</p>
                    <button class="btn btn-primary project-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#localeyz" aria-controls="localeyz">
                        View More
                    </button>
                </div>
            </div>

            {/* MODALS */}
            <div class="offcanvas offcanvas-start" tabindex="-1" id="lampros" aria-labelledby="LamprosLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="LamprosLabel">Offcanvas</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        Lampros Stuff
                    </div>
                </div>
            </div>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="vantage" aria-labelledby="VantageLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="VantageLabel">Offcanvas</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        Vantage Stuff
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}