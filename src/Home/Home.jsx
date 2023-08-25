import PropTypes from "prop-types";
import { useEffect } from "react";
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faScaleBalanced,
  faCar,
  faPhone,
  faEnvelope,
  faChevronRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

export default function Home({ isSmallScreen }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <div className="home-landing d-flex flex-column align-items-center home-text animate__animated animate__fadeInUp animate__slow pt-5">
          <Logo />
          <img
            className="home-title pb-2 responsive-image pt-3"
            src="/assets/PCT-logo-txtonly.png"
          />
          <h1 className="home-subtitle text-uppercase ps-2 mt-3">
            Justice With Claws
          </h1>
        </div>
      ) : (
        <div className="home-landing home-text animate__animated animate__fadeInUp animate__slow h-100">
          <div className="home-landing-inner position-absolute d-flex flex-column align-items-center">
            <Logo />
            <img
              className="home-title pb-2 responsive-image mt-5"
              src="/assets/PCT-logo-txtonly.png"
            />
            <h1 className="home-subtitle text-uppercase ps-2 mt-3">
              Justice With Claws
            </h1>
          </div>
        </div>
      )}

      {isSmallScreen ? (
        <div className="container-fluid p-0 pb-5 bg-black position-relative">
          <div className="container-fluid p-0 w-75 text-white">
            <h1 className="py-5 text-uppercase text-thin text-center">
              Our Practice Areas
            </h1>
            <div className="home-services d-flex justify-content-around">
              <div
                className="practices floating bg-white col-12 col-lg-3 btn-hover rounded py-2"
                data-bs-toggle="modal"
                data-bs-target="#personalInjuryModal"
              >
                <div className="fs-1 px-4 pt-3 text-center">
                  <FontAwesomeIcon
                    icon={faCar}
                    className="bg-black p-3 rounded-pill shadow text-pink"
                  />
                </div>
                <p className="text-white fs-1 text-uppercase text-center pt-3">
                  Personal
                  <br />
                  Injury
                </p>
              </div>
              <div
                className="practices floating col-12 col-lg-3 btn-hover rounded py-2"
                data-bs-toggle="modal"
                data-bs-target="#intellectualPropertyModal"
              >
                <div className="fs-1 px-4 pt-3 text-center">
                  <FontAwesomeIcon
                    icon={faFolderOpen}
                    className="bg-black p-3 rounded-pill shadow text-pink"
                  />
                </div>
                <p className="text-white fs-1 text-uppercase text-center pt-3">
                  Intellectual
                  <br />
                  Property
                </p>
              </div>
              <div
                className="practices floating col-12 col-lg-3 btn-hover rounded py-2"
                data-bs-toggle="modal"
                data-bs-target="#businessLawModal"
              >
                <div className="fs-1 px-4 pt-3 text-center">
                  <FontAwesomeIcon
                    icon={faScaleBalanced}
                    className="bg-black p-3 rounded-pill shadow text-pink"
                  />
                </div>
                <p className="text-white fs-1 text-uppercase text-center pt-3">
                  Business
                  <br />
                  Law
                </p>
              </div>
            </div>
          </div>
          <div className="container-fluid bg-black position-relative my-5 pb-5">
            &nbsp;
          </div>
        </div>
      ) : (
        <div className="practices-container container-fluid p-0 bg-black mb-5">
          <div
            className="container-fluid p-0 w-75 text-white"
            data-aos="fade-up"
          >
            <h1 className="py-5 text-uppercase text-thin">
              Our Practice Areas
            </h1>
            <div className="py-5 home-services d-flex justify-content-around">
              <div
                className="practices floating bg-white btn-hover rounded py-4"
                data-bs-toggle="modal"
                data-bs-target="#personalInjuryModal"
              >
                <div className="fs-2 px-4 pt-3 text-center">
                  <FontAwesomeIcon
                    icon={faCar}
                    className="bg-black p-3 rounded-pill shadow text-pink"
                  />
                </div>
                <p className="text-white fs-3 text-uppercase text-center pt-3">
                  Personal
                  <br />
                  Injury
                </p>
              </div>
              <div
                className="practices floating btn-hover rounded py-4"
                data-bs-toggle="modal"
                data-bs-target="#intellectualPropertyModal"
              >
                <div className="fs-2 px-4 pt-3 text-center">
                  <FontAwesomeIcon
                    icon={faFolderOpen}
                    className="bg-black p-3 rounded-pill shadow text-pink"
                  />
                </div>
                <p className="text-white fs-3 text-uppercase text-center pt-3">
                  Intellectual
                  <br />
                  Property
                </p>
              </div>
              <div
                className="practices floating btn-hover rounded py-4"
                data-bs-toggle="modal"
                data-bs-target="#businessLawModal"
              >
                <div className="fs-2 px-4 pt-3 text-center">
                  <FontAwesomeIcon
                    icon={faScaleBalanced}
                    className="bg-black p-3 rounded-pill shadow text-pink"
                  />
                </div>
                <p className="text-white fs-3 text-uppercase text-center pt-3">
                  Business
                  <br />
                  Law
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
            <div className="mx-auto pt-4">
              <p className="text-center">
                <span className="fs-2 lh-1">Lorem</span> ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Enim nulla aliquet porttitor
                lacus. Eleifend mi in nulla posuere sollicitudin aliquam
                ultrices sagittis. Viverra nam libero justo laoreet sit amet
                cursus. Proin nibh nisl condimentum id venenatis a condimentum.
                Massa tincidunt dui ut ornare. Lorem donec massa sapien faucibus
                et molestie ac feugiat sed.
              </p>
              <img
                className="w-100"
                src="/assets/headshots/priscilla_2_transparent.png"
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="home-about w-75 mx-auto bg-white shadow px-5 rounded position-relative"
          data-aos="fade-up"
        >
          <div className="row">
            <h1 className="pt-5 pb-4 text-uppercase">
              <div className="about-priscilla">
                <span className="text-thin">About Attorney</span> Priscilla C.
                Tran
              </div>
            </h1>
          </div>
          {/* <div className="row w-100"> */}
          <div className="col-12 col-lg-6 pb-4">
            <p className="about-text">
              <span className="fs-2 lh-1">Lorem</span> ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus.
              Eleifend mi in nulla posuere sollicitudin aliquam ultrices
              sagittis. Viverra nam libero justo laoreet sit amet cursus. Proin
              nibh nisl condimentum id venenatis a condimentum. Massa tincidunt
              dui ut ornare. Lorem donec massa sapien faucibus et molestie ac
              feugiat sed. Duis tristique sollicitudin nibh sit. Semper risus in
              hendrerit gravida rutrum quisque non. Commodo quis imperdiet massa
              tincidunt nunc pulvinar. Sed ullamcorper morbi tincidunt ornare
              massa. Tempus quam pellentesque nec nam aliquam sem et. Posuere
              urna nec tincidunt praesent semper feugiat nibh sed pulvinar.
              Malesuada pellentesque elit eget gravida cum sociis natoque
              penatibus. Donec pretium vulputate sapien nec sagittis aliquam
              malesuada. A lacus vestibulum sed arcu non odio euismod lacinia
              at. In vitae turpis massa sed elementum. Malesuada pellentesque
              elit eget gravida cum sociis. Risus viverra adipiscing at in
              tellus. Lobortis elementum nibh tellus molestie nunc non blandit.
              Massa tincidunt dui ut ornare. Lorem donec massa sapien faucibus
              et molestie ac feugiat sed.
            </p>
          </div>
          <div className="about-photo col-lg-6 position-absolute bottom-0 end-0 d-flex justify-content-center">
            <img
              src="/assets/headshots/priscilla_2_transparent.png"
              alt="Attorney Priscilla C. Tran"
            />
          </div>
        </div>
        // </div>
      )}

      {isSmallScreen ? (
        <div
          id="ContactUs"
          className="bg-white container-fluid p-0 w-75 pb-5"
          data-aos="fade-up"
        >
          <h1 className="py-5 mb-3 text-uppercase text-thin">Contact Us</h1>
          <div className="d-flex pb-5">
            <div>
              <div className="contact-img col-12 mx-auto d-flex justify-content-center pe-3">
                <img
                  className="w-75"
                  src="/assets/headshots/priscilla_3_transparent.png"
                />
              </div>
              <div className="d-flex justify-content-center text-center gold-plate p-4 rounded mx-auto shadow text-white">
                <form
                  className="text-center col-12"
                  name="contact"
                  method="POST"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="row mb-4">
                    <div className="col-6">
                      <input
                        className="form-control rounded p-2"
                        type="text"
                        placeholder="Name"
                        name="name"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        className="form-control rounded p-2"
                        type="phone"
                        placeholder="Phone"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-6">
                      <input
                        className="form-control rounded p-2"
                        type="email"
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        className="form-control rounded p-2"
                        type="text"
                        placeholder="Subject"
                        name="subject"
                      />
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col-12">
                      <textarea
                        className="form-control rounded p-2"
                        placeholder="Brief Summary of Legal Issue"
                        name="message"
                      ></textarea>
                    </div>
                  </div>
                  <fieldset className="mb-4">
                    <legend className="fs-6 pb-1">
                      Select a preferred method of contact
                    </legend>
                    <div className="row">
                      <div className="col-4">
                        <label className="wpforms-field-label-inline txt-shadow">
                          <input
                            type="checkbox"
                            className="form-check-input me-2"
                            name="preferredMethod[]"
                            value="Call"
                          />
                          Call
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="wpforms-field-label-inline txt-shadow">
                          <input
                            type="checkbox"
                            className="form-check-input me-2"
                            name="preferredMethod[]"
                            value="Text"
                          />
                          Text
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="wpforms-field-label-inline txt-shadow">
                          <input
                            type="checkbox"
                            className="form-check-input me-2"
                            name="preferredMethod[]"
                            value="Email"
                          />
                          Email
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <button
                    className="contact-btn btn-hover col-12 bg-black text-white border-0 rounded p-2"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-around text-uppercase">
            <a
              href="tel:8327766969"
              className="contact-btn btn-hover text-center bg-black text-white rounded-pill h-50 p-3"
            >
              <FontAwesomeIcon className="text-pink pe-2" icon={faPhone} />{" "}
              (832) 776 - 6979
            </a>
            <a
              href="mailto:contact@pctranlaw.com?subject=PCT Law Inquiry"
              className="contact-btn btn-hover text-center bg-black text-white rounded-pill h-50 p-3 mt-4"
            >
              <FontAwesomeIcon className="text-pink pe-2" icon={faEnvelope} />{" "}
              ptran<span className="text-pink small">@</span>
              pctranlaw.com
            </a>
          </div>
        </div>
      ) : (
        <div
          id="ContactUs"
          className="bg-white container-fluid p-0 w-75 my-5 pb-5"
          data-aos="fade-up"
        >
          <h1 className="py-5 text-uppercase text-thin">Contact Us</h1>
          <div className="col-12">
            <div className="row mx-auto">
              <div className="col-5 p-0 d-flex-column justify-content-between">
                <div className="h-100 d-flex flex-column justify-content-between text-uppercase">
                  <a
                    href="tel:8327766969"
                    className="contact-btn btn-hover text-center bg-black text-white rounded-pill p-3 my-3 w-75"
                  >
                    <FontAwesomeIcon
                      className="text-pink pe-2"
                      icon={faPhone}
                    />{" "}
                    (832) 776 - 6979
                  </a>
                  <a
                    href="mailto:contact@pctranlaw.com?subject=PCT Law Inquiry"
                    className="contact-btn btn-hover text-center bg-black text-white rounded-pill p-3 my-3 w-75"
                  >
                    <FontAwesomeIcon
                      className="text-pink pe-2"
                      icon={faEnvelope}
                    />{" "}
                    contact<span className="text-pink small">@</span>
                    pctranlaw.com
                  </a>
                  <div className="w-75 ">
                    <img
                      className="w-100 rounded shadow mt-5"
                      src="/assets/office.webp"
                      alt="Houston Office"
                    />
                    <div className="text-center mt-5">
                      <h4 className="visit-us w-75 mx-auto">Visit Our Office</h4>
                      <a
                        href="https://www.google.com/maps/place/5718+Westheimer+Rd+1000+1125,+Houston,+TX+77057/@29.7384872,-95.4814493,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c3d8b898e3b1:0x29bce29c9e907e33!8m2!3d29.7384826!4d-95.4788744?entry=ttu"
                        target="_blank"
                        rel="noreferrer"
                        className="text-black"
                      >
                        <p className="underline-animation">
                          5718 Westheimer Road
                          <br />
                          Suite 1000-1125
                          <br />
                          Houston, TX 77057
                        </p>
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/5718+Westheimer+Rd+1000+1125,+Houston,+TX+77057/@29.7384872,-95.4814493,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c3d8b898e3b1:0x29bce29c9e907e33!8m2!3d29.7384826!4d-95.4788744?entry=ttu"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-btn btn-hover text-center bg-black text-white rounded-pill p-3 my-3 w-75"
                  >
                    <FontAwesomeIcon
                      className="text-pink pe-2"
                      icon={faLocationDot}
                    />{" "}
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="col-7 gold-plate rounded shadow">
                <div className="contact-img mx-auto w-50 d-flex justify-content-center pe-5 w-75">
                  <img
                    className="w-75"
                    src="/assets/headshots/priscilla_3_transparent.png"
                  />
                </div>
                <div className="contact-form d-flex justify-content-center text-center gold-plate p-5 rounded mx-auto mb-5 shadow text-white">
                  <form
                    className="text-center col-12"
                    name="contact"
                    method="POST"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="row mb-4">
                      <div className="col-6">
                        <input
                          className="form-control rounded p-2"
                          type="text"
                          placeholder="Name"
                          name="name"
                        />
                      </div>
                      <div className="col-6">
                        <input
                          className="form-control rounded p-2"
                          type="phone"
                          placeholder="Phone"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-6">
                        <input
                          className="form-control rounded p-2"
                          type="email"
                          placeholder="Email"
                          name="email"
                        />
                      </div>
                      <div className="col-6">
                        <input
                          className="form-control rounded p-2"
                          type="text"
                          placeholder="Subject"
                          name="subject"
                        />
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-12">
                        <textarea
                          className="form-control rounded p-2"
                          placeholder="Brief Summary of Legal Issue"
                          name="message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-12">
                        <input
                          className="form-control rounded p-2"
                          type="file"
                          name="attachment"
                          accept=".pdf, .doc, .docx"
                        />
                      </div>
                    </div>
                    <fieldset className="mb-4">
                      <legend className="fs-5 pb-1">
                        Select a preferred method of contact
                      </legend>
                      <div className="row">
                        <div className="col-4">
                          <label className="wpforms-field-label-inline txt-shadow">
                            <input
                              type="checkbox"
                              className="form-check-input me-2"
                              name="contact-method"
                              value="Call"
                            />
                            <FontAwesomeIcon
                              className="text-pink"
                              icon={faPhone}
                            />{" "}
                            Call
                          </label>
                        </div>
                        <div className="col-4">
                          <label className="wpforms-field-label-inline txt-shadow">
                            <input
                              type="checkbox"
                              className="form-check-input me-2"
                              name="contact-method"
                              value="Text"
                            />
                            <FontAwesomeIcon
                              className="text-pink"
                              icon={faPhone}
                            />{" "}
                            Text
                          </label>
                        </div>
                        <div className="col-4">
                          <label className="wpforms-field-label-inline txt-shadow">
                            <input
                              type="checkbox"
                              className="form-check-input me-2"
                              name="contact-method"
                              value="Email"
                            />
                            <FontAwesomeIcon
                              className="text-pink"
                              icon={faEnvelope}
                            />{" "}
                            Email
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    <button
                      className="contact-btn btn-hover col-4 bg-black text-white border-0 rounded p-2"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-black container-fluid h-75 d-flex flex-column">
        <div
          className="container-fluid w-75 d-flex flex-column"
          data-aos="fade-up"
        >
          <h1 className="mt-4 py-5 text-uppercase text-white text-thin">
            Client Testimonials
          </h1>
          <div className="mt-4 d-flex justify-content-between">
            {isSmallScreen ? (
              <>
                <div id="testimonialCarousel" className="carousel slide">
                  <div className="carousel-indicators pb-4">
                    <button
                      type="button"
                      data-bs-target="#testimonialCarousel"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Testimonial 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#testimonialCarousel"
                      data-bs-slide-to="1"
                      aria-label="Testimonial 2"
                      className="mx-2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#testimonialCarousel"
                      data-bs-slide-to="2"
                      aria-label="Testimonial 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="card testimonial floating text-white">
                        <div className="card-body text-center p-4">
                          <p className="card-text">
                            &quot;Semper risus in hendrerit gravida rutrum
                            quisque non. Commodo quis imperdiet massa tincidunt
                            nunc pulvinar. Sed ullamcorper morbi tincidunt
                            ornare massa. Tempus quam pellentesque nec nam
                            aliquam sem et. Posuere urna nec tincidunt praesent
                            semper feugiat nibh sed pulvinar.&quot;
                          </p>
                          <h5 className="card-title txt-shadow fs-4">
                            - Priscilla C.
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="card testimonial floating text-white">
                        <div className="card-body text-center p-4">
                          <p className="card-text">
                            &quot;Semper risus in hendrerit gravida rutrum
                            quisque non. Commodo quis imperdiet massa tincidunt
                            nunc pulvinar. Sed ullamcorper morbi tincidunt
                            ornare massa. Tempus quam pellentesque nec nam
                            aliquam sem et. Posuere urna nec tincidunt praesent
                            semper feugiat nibh sed pulvinar.&quot;
                          </p>
                          <h5 className="card-title txt-shadow fs-4">
                            - Priscilla C.
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="card testimonial floating text-white">
                        <div className="card-body text-center p-4">
                          <p className="card-text">
                            &quot;Semper risus in hendrerit gravida rutrum
                            quisque non. Commodo quis imperdiet massa tincidunt
                            nunc pulvinar. Sed ullamcorper morbi tincidunt
                            ornare massa. Tempus quam pellentesque nec nam
                            aliquam sem et. Posuere urna nec tincidunt praesent
                            semper feugiat nibh sed pulvinar.&quot;
                          </p>
                          <h5 className="card-title txt-shadow fs-4">
                            - Priscilla C.
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="card testimonial floating text-white">
                  <div className="card-body text-center p-4">
                    <img
                      className="w-50"
                      src="/assets/stars-gold.png"
                      alt="Stars"
                    />
                    <p className="card-text card-text-desktop pt-4 pb-2">
                      &quot;Semper risus in hendrerit gravida rutrum quisque
                      non. Commodo quis imperdiet massa tincidunt nunc pulvinar.
                      Sed ullamcorper morbi tincidunt ornare massa. Tempus quam
                      pellentesque nec nam aliquam sem et.&quot;
                    </p>
                    <h5 className="card-title contact-btn bg-black rounded-pill p-2 mx-auto txt-shadow fs-4 text-uppercase">
                      Priscilla C.
                    </h5>
                  </div>
                </div>
                <div className="card testimonial floating text-white mx-5">
                  <div className="card-body text-center p-4">
                    <img
                      className="w-50"
                      src="/assets/stars-gold.png"
                      alt="Stars"
                    />
                    <p className="card-text card-text-desktop pt-4 pb-2">
                      &quot;Semper risus in hendrerit gravida rutrum quisque
                      non. Commodo quis imperdiet massa tincidunt nunc pulvinar.
                      Sed ullamcorper morbi tincidunt ornare massa. Tempus quam
                      pellentesque nec nam aliquam sem et.&quot;
                    </p>
                    <h5 className="card-title contact-btn bg-black rounded-pill p-2 mx-auto txt-shadow fs-4 text-uppercase">
                      Priscilla C.
                    </h5>
                  </div>
                </div>
                <div className="card testimonial floating text-white">
                  <div className="card-body text-center p-4">
                    <img
                      className="w-50"
                      src="/assets/stars-gold.png"
                      alt="Stars"
                    />
                    <p className="card-text card-text-desktop pt-4 pb-2">
                      &quot;Semper risus in hendrerit gravida rutrum quisque
                      non. Commodo quis imperdiet massa tincidunt nunc pulvinar.
                      Sed ullamcorper morbi tincidunt ornare massa. Tempus quam
                      pellentesque nec nam aliquam sem et.&quot;
                    </p>
                    <h5 className="card-title contact-btn bg-black rounded-pill p-2 mx-auto txt-shadow fs-4 text-uppercase">
                      Priscilla C.
                    </h5>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}

      <div
        className="modal modal-lg fade"
        id="personalInjuryModal"
        tabIndex="-1"
        aria-labelledby="personalInjuryModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-3 w-100 text-center"
                id="personalInjuryModalLabel"
              >
                Personal Injury
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <p>
                In broad terms, personal injury law deals with legal disputes
                that arise when one person suffers an injury due to another
                personn&apos;s negligence or wrongful conduct. Unlike criminal
                law, personal injury cases do not involve the government
                prosecuting the wrongdoer. Instead, a private plaintiff, the
                person who is claiming an injury occurred, seeks compensation
                from a defendant, the person or business accused of causing that
                injury.
              </p>
              <p>
                Personal injury claims can result from accidents as well as
                intentional acts.
                <br />
                Common types of personal injury claims include:
              </p>
              <p className="">
                <span className="fw-bold">Auto Accidents</span> |{" "}
                <span className="fw-bold">Trucking Accidents</span> |{" "}
                <span className="fw-bold">Workplace Accidents</span> |{" "}
                <span className="fw-bold">Premises Liability</span> |{" "}
                <span className="fw-bold">Product Liability</span>
                <br />
                <span className="fw-bold">Medical Malpractice</span> |{" "}
                <span className="fw-bold">Assaults</span> |{" "}
                <span className="fw-bold">Child Abuse</span> |{" "}
                <span className="fw-bold">Negligent Security</span> |{" "}
                <span className="fw-bold">Wrongful Death</span>
              </p>
              <small>* Consultations will start at $250/hour. *</small>
            </div>
            <div className="modal-footer d-flex justify-content-center align-items-center">
              <a className="modal-btn contact-btn btn-hover text-uppercase text-center bg-black text-white rounded-pill h-50 p-3 mt-3 mb-4">
                Intake Form
                <FontAwesomeIcon
                  className="text-pink ps-2"
                  icon={faChevronRight}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal modal-lg fade"
        id="intellectualPropertyModal"
        tabIndex="-1"
        aria-labelledby="intellectualPropertyModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-3 w-100 text-center"
                id="intellectualPropertyModalLabel"
              >
                Intellectual Property
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <p>
                In broad terms, personal injury law deals with legal disputes
                that arise when one person suffers an injury due to another
                person&apos;s negligence or wrongful conduct. Unlike criminal
                law, personal injury cases do not involve the government
                prosecuting the wrongdoer. Instead, a private plaintiff, the
                person who is claiming an injury occurred, seeks compensation
                from a defendant, the person or business accused of causing that
                injury.
              </p>
              <p>
                Personal injury claims can result from accidents as well as
                intentional acts.
                <br />
                Common types of personal injury claims include:
              </p>
              <p className="">
                <span className="fw-bold">Auto Accidents</span> |{" "}
                <span className="fw-bold">Trucking Accidents</span> |{" "}
                <span className="fw-bold">Workplace Accidents</span> |{" "}
                <span className="fw-bold">Premises Liability</span> |{" "}
                <span className="fw-bold">Product Liability</span>
                <br />
                <span className="fw-bold">Medical Malpractice</span> |{" "}
                <span className="fw-bold">Assaults</span> |{" "}
                <span className="fw-bold">Child Abuse</span> |{" "}
                <span className="fw-bold">Negligent Security</span> |{" "}
                <span className="fw-bold">Wrongful Death</span>
              </p>
              <small>* Consultations will start at $250/hour. *</small>
            </div>
            <div className="modal-footer d-flex justify-content-center align-items-center">
              <a className="modal-btn contact-btn btn-hover text-uppercase text-center bg-black text-white rounded-pill h-50 p-3 mt-3 mb-4">
                Get A Consultation
                <FontAwesomeIcon
                  className="text-pink ps-2"
                  icon={faChevronRight}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal modal-lg fade"
        id="businessLawModal"
        tabIndex="-1"
        aria-labelledby="businessLawModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-3 w-100 text-center"
                id="businessLawModalLabel"
              >
                Business Law
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <p>
                In broad terms, personal injury law deals with legal disputes
                that arise when one person suffers an injury due to another
                personn&apos;s negligence or wrongful conduct. Unlike criminal
                law, personal injury cases do not involve the government
                prosecuting the wrongdoer. Instead, a private plaintiff, the
                person who is claiming an injury occurred, seeks compensation
                from a defendant, the person or business accused of causing that
                injury.
              </p>
              <p>
                Personal injury claims can result from accidents as well as
                intentional acts.
                <br />
                Common types of personal injury claims include:
              </p>
              <p className="">
                <span className="fw-bold">Auto Accidents</span> |{" "}
                <span className="fw-bold">Trucking Accidents</span> |{" "}
                <span className="fw-bold">Workplace Accidents</span> |{" "}
                <span className="fw-bold">Premises Liability</span> |{" "}
                <span className="fw-bold">Product Liability</span>
                <br />
                <span className="fw-bold">Medical Malpractice</span> |{" "}
                <span className="fw-bold">Assaults</span> |{" "}
                <span className="fw-bold">Child Abuse</span> |{" "}
                <span className="fw-bold">Negligent Security</span> |{" "}
                <span className="fw-bold">Wrongful Death</span>
              </p>
              <small>* Consultations will start at $250/hour. *</small>
            </div>
            <div className="modal-footer d-flex justify-content-center align-items-center">
              <a className="modal-btn contact-btn btn-hover text-uppercase text-center bg-black text-white rounded-pill h-50 p-3 mt-3 mb-4">
                Get A Consultation
                <FontAwesomeIcon
                  className="text-pink ps-2"
                  icon={faChevronRight}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Home.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
};
