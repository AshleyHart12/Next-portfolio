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

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content" id="cardModal">
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