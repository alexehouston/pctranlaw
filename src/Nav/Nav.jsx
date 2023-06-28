import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="Nav">
      <div className="container-fluid bg-black p-0">
        <ul className="text-white d-flex justify-content-around m-0 py-3 px-5">
          <li>
            <a className="text-uppercase text-thin" href="tel:8327766979">
              <FontAwesomeIcon icon={faPhone} className="pe-2 text-pink" />
              <span className="text-white underline-animation">
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
              <FontAwesomeIcon
                icon={faLocationDot}
                className="pe-2 text-pink"
              />
              <span className="text-white underline-animation">
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
              <FontAwesomeIcon icon={faEnvelope} className="pe-2 text-pink" />
              <span className="text-white underline-animation">
                ptran@pctranlaw.com
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="container-fluid pt-3 pb-4">
        <div className="row mx-auto d-flex flex-column justify-content-center align-items-center w-75">
          <div className="text-center">
            <img src="/assets/PCT-logo.png" height="200" />
          </div>
          <ul className="ribbon-nav w-50 position-relative d-flex justify-content-around">
            <li className="nav-link p-0 lh-1 text-uppercase">
              <a className="underline-animation" href="#">
                Home
              </a>
            </li>
            <li className="nav-link p-0 lh-1 text-uppercase">
              <a className="underline-animation" href="#">
                Practice Areas
              </a>
            </li>
            <li className="nav-link p-0 lh-1 text-uppercase">
              <a className="underline-animation" href="#">
                Contact
              </a>
            </li>
            <li className="nav-link p-0 lh-1 text-uppercase">
              <a className="underline-animation" href="#">
                Consultation <FontAwesomeIcon icon={faChevronRight} className="text-pink" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
