import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

export default function Footer({ isSmallScreen }) {
  return (
    <div className="container-fluid bg-black">
      {isSmallScreen ? (
        <div className="row d-flex justify-content-center text-center text-white py-5 mb-5">
          <div className="col-4 col-lg-2">
            <h6 className="ftr-title text-uppercase">Services</h6>
            <li className="ftr-link">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ftr-chevron text-pink"
              />
              &ensp;Business
            </li>
            <li className="ftr-link">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ftr-chevron text-pink"
              />
              &ensp;Personal
            </li>
            <li className="ftr-link">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ftr-chevron text-pink"
              />
              &ensp;Financial
            </li>
          </div>
          <div className="col-4 col-lg-1">
            <img src="/assets/PCT-logo.png" height="100" />
          </div>
          <div className="col-4 col-lg-2">
            <h6 className="ftr-title text-uppercase">Contact</h6>
            <li className="ftr-link">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ftr-chevron text-pink"
              />
              &ensp;Business
            </li>
            <li className="ftr-link">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ftr-chevron text-pink"
              />
              &ensp;Personal
            </li>
            <li className="ftr-link">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ftr-chevron text-pink"
              />
              &ensp;Financial
            </li>
          </div>
        </div>
      ) : (
        <div className="row d-flex justify-content-center text-center text-white py-5">
          <div className="col-4 col-lg-2">
            <h6 className="ftr-title text-uppercase">Services</h6>
            <li className="ftr-link">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ftr-chevron text-pink"
              />
              &ensp;Business
            </li>
            <li className="ftr-link">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ftr-chevron text-pink"
              />
              &ensp;Personal
            </li>
            <li className="ftr-link">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ftr-chevron text-pink"
              />
              &ensp;Financial
            </li>
          </div>
          <div className="col-4 col-lg-1">
            <img src="/assets/PCT-logo.png" height="100" />
          </div>
          <div className="col-4 col-lg-2">
            <h6 className="ftr-title text-uppercase">Contact</h6>
            <li className="ftr-link">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ftr-chevron text-pink"
              />
              &ensp;Business
            </li>
            <li className="ftr-link">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ftr-chevron text-pink"
              />
              &ensp;Personal
            </li>
            <li className="ftr-link">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ftr-chevron text-pink"
              />
              &ensp;Financial
            </li>
          </div>
        </div>
      )}
      <div className="row">
        <p className="copyright container-fluid text-center text-white opacity-50 text-uppercase m-0 p-0">
          Copyright © 2023 Pctranlaw. All rights reserved.
        </p>
      </div>
    </div>
  );
}

Footer.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
};
