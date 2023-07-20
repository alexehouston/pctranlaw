import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container-fluid bg-white">
      <div className="ftr row d-flex justify-content-center align-items-center text-center text-black py-5">
        <div className="col-5 col-lg-2">
          <img src="/assets/PCT-logo.png" height="150" />
        </div>
        <div className="col-5 col-lg-2">
          <h6 className="ftr-title fs-4 text-uppercase text-start">Services</h6>
          <li className="text-start">
            <FontAwesomeIcon icon={faChevronRight} className="text-gold" />
            &ensp;Personal Injury
          </li>
          <li className="text-start">
            <FontAwesomeIcon icon={faChevronRight} className="text-gold" />
            &ensp;Intellectual Property
          </li>
          <li className="text-start">
            <FontAwesomeIcon icon={faChevronRight} className="text-gold" />
            &ensp;Business Law
          </li>
        </div>
      </div>
      <div className="row pb-5">
        <p className="copyright container-fluid text-center text-uppercase m-0 p-0 pb-3">
          Copyright © 2023 Pctranlaw. All rights reserved.
        </p>
      </div>
    </div>
  );
}
