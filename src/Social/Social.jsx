import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Social.css";

export default function Social({ isSmallScreen }) {
  return (
    <>
      {isSmallScreen ? (
        <div className="Social position-fixed bottom-0 w-100 d-flex justify-content-center animate__animated animate__fadeInUp animate__slower">
          <a
            className="btn-hover mx-4 mb-5"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="social-icon btn-hover fs-1 p-3 text-white bg-dark rounded-pill"
            />
          </a>
          <a
            className="btn-hover mx-4 mb-5"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="social-icon btn-hover fs-1 p-3 text-white bg-dark rounded-pill"
            />
          </a>
          <a
            className="btn-hover mx-4 mb-5"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="social-icon btn-hover fs-1 p-3 text-white bg-dark rounded-pill"
            />
          </a>
        </div>
      ) : (
        <div className="Social position-fixed top-50 d-flex flex-column animate__animated animate__fadeInLeft animate__slower">
          <a
            className="btn-hover mx-4 mb-5"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="social-icon btn-hover fs-4 p-2 text-white bg-dark rounded-pill"
            />
          </a>
          <a
            className="btn-hover mx-4 mb-5"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="social-icon btn-hover fs-4 p-2 text-white bg-dark rounded-pill"
            />
          </a>
          <a
            className="btn-hover mx-4 mb-5"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="social-icon btn-hover fs-4 p-2 text-white bg-dark rounded-pill"
            />
          </a>
        </div>
      )}
    </>
  );
}

Social.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
};
