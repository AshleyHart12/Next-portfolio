import Image from 'next/image'

export default function Card(props) {
    return (
        <>
            <a  data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="card card-div">
                    <Image 
                    src={props.src}
                    width={250}
                    height={250}
                    alt={props.alt}
                    />
                </div>
            </a>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" id="cardModal">
                    <div className="row">
                        <div className="col">
                            <Image 
                            src={props.src}
                            width={250}
                            height={250}
                            alt={props.alt}
                            />
                        </div>
                        <div className="col">
                            <h4>{props.modalTitle}</h4>
                            <div>{props.technology}</div>
                            <div>{props.modalDescription}</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}