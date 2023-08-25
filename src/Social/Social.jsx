import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Social.css";

export default function Social({ isSmallScreen }) {
  return (
    <>
      {isSmallScreen ? (
        <div className="Social d-flex flex-column align-items-center justify-content-center position-fixed bottom-0 w-100">
          <div className="social-icons w-100 d-flex justify-content-center animate__animated animate__fadeInUp animate__slower">
            <a
              className="social-icon btn-hover mx-4 bg-black rounded-pill"
              href="https://www.instagram.com/pctlawfirm/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="fs-1 p-2 text-white"
              />
            </a>
            <a
              className="social-icon btn-hover mx-4 bg-black rounded-pill"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="fs-1 p-2 text-white"
              />
            </a>
            <a
              className="social-icon btn-hover mx-4 bg-black rounded-pill"
              href="mailto:contact@pctranlaw.com?subject=PCT Law Inquiry"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="fs-1 p-2 text-white"
              />
            </a>
          </div>
          <a
            className="consultation social-icon btn-hover mx-4 bg-black rounded-pill text-white text-center text-uppercase py-2 px-4 animate__animated animate__fadeInUp animate__slower"
            href="mailto:contact@pctranlaw.com?subject=PCT Law Inquiry"
          >
            Free Consultation{" "}
            <FontAwesomeIcon className="text-pink" icon={faChevronRight} />
          </a>
        </div>
      ) : (
        <>
          <div className="Social position-fixed bottom-0 d-flex flex-column animate__animated animate__fadeInLeft animate__slower">
            <a
              className="btn-hover mx-4 mb-5"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="social-icon btn-hover fs-3 p-2 text-white bg-black rounded-pill"
              />
            </a>
            <a
              className="btn-hover mx-4 mb-5"
              href="https://www.instagram.com/pctlawfirm/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="social-icon btn-hover fs-3 p-2 text-white bg-black rounded-pill"
              />
            </a>
            <a
              className="btn-hover mx-4 mb-5"
              href="mailto:contact@pctranlaw.com?subject=PCT Law Inquiry"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="social-icon btn-hover fs-3 p-2 text-white bg-black rounded-pill"
              />
            </a>
          </div>
          <a
            className="consultation position-fixed contact-btn border border-dark btn-hover mx-4 bg-black rounded-pill text-white text-center text-uppercase py-2 px-4 animate__animated animate__fadeInLeft animate__slower"
            href="mailto:contact@pctranlaw.com?subject=PCT Law Inquiry"
          >
            Free Consultation{" "}
            <FontAwesomeIcon className="text-pink" icon={faChevronRight} />
          </a>
        </>
      )}
    </>
  );
}

Social.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
};
