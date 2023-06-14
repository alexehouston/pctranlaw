import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container-fluid bg-black position-relative">
        <div className="ftr-head row text-white p-3 text-uppercase">
            <div className="ftr-social col-10 text-thin">Follow Us On Social Media</div>
            <li className="col-2 text-end">
                <a className="text-white" href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className="social-icon px-4" /></a>
                <a className="text-white" href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className="social-icon px-4" /></a>
                <a className="text-white" href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="social-icon px-4" /></a>
          </li>
        </div>
        <div className="row mx-auto text-center text-white w-50 py-5">
            <div className="col-4">
                <h6 className="ftr-title text-uppercase">Our Services</h6>
                <li className="ftr-link"><FontAwesomeIcon icon={faChevronRight} className="ftr-chevron ps-2 text-pink" />&ensp;Business</li>
                <li className="ftr-link"><FontAwesomeIcon icon={faChevronRight} className="ftr-chevron ps-2 text-pink" />&ensp;Personal</li>
                <li className="ftr-link"><FontAwesomeIcon icon={faChevronRight} className="ftr-chevron ps-2 text-pink" />&ensp;Financial</li>
                <li className="ftr-link"><FontAwesomeIcon icon={faChevronRight} className="ftr-chevron ps-2 text-pink" />&ensp;Criminal</li>
                <li className="ftr-link"><FontAwesomeIcon icon={faChevronRight} className="ftr-chevron ps-2 text-pink" />&ensp;Employment</li>
            </div>
            <div className="col-4">
                <img src="https://pctranlaw.thetawarrior.com/wp-content/uploads/2023/04/PCT-Law-3D-Logo_White-Tiger-280.png" height="100" />
            </div>
            <div className="col-4">
                <h6 className="ftr-title text-uppercase">Contact Us</h6>
                <li className="ftr-link">Link 1</li>
                <li className="ftr-link">Link 2</li>
                <li className="ftr-link">Link 3</li>
            </div>
        </div>
        <div className="row position-absolute bottom-0 w-100">
            <p className="copyright container-fluid text-center text-white opacity-25 text-uppercase m-0 p-0">Copyright © 2023 Pctranlaw. All rights reserved.</p>
        </div>
    </div>
  );
}
