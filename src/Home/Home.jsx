import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faScaleBalanced,
  faGavel,
  faBuildingColumns,
  faSuitcaseMedical,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import Iframe from "react-iframe";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home-banner container-fluid p-0 h-75"></div>

      <div className="home-text position-absolute top-50">
        <img
          className="home-title pb-5"
          src="/assets/PCT-logo-txtonly.png"
          width="600"
        />
        <h1 className="home-subtitle text-uppercase">Justice With Claws</h1>
        <div className="home-btn parallelogram text-uppercase mt-2">
          Learn More{" "}
          <FontAwesomeIcon icon={faChevronRight} className="ps-2 text-pink" />
        </div>
      </div>

      <div className="container-fluid p-0 bg-black">
        <div className="container-fluid p-0 w-75 text-white">
          <h1 className="py-5 text-uppercase text-thin">Our Practice Areas</h1>
          <div className="d-flex justify-content-between pb-5 home-services">
            <div className="col-2 position-relative parallelogram-inverse">
              <div className="fs-3 ps-3 text-pink position-absolute top-0 start-0 ms-4 mt-3 w-75 d-flex justify-content-between align-items-center">
                <span>1</span>
                <FontAwesomeIcon icon={faSuitcaseMedical} />
              </div>
              <p className="fs-5 mt-5 pt-3 text-center pe-3">Personal Injury</p>
            </div>
            <div className="col-2 position-relative parallelogram-inverse">
              <div className="fs-3 ps-3 text-pink position-absolute top-0 start-0 ms-4 mt-3 w-75 d-flex justify-content-between align-items-center">
                <span>2</span>
                <FontAwesomeIcon icon={faGavel} />
              </div>
              <p className="fs-5 mt-5 pt-3 text-center pe-3">
                Intellectual Property
              </p>
            </div>
            <div className="col-2 position-relative parallelogram-inverse">
              <div className="fs-3 ps-3 text-pink position-absolute top-0 start-0 ms-4 mt-3 w-75 d-flex justify-content-between align-items-center">
                <span>3</span>
                <FontAwesomeIcon icon={faBuildingColumns} />
              </div>
              <p className="fs-5 mt-5 pt-3 text-center pe-3">Business Law</p>
            </div>
            <div className="col-2 position-relative parallelogram-inverse">
              <div className="fs-3 ps-3 text-pink position-absolute top-0 start-0 ms-4 mt-3 w-75 d-flex justify-content-between align-items-center">
                <span>4</span>
                <FontAwesomeIcon icon={faScaleBalanced} />
              </div>
              <p className="fs-5 mt-5 pt-3 text-center pe-3">Real Estate Law</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0 w-75">
        <h1 className="py-5 text-uppercase text-thin">Contact Us</h1>
        <div className="d-flex pb-5 home-contact">
          <div className="col-6">
            <Iframe
              className="border-0 rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.3534410827156!2d-95.4788744!3d29.738482599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3d8b898e3b1%3A0xc802476ac45119d8!2s5718%20Westheimer%20Rd%20%231125%2C%20Houston%2C%20TX%2077057!5e0!3m2!1sen!2sus!4v1688058584961!5m2!1sen!2sus"
              width="600"
              height="525"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="col-6">
            <h2 className="text-center">Let Us Know How We Can Help!</h2>
            <div className="d-flex justify-content-around py-5">
              <div className="d-flex flex-column align-items-center text-center">
                <FontAwesomeIcon
                  className="fs-4 p-3 mb-3 bg-dark text-pink rounded-pill"
                  icon={faPhone}
                />{" "}
                (832) 776 - 6979
              </div>
              <div className="d-flex flex-column align-items-center text-center">
                <FontAwesomeIcon
                  className="fs-4 p-3 mb-3 bg-dark text-pink rounded-pill"
                  icon={faEnvelope}
                />{" "}
                ptran@pctranlaw.com
              </div>
            </div>
            <div className="row mx-auto pb-3">
              <div className="col-md-6">
                <div className="input-group">
                  <p>
                    <span className="form-control-wrap" data-name="your-name">
                      <input
                        size="40"
                        className="form-control text col-6"
                        aria-invalid="false"
                        placeholder="Name"
                        value=""
                        type="text"
                        name="your-name"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <p>
                    <span className="form-control-wrap" data-name="your-email">
                      <input
                        size="40"
                        className="form-control text"
                        aria-invalid="false"
                        placeholder="Email"
                        value=""
                        type="text"
                        name="your-email"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <p>
                    <span className="form-control-wrap" data-name="phone">
                      <input
                        size="40"
                        className="form-control text"
                        aria-invalid="false"
                        placeholder="Phone"
                        value=""
                        type="text"
                        name="phone"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <p>
                    <span className="form-control-wrap" data-name="text-99">
                      <input
                        size="40"
                        className="form-control text"
                        aria-invalid="false"
                        placeholder="Subject"
                        value=""
                        type="text"
                        name="text-99"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-group input-button">
                  <p>
                    <span className="form-control-wrap" data-name="message">
                      <textarea
                        cols="80"
                        rows="4"
                        className="form-control"
                        aria-invalid="false"
                        placeholder="Brief Description of Your Legal Issue"
                        name="message"
                      ></textarea>
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-group input-button">
                  <input
                    className="form-control"
                    type="submit"
                    value="SEND MESSAGE"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
