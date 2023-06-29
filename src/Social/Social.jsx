import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import "./Social.css";

export default function Social() {
    return (
        <div className="Social position-fixed top-50 d-flex flex-column animate__animated animate__fadeInLeft animate__slower">
            <a className="btn-hover ms-4 my-2" href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className="btn-hover fs-4 p-2 text-white bg-dark rounded-pill" /></a>
            <a className="btn-hover ms-4 my-2" href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="btn-hover fs-4 p-2 text-white bg-dark rounded-pill" /></a>
            <a className="btn-hover ms-4 my-2" href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} className="btn-hover fs-4 p-2 text-white bg-dark rounded-pill" /></a>
        </div>
    )
}