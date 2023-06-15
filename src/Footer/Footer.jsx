import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container-fluid bg-black position-relative">
        <div className="ftr-head row text-white p-3 text-uppercase">
            <div className="ftr-social col-6 col-lg-10 text-thin">Follow Us On Social Media</div>
            <li className="col-6 col-lg-2 d-flex align-items-center justify-content-end">
                <a className="text-white" href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className="social-icon pe-4" /></a>
                <a className="text-white" href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className="social-icon px-4" /></a>
                <a className="text-white" href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="social-icon ps-4" /></a>
          </li>
        </div>
        <div className="row d-flex justify-content-center text-center text-white py-5">
            <div className="col-4 col-lg-2">
                <h6 className="ftr-title text-uppercase">Services</h6>
                <li className="ftr-link"><FontAwesomeIcon icon={faChevronRight} className="ftr-chevron text-pink" />&ensp;Business</li>
                <li className="ftr-link"><FontAwesomeIcon icon={faChevronRight} className="ftr-chevron text-pink" />&ensp;Personal</li>
                <li className="ftr-link"><FontAwesomeIcon icon={faChevronRight} className="ftr-chevron text-pink" />&ensp;Financial</li>
            </div>
            <div className="col-4 col-lg-1">
                <img src="https://pctranlaw.thetawarrior.com/wp-content/uploads/2023/04/PCT-Law-3D-Logo_White-Tiger-280.png" height="100" />
            </div>
            <div className="col-4 col-lg-2">
                <h6 className="ftr-title text-uppercase">Contact</h6>
                <li className="ftr-link"><FontAwesomeIcon icon={faChevronRight} className="ftr-chevron text-pink" />&ensp;Business</li>
                <li className="ftr-link"><FontAwesomeIcon icon={faChevronRight} className="ftr-chevron text-pink" />&ensp;Personal</li>
                <li className="ftr-link"><FontAwesomeIcon icon={faChevronRight} className="ftr-chevron text-pink" />&ensp;Financial</li>
            </div>
        </div>
        <div className="row position-absolute bottom-0 w-100">
            <p className="copyright container-fluid text-center text-white opacity-25 text-uppercase m-0 p-0">Copyright © 2023 Pctranlaw. All rights reserved.</p>
        </div>
    </div>
  );
}
