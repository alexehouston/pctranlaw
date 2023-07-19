import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

export default function Nav({ isSmallScreen }) {
  return (
    <div className="Nav animate__animated animate__fadeInDown animate__slow">
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-0">
        <div className="pct-logo">
          <div className="front"></div>
          <div className="back"></div>
        </div>

        {isSmallScreen ? (
          <ul className="bg-black container-fluid position-relative d-flex justify-content-center flex-wrap align-items-center m-0 py-2">
            <li className="nav-link text-uppercase">
              <a href="#" className="text-white underline-animation pt-1 my-2">
                Home
              </a>
            </li>
            <li className="nav-link text-uppercase">
              <div className="dropdown underline-animation pt-1 my-2 mx-4 d-flex align-items-center">
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
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navLinksDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Personal Injury
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Intellectual Property
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Business Law
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Real Estate Law
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* <li className="nav-link text-uppercase">
              <a href="#" className="text-white underline-animation my-2 mx-5">
                Contact Us
              </a>
            </li> */}
            <li className="nav-link text-uppercase">
              <a href="#" className="text-white underline-animation pt-1 my-2">
                Consultation{" "}
                <FontAwesomeIcon icon={faChevronRight} className="text-pink" />
              </a>
            </li>
          </ul>
        ) : (
          <ul className="bg-black container-fluid position-relative d-flex justify-content-center flex-wrap align-items-center m-0 py-2">
            <li className="nav-link text-uppercase">
              <a href="#" className="text-white underline-animation my-2 mx-5">
                Home
              </a>
            </li>
            <li className="nav-link text-uppercase">
              <div className="dropdown underline-animation my-2 mx-5 d-flex align-items-center">
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
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navLinksDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Personal Injury
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Intellectual Property
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Business Law
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Real Estate Law
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-link text-uppercase">
              <a href="#" className="text-white underline-animation my-2 mx-5">
                Contact Us
              </a>
            </li>
            <li className="nav-link text-uppercase">
              <a href="#" className="text-white underline-animation my-2 mx-5">
                Consultation{" "}
                <FontAwesomeIcon icon={faChevronRight} className="text-pink" />
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

Nav.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
};
