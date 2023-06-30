import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faScaleBalanced,
  faGavel,
  faBuildingColumns,
  faSuitcaseMedical,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Iframe from "react-iframe";
import "./Home.css";

export default function Home({ isSmallScreen }) {
  return (
    <>
      {isSmallScreen ? (
        <div className="home-landing d-flex flex-column align-items-center home-text animate__animated animate__fadeInUp animate__slow mt-4 h-50">
          <img
            className="home-title pb-2 responsive-image"
            src="/assets/PCT-logo-txtonly.png"
          />
          <h1 className="home-subtitle text-uppercase ps-2 mt-3">
            Justice With Claws
          </h1>
          <a href="#PracticeAreas" className="btn-hover home-btn parallelogram text-uppercase mt-5">
            Learn More{" "}
            <FontAwesomeIcon icon={faChevronDown} className="ps-2 text-pink" />
          </a>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center home-text mt-3 mb-2 animate__animated animate__fadeInUp animate__slow h-50 mt-5 mb-5">
          <img
            className="home-title pb-2 responsive-image mt-5"
            src="/assets/PCT-logo-txtonly.png"
          />
          <h1 className="home-subtitle text-uppercase ps-2 mt-3">
            Justice With Claws
          </h1>
          <a href="#PracticeAreas" className="btn-hover home-btn parallelogram text-uppercase mt-5">
            Learn More{" "}
            <FontAwesomeIcon icon={faChevronDown} className="ps-2 text-pink" />
          </a>
        </div>
      )}

      {isSmallScreen ? (
        <div id="PracticeAreas" className="container-fluid p-0 pb-5 bg-black position-relative">
          <div className="container-fluid p-0 w-75 text-white">
            <h1 className="py-5 text-uppercase text-thin text-center">
              Our Practice Areas
            </h1>
            <div className="home-services d-flex justify-content-around">
              <div className="col-12 col-lg-2 position-relative parallelogram-inverse btn-hover">
                <div className="fs-1 ps-3 text-pink position-absolute top-0 start-0 ms-4 mt-3 w-75 d-flex justify-content-between align-items-center">
                  <span>1</span>
                  <FontAwesomeIcon icon={faSuitcaseMedical} />
                </div>
                <p className="fs-2 mt-5 pt-3 text-center pe-3">
                  Personal Injury
                </p>
              </div>
              <div className="col-12 col-lg-2 position-relative parallelogram-inverse btn-hover">
                <div className="fs-1 ps-3 text-pink position-absolute top-0 start-0 ms-4 mt-3 w-75 d-flex justify-content-between align-items-center">
                  <span>2</span>
                  <FontAwesomeIcon icon={faGavel} />
                </div>
                <p className="fs-2 mt-5 pt-3 text-center pe-3">
                  Intellectual Property
                </p>
              </div>
              <div className="col-12 col-lg-2 position-relative parallelogram-inverse btn-hover">
                <div className="fs-1 ps-3 text-pink position-absolute top-0 start-0 ms-4 mt-3 w-75 d-flex justify-content-between align-items-center">
                  <span>3</span>
                  <FontAwesomeIcon icon={faBuildingColumns} />
                </div>
                <p className="fs-2 mt-5 pt-3 text-center pe-3">Business Law</p>
              </div>
              <div className="col-12 col-lg-2 position-relative parallelogram-inverse btn-hover">
                <div className="fs-1 ps-3 text-pink position-absolute top-0 start-0 ms-4 mt-3 w-75 d-flex justify-content-between align-items-center">
                  <span>4</span>
                  <FontAwesomeIcon icon={faScaleBalanced} />
                </div>
                <p className="fs-2 mt-5 pt-3 text-center pe-3">
                  Real Estate Law
                </p>
              </div>
            </div>
          </div>
          <div className="container-fluid bg-black position-relative my-5 pb-5">
            &nbsp;
          </div>
        </div>
      ) : (
        <div id="PracticeAreas" className="container-fluid p-0 h-75 bg-black position-relative">
          <div className="container-fluid p-0 w-75 text-white">
            <h1 className="py-5 text-uppercase text-thin">
              Our Practice Areas
            </h1>
            <div className="pt-5 home-services d-flex justify-content-around">
              <div className="col-12 col-lg-2 position-relative parallelogram-inverse btn-hover">
                <div className="fs-3 ps-3 text-pink position-absolute top-0 start-0 ms-4 mt-3 w-75 d-flex justify-content-between align-items-center">
                  <span>1</span>
                  <FontAwesomeIcon icon={faSuitcaseMedical} />
                </div>
                <p className="fs-5 mt-5 pt-3 text-center pe-3">
                  Personal Injury
                </p>
              </div>
              <div className="col-12 col-lg-2 position-relative parallelogram-inverse btn-hover">
                <div className="fs-3 ps-3 text-pink position-absolute top-0 start-0 ms-4 mt-3 w-75 d-flex justify-content-between align-items-center">
                  <span>2</span>
                  <FontAwesomeIcon icon={faGavel} />
                </div>
                <p className="fs-5 mt-5 pt-3 text-center pe-3">
                  Intellectual Property
                </p>
              </div>
              <div className="col-12 col-lg-2 position-relative parallelogram-inverse btn-hover">
                <div className="fs-3 ps-3 text-pink position-absolute top-0 start-0 ms-4 mt-3 w-75 d-flex justify-content-between align-items-center">
                  <span>3</span>
                  <FontAwesomeIcon icon={faBuildingColumns} />
                </div>
                <p className="fs-5 mt-5 pt-3 text-center pe-3">Business Law</p>
              </div>
              <div className="col-12 col-lg-2 position-relative parallelogram-inverse btn-hover">
                <div className="fs-3 ps-3 text-pink position-absolute top-0 start-0 ms-4 mt-3 w-75 d-flex justify-content-between align-items-center">
                  <span>4</span>
                  <FontAwesomeIcon icon={faScaleBalanced} />
                </div>
                <p className="fs-5 mt-5 pt-3 text-center pe-3">
                  Real Estate Law
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {isSmallScreen ? (
        <div className="container-fluid bg-black pb-5">
          <div className="home-about mx-auto position-relative bg-white shadow px-4 rounded d-flex flex-column">
            <h1 className="pt-4 text-uppercase text-center">
              <div className="about-priscilla fs-1">
                <span className="text-thin">About Attorney</span> Priscilla C.
                Tran
              </div>
            </h1>
            <div className="mx-auto py-3">
              <img
                className="rounded about-img"
                src="https://drummoynetherapycentre.com.au/wp-content/uploads/2019/08/Headshot-Placeholder-Female-1.jpg"
                width="100%"
              />
              <p className="text-center pt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
                nulla aliquet porttitor lacus. Eleifend mi in nulla posuere
                sollicitudin aliquam ultrices sagittis. Viverra nam libero justo
                laoreet sit amet cursus. Proin nibh nisl condimentum id
                venenatis a condimentum. Massa tincidunt dui ut ornare. Lorem
                donec massa sapien faucibus et molestie ac feugiat sed. Duis
                tristique sollicitudin nibh sit.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid bg-white h-75">
          <div className="home-about w-75 mx-auto position-relative bg-white shadow px-5 rounded d-flex">
            <div className="pe-5 col-lg-7 pb-4">
              <h1 className="pt-5 pb-4 text-uppercase">
                <div className="about-priscilla me-5">
                  <span className="text-thin">About Attorney</span> Priscilla C.
                  Tran
                </div>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
                nulla aliquet porttitor lacus. Eleifend mi in nulla posuere
                sollicitudin aliquam ultrices sagittis. Viverra nam libero justo
                laoreet sit amet cursus. Proin nibh nisl condimentum id
                venenatis a condimentum. Massa tincidunt dui ut ornare. Lorem
                donec massa sapien faucibus et molestie ac feugiat sed. Duis
                tristique sollicitudin nibh sit. Semper risus in hendrerit
                gravida rutrum quisque non. Commodo quis imperdiet massa
                tincidunt nunc pulvinar. Sed ullamcorper morbi tincidunt ornare
                massa. Tempus quam pellentesque nec nam aliquam sem et. Posuere
                urna nec tincidunt praesent semper feugiat nibh sed pulvinar.
                Malesuada pellentesque elit eget gravida cum sociis natoque
                penatibus. Donec pretium vulputate sapien nec sagittis aliquam
                malesuada. A lacus vestibulum sed arcu non odio euismod lacinia
                at. In vitae turpis massa sed elementum. Malesuada pellentesque
                elit eget gravida cum sociis. Risus viverra adipiscing at in
                tellus. Lobortis elementum nibh tellus molestie nunc non
                blandit. Massa tincidunt dui ut ornare. Lorem donec massa sapien
                faucibus et molestie ac feugiat sed. Duis tristique
                sollicitudin.
              </p>
            </div>
            <div className="col-lg-5 h-75 m-auto">
              <img
                className="rounded about-img"
                src="https://drummoynetherapycentre.com.au/wp-content/uploads/2019/08/Headshot-Placeholder-Female-1.jpg"
                width="100%"
              />
            </div>
          </div>
        </div>
      )}

      {isSmallScreen ? (
        <div className="home-contact container-fluid bg-white">
          <div className="home-contact-inner container-fluid p-0">
            <h1 className="pt-5 pb-4 text-uppercase text-thin text-center">Contact Us</h1>
            <div className="d-flex pb-5 flex-column">
              <div className="col-12">
                <h2 className="text-center fs-4">Let Us Know How We Can Help!</h2>
                <div className="d-flex flex-column justify-content-center pt-4 pb-5 text-uppercase mx-auto">
                  <a href="tel:8327766979" className="btn-hover text-center bg-dark text-white rounded-pill h-50 p-3 my-2">
                    <FontAwesomeIcon
                      className="text-pink pe-2"
                      icon={faPhone}
                    />{" "}
                    (832) 776 - 6979
                  </a>
                  <a href="mailto:ptran@pctranlaw.com?subject=PCT Law Inquiry" className="btn-hover text-center bg-dark text-white rounded-pill h-50 p-3 my-2">
                    <FontAwesomeIcon
                      className="text-pink pe-2"
                      icon={faEnvelope}
                    />{" "}
                    ptran<span className="text-pink small">@</span>pctranlaw.com
                  </a>
                </div>
                <div className="row mx-auto pb-5 d-flex justify-content-center">
                  <div className="col-6">
                    <div className="input-group">
                      <p>
                        <span
                          className="form-control-wrap"
                          data-name="your-name"
                        >
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
                  <div className="col-6">
                    <div className="input-group">
                      <p>
                        <span
                          className="form-control-wrap"
                          data-name="your-email"
                        >
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
                  <div className="col-6">
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
                  <div className="col-6">
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
                  <div className="col-12">
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
                  <div className="col-12">
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
              <div className="col-12 shadow">
                <Iframe
                  className="border-0 rounded shadow container-fluid p-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.3534410827156!2d-95.4788744!3d29.738482599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3d8b898e3b1%3A0xc802476ac45119d8!2s5718%20Westheimer%20Rd%20%231125%2C%20Houston%2C%20TX%2077057!5e0!3m2!1sen!2sus!4v1688058584961!5m2!1sen!2sus"
                  height="100%"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="home-contact container-fluid bg-white pb-5">
          <div className="container-fluid p-0 w-75">
            <h1 className="py-5 text-uppercase text-thin">Contact Us</h1>
            <div className="d-flex pb-5">
              <div className="col-12 col-lg-5 shadow">
                <Iframe
                  className="border-0 rounded"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.3534410827156!2d-95.4788744!3d29.738482599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3d8b898e3b1%3A0xc802476ac45119d8!2s5718%20Westheimer%20Rd%20%231125%2C%20Houston%2C%20TX%2077057!5e0!3m2!1sen!2sus!4v1688058584961!5m2!1sen!2sus"
                  height="100%"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="col-12 col-lg-7 ps-5">
                <h2 className="text-center">Let Us Know How We Can Help!</h2>
                <div className="d-flex justify-content-around py-5 mb-2 text-uppercase w-75 mx-auto">
                  <a href="tel:8327766969" className="contact-btn btn-hover text-center bg-dark text-white rounded-pill h-50 p-3">
                    <FontAwesomeIcon
                      className="text-pink pe-2"
                      icon={faPhone}
                    />{" "}
                    (832) 776 - 6979
                  </a>
                  <a href="mailto:ptran@pctranlaw.com?subject=PCT Law Inquiry" className="contact-btn btn-hover text-center bg-dark text-white rounded-pill h-50 p-3">
                    <FontAwesomeIcon
                      className="text-pink pe-2"
                      icon={faEnvelope}
                    />{" "}
                    ptran<span className="text-pink small">@</span>pctranlaw.com
                  </a >
                </div>
                <div className="row mx-auto pb-3 d-flex justify-content-center">
                  <div className="col-5">
                    <div className="input-group">
                      <p>
                        <span
                          className="form-control-wrap"
                          data-name="your-name"
                        >
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
                  <div className="col-5">
                    <div className="input-group">
                      <p>
                        <span
                          className="form-control-wrap"
                          data-name="your-email"
                        >
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
                  <div className="col-5">
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
                  <div className="col-5">
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
                  <div className="col-10">
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
                  <div className="col-10">
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
        </div>
      )}
    </>
  );
}

Home.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
};
