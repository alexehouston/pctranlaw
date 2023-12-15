import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faHouse,
  faPhone,
  faLocationDot,
  faClock,
  faEnvelope, } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      {/* Nav Bar */}
      <div className="Nav navbar fixed-top py-0 animate__animated animate__fadeInDown animate__slow bg-black container-fluid border-bottom border-dark">
        <ul className="nav-links col-11 col-lg-10 mx-auto d-flex justify-content-between align-items-center m-0 py-3 px-0">
          <li className="nav-link text-uppercase">
            <a href="#" className="nav-link-a text-white underline-animation">
              <FontAwesomeIcon icon={faHouse} />
            </a>
          </li>
          <li className="nav-link text-uppercase">
            <div className="dropdown underline-animation d-flex align-items-center">
              <a
                className="dropdown-toggle underline-animation text-white"
                href="#"
                role="button"
                id="navLinksDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Practice Areas{" "}
                <FontAwesomeIcon icon={faChevronDown} className="text-pink" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="navLinksDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#personalInjuryModal"
                  >
                    Personal Injury
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#intellectualPropertyModal"
                  >
                    Intellectual Property
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#businessLawModal"
                  >
                    Business Law
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-link text-uppercase">
            <div className="dropdown underline-animation d-flex align-items-center">
              <a
                className="dropdown-toggle underline-animation text-white"
                href="#"
                role="button"
                id="navLinksDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="d-none d-lg-inline">Legal</span> Team{" "}
                <FontAwesomeIcon icon={faChevronDown} className="text-pink" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="navLinksDropdown">
                <li>
                  <a className="dropdown-item">Priscilla C. Tran</a>
                </li>
                <li>
                  <a className="dropdown-item">Priscilla C. Tran</a>
                </li>
                <li>
                  <a className="dropdown-item">Priscilla C. Tran</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-link text-uppercase">
            <a
              href="#ContactUs"
              className="nav-link-a text-white underline-animation"
            >
              Contact <span className="d-none d-lg-inline">Us</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Bar (Bottom) */}
      <div className="navbar fixed-bottom bg-black border-top border-dark animate__animated animate__fadeInUp animate__slow">
        <Marquee pauseOnClick pauseOnHover autoFill speed={35}>
          <a className="text-uppercase text-thin mx-5" href="tel:8327766979">
            <FontAwesomeIcon icon={faPhone} className="pe-2 text-pink" />
            <span className="contact-info text-white underline-animation">
              (832) 776 - 6979
            </span>
          </a>
          <a
            className="text-uppercase text-thin mx-5"
            href="https://www.google.com/maps/place/5718+Westheimer+Rd+1000+1125,+Houston,+TX+77057/@29.7384872,-95.4814493,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c3d8b898e3b1:0x29bce29c9e907e33!8m2!3d29.7384826!4d-95.4788744?entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLocationDot} className="pe-2 text-pink" />
            <span className="contact-info text-white underline-animation">
              5718 Westheimer Road, Suite 1000-1125, Houston, TX 77057
            </span>
          </a>
          <div className="text-uppercase text-thin mx-5">
            <FontAwesomeIcon icon={faClock} className="pe-2 text-pink" />
            <span className="contact-info text-white underline-animation text-uppercase">
              Mon - Fri: 9AM - 5PM
            </span>
          </div>
          <a
            className="text-uppercase text-thin mx-5"
            href="mailto:contact@pctranlaw.com?subject=PCT Law Inquiry"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="pe-2 text-pink" />
            <span className="contact-info text-white underline-animation">
              contact<span className="text-pink">@</span>pctranlaw.com
            </span>
          </a>
        </Marquee>
      </div>
    </>
  );
}
