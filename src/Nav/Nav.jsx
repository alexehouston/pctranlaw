import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
  faChevronRight
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
            <a className="text-uppercase text-thin" href="tel:8327766979">
                <FontAwesomeIcon icon={faPhone} className="pe-2 text-pink" />
                <span className="text-white underline-animation">(832) 776 - 6979</span>
            </a>
          </li>
          <li>
            <a className="text-uppercase text-thin" href="https://www.google.com/maps/place/5718+Westheimer+Rd+1000+1125,+Houston,+TX+77057/@29.7384872,-95.4814493,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c3d8b898e3b1:0x29bce29c9e907e33!8m2!3d29.7384826!4d-95.4788744?entry=ttu" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLocationDot} className="pe-2 text-pink" />
                <span className="text-white underline-animation">5718 Westheimer Road, Suite 1125 Houston, TX 77057</span>
            </a>
          </li>
          <li>
            <a className="text-uppercase text-thin" href="mailto:ptran@pctranlaw.com?subject=PCT Law Inquiry" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="pe-2 text-pink" />
                <span className="text-white underline-animation">ptran@pctranlaw.com</span>
            </a>
          </li>
          <li>
            <a className="text-white" href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className="social-icon px-4" /></a>
            <a className="text-white" href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className="social-icon px-4" /></a>
            <a className="text-white" href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="social-icon px-4" /></a>
          </li>
        </ul>
      </div>
      <div className="container-fluid pt-4 pb-5">
        <div className="row mx-auto d-flex align-items-center w-50">
            <div className="col-4 text-center text-uppercase d-flex">
                <div className="nav-link col-6">
                    <a className="text-black underline-animation" href="" target="_blank" rel="noreferrer">Home</a>
                </div>
                <div className="nav-link col-6">
                    <a className="text-black underline-animation" href="" target="_blank" rel="noreferrer">Practice Areas</a>
                </div>
            </div>
            <div className="col-4 text-center"><img src="/assets/PCT-logo-notxt.png" height="150" /></div>
            <div className="col-4 text-center text-uppercase d-flex">
                <div className="nav-link col-4">
                    <a className="text-black underline-animation" href="" target="_blank" rel="noreferrer">Contact</a>
                </div>
                <div className="nav-link col-8">
                    <a className="text-black underline-animation" href="" target="_blank" rel="noreferrer">Consultation <FontAwesomeIcon icon={faChevronRight} className="chevron-sm" /></a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
