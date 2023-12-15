import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Social.css";

export default function Social() {
  return (
    <>
      <div className="social-icon-container position-fixed d-flex animate__animated animate__fadeInLeft animate__slower">
        <a
          className="btn-hover mb-lg-5 mx-4 bg-black rounded-pill border border-dark btn-shadow btn-hover d-flex justify-content-center lh-1"
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="social-icon fs-3 text-white p-2 text-center"
          />
        </a>
        <a
          className="btn-hover mb-lg-5 mx-4 bg-black rounded-pill border border-dark btn-shadow btn-hover d-flex justify-content-center lh-1"
          href="https://www.instagram.com/pctlawfirm/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="social-icon fs-3 text-white p-2 text-center"
          />
        </a>
        <a
          className="btn-hover mb-lg-5 mx-4 bg-black rounded-pill border border-dark btn-shadow btn-hover d-flex justify-content-center lh-1"
          href="mailto:contact@pctranlaw.com?subject=PCT Law Inquiry"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="social-icon fs-3 text-white p-2 text-center"
          />
        </a>
      </div>
      <div className="consultation position-fixed">
        <a
          className="btn-shadow border border-dark btn-hover bg-black rounded-pill text-white text-center text-uppercase py-2 px-4 animate__animated animate__fadeInRight animate__slower"
          href="mailto:contact@pctranlaw.com?subject=PCT Law Inquiry"
        >
          Free Consultation{" "}
          <FontAwesomeIcon className="text-pink" icon={faChevronRight} />
        </a>
      </div>
    </>
  );
}
