import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

export default function Nav({ isSmallScreen }) {
  return (
    <div className="Nav animate__animated animate__fadeInDown animate__slow bg-black container-fluid border-bottom border-dark">
      {isSmallScreen ? (
        <ul className="col-12 mx-auto d-flex justify-content-center flex-wrap align-items-center m-0 p-0 py-2">
          <li className="nav-link text-uppercase">
            <a href="#" className="text-white underline-animation pt-1 my-2">
              <FontAwesomeIcon icon={faHouse} />
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
          <div className="dropdown underline-animation pt-1 my-2 d-flex align-items-center">
              <a
                className="dropdown-toggle underline-animation text-white"
                href="#"
                role="button"
                id="navLinksDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Legal Team{" "}
                <FontAwesomeIcon icon={faChevronDown} className="text-pink" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="navLinksDropdown">
                <li>
                  <a
                    className="dropdown-item"
                  >
                    Priscilla C. Tran
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                  >
                    Priscilla C. Tran
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                  >
                    Priscilla C. Tran
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      ) : (
        <ul className="nav-links col-11 col-lg-10 mx-auto d-flex justify-content-between align-items-center m-0 py-2">
          <li className="nav-link text-uppercase">
            <a href="#" className="nav-link-a text-white underline-animation my-2">
              <FontAwesomeIcon icon={faHouse} />
            </a>
          </li>
          <li className="nav-link text-uppercase">
            <div className="dropdown underline-animation my-2 d-flex align-items-center">
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
            <div className="dropdown underline-animation my-2 d-flex align-items-center">
              <a
                className="dropdown-toggle underline-animation text-white"
                href="#"
                role="button"
                id="navLinksDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Legal Team{" "}
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
              className="nav-link-a text-white underline-animation my-2"
            >
              Contact Us
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

Nav.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
};
