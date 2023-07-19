import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faClock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactBar() {
  return (
    <ul className="container-fluid bg-black text-white d-flex flex-wrap justify-content-around m-0 py-2 px-0 border-bottom border-dark">
      <li>
        <a className="text-uppercase text-thin" href="tel:8327766979">
          <FontAwesomeIcon icon={faPhone} className="pe-2 text-pink" />
          <span className="footer-info-phone text-white underline-animation">
            (832) 776 - 6979
          </span>
        </a>
      </li>
      <li>
        <a
          className="text-uppercase text-thin"
          href="https://www.google.com/maps/place/5718+Westheimer+Rd+1000+1125,+Houston,+TX+77057/@29.7384872,-95.4814493,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c3d8b898e3b1:0x29bce29c9e907e33!8m2!3d29.7384826!4d-95.4788744?entry=ttu"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLocationDot} className="pe-2 text-pink" />
          <span className="footer-info text-white underline-animation">
            5718 Westheimer Road, Suite 1125 Houston, TX 77057
          </span>
        </a>
      </li>
      <li>
        <a
          className="text-uppercase text-thin"
          href="mailto:ptran@pctranlaw.com?subject=PCT Law Inquiry"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faClock} className="pe-2 text-pink" />
          <span className="footer-info text-white underline-animation">
            Mon - Fri: 9AM - 5PM
          </span>
        </a>
      </li>
      <li>
        <a
          className="text-uppercase text-thin"
          href="mailto:ptran@pctranlaw.com?subject=PCT Law Inquiry"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} className="pe-2 text-pink" />
          <span className="footer-info text-white underline-animation">
            ptran@pctranlaw.com
          </span>
        </a>
      </li>
    </ul>
  );
}
