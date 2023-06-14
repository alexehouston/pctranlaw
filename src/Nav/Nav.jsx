import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="Nav">
      <div className="container-fluid bg-black p-0">
        <ul className="text-white d-flex justify-content-around m-0 py-3 px-5">
          <li>
            <a className="text-white text-uppercase text-thin" href="" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faPhone} className="pe-2 text-pink" />
                (832) 776- 6979
            </a>
          </li>
          <li>
            <a className="text-white text-uppercase text-thin" href="" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLocationDot} className="pe-2 text-pink" />
                5718 Westheimer Road, Suite 1125 Houston, TX 77057
            </a>
          </li>
          <li>
            <a className="text-white text-uppercase text-thin" href="" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="pe-2 text-pink" />
                ptran@pctranlaw.com
            </a>
          </li>
          <li>
            <a className="text-white" href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className="social-icon px-4" /></a>
            <a className="text-white" href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className="social-icon px-4" /></a>
            <a className="text-white" href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="social-icon px-4" /></a>
          </li>
        </ul>
      </div>
      <div className="container-fluid bg-white py-4">
        <div className="row mx-auto d-flex align-items-center w-50">
            <div className="col-5 text-center text-uppercase d-flex">
                <div className="nav-link col-6">
                    <a className="text-black" href="" target="_blank" rel="noreferrer">Home</a>
                </div>
                <div className="nav-link col-6">
                    <a className="text-black" href="" target="_blank" rel="noreferrer">Practice Areas</a>
                </div>
            </div>
            <div className="col-2 text-center"><img src="https://pctranlaw.thetawarrior.com/wp-content/uploads/2023/04/PCT-Law-3D-Logo_White-Tiger-280.png" height="80" /></div>
            <div className="col-5 text-center text-uppercase d-flex">
                <div className="nav-link col-4">
                    <a className="text-black" href="" target="_blank" rel="noreferrer">Contact</a>
                </div>
                <div className="nav-link col-8">
                    <a className="text-black" href="" target="_blank" rel="noreferrer">Consultation</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
