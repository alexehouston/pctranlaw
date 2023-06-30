import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

export default function Nav({ isSmallScreen }) {

  return (
    <div className="Nav animate__animated animate__fadeInDown animate__slow">
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <div className="pct-logo">
          <div className="front"></div>
          <div className="back"></div>
        </div>
        <ul className="ribbon-nav position-relative d-flex justify-content-around align-items-center px-2">
          {isSmallScreen ? (
            <li className="nav-link lh-1 px-2 text-uppercase">
              <div className="dropdown">
                <a
                  className="underline-animation dropdown-toggle text-white"
                  href="#"
                  role="button"
                  id="navLinksDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Explore <FontAwesomeIcon icon={faChevronDown} className="text-pink" />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navLinksDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Practice Areas
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ) : (
            <> 
              <li className="nav-link text-uppercase">
                <a href="#" className="underline-animation p-0 my-2 mx-4">
                  Home
                </a>
              </li>
              <li className="nav-link text-uppercase">
              <div className="dropdown underline-animation p-0 my-2 mx-4">
                <a
                  className="dropdown-toggle text-white"
                  href="#"
                  role="button"
                  id="navLinksDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Practice Areas <FontAwesomeIcon icon={faChevronDown} className="text-pink" />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navLinksDropdown">
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
                <a href="#" className="underline-animation p-0 my-2 mx-4">
                  Contact Us
                </a>
              </li>
            </>
          )}
          <li className="nav-link text-uppercase">
            <a href="#" className="underline-animation p-0 my-2 mx-4">
              Consultation{' '}
              <FontAwesomeIcon icon={faChevronDown} className="text-pink" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

Nav.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
};