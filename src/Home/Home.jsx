import PropTypes from "prop-types";
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faScaleBalanced,
  faCar,
  faPhone,
  faEnvelope,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

export default function Home({ isSmallScreen }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        alert("Error submitting form. Please try again later.");
        console.error(error);
      });
  };

  return (
    <>
      {isSmallScreen ? (
        <div className="home-landing d-flex flex-column align-items-center home-text animate__animated animate__fadeInUp animate__slow h-100 pt-5">
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
        <div className="container-fluid p-0 h-100 bg-black mb-5">
          <div className="container-fluid p-0 w-75 text-white">
            <h1 className="py-5 text-uppercase text-thin">
              Our Practice Areas
            </h1>
            <div className="py-5 mt-5 home-services d-flex justify-content-around">
              <div
                className="practices floating bg-white btn-hover rounded py-2"
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
                className="practices floating btn-hover rounded py-2"
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
                className="practices floating btn-hover rounded py-2"
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
        <div className="home-about w-75 mx-auto bg-white shadow px-5 rounded">
          <div className="row w-100 text-center">
            <h1 className="pt-5 pb-4 text-uppercase">
              <div className="about-priscilla">
                <span className="text-thin">About Attorney</span> Priscilla C.
                Tran
              </div>
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <p className="about-text pe-4">
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
                faucibus et molestie ac feugiat sed. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Enim nulla aliquet porttitor
                lacus. Eleifend mi in nulla posuere sollicitudin aliquam
                ultrices sagittis. Commodo quis imperdiet massa tincidunt nunc
                pulvinar. Sed ullamcorper morbi tincidunt ornare massa. Tempus
                quam pellentesque nec nam aliquam sem et. Posuere urna nec
                tincidunt praesent semper feugiat nibh sed pulvinar. Malesuada
                pellentesque elit eget gravida cum sociis natoque penatibus. A
                lacus vestibulum sed arcu non odio euismod lacinia at. In vitae
                turpis massa sed elementum. Malesuada pellentesque elit eget
                gravida cum sociis. Risus viverra adipiscing at ua. Enim nulla
                aliquet porttitor lacus. Eleifend mi in nulla posuere
                sollicitudin aliquam ultrices sagittis. Commodo quis imperdiet
                massa tincidunt nunc pulvinar. Sed ullamcorper morbi dui ut
                ornare. Lorem donec massa sapien faucibus et molestie ac feugiat
                sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Enim nulla aliquet porttitor lacus. Eleifend mi in
                nulla.
              </p>
            </div>
            <div className="col-lg-5 d-flex align-items-center justify-content-center h-100">
              <img
                className="rounded about-img mb-5 shadow"
                src="https://wallisphoto.com/IMAGES/2020/headshots/female-attorney-headshot-oc.jpg"
                width="75%"
                alt="Attorney Priscilla C. Tran"
              />
            </div>
          </div>
        </div>
      )}

      {isSmallScreen ? (
        <div className="home-contact container-fluid bg-white">
          <div className="home-contact-inner container-fluid p-0">
            <h1 className="pt-5 pb-4 text-uppercase text-thin text-center">
              Contact Us
            </h1>
            <div className="d-flex pb-5 flex-column">
              <div className="col-12">
                <h2 className="text-center fs-4">
                  Let Us Know How We Can Help!
                </h2>
                <div className="d-flex flex-column justify-content-center pt-4 pb-5 text-uppercase mx-auto">
                  <a
                    href="tel:8327766979"
                    className="btn-hover text-center bg-dark text-white rounded-pill h-50 p-3 my-2"
                  >
                    <FontAwesomeIcon
                      className="text-pink pe-2"
                      icon={faPhone}
                    />{" "}
                    (832) 776 - 6979
                  </a>
                  <a
                    href="mailto:ptran@pctranlaw.com?subject=PCT Law Inquiry"
                    className="btn-hover text-center bg-dark text-white rounded-pill h-50 p-3 my-2"
                  >
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
                        className="form-control btn btn-primary"
                        type="submit"
                        value="SEND MESSAGE"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 shadow">
                <img
                  className="w-100 h-100 shadow rounded"
                  src="https://images.squarespace-cdn.com/content/v1/568e945169492e8fd6b31c79/1608159840897-QU9MFY76NRTX2168NEYK/_99A1837.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="ContactUs"
          className="bg-white container-fluid p-0 w-75 my-5 pb-5"
        >
          <h1 className="py-5 text-uppercase text-thin">Contact Us</h1>
          <div className="d-flex pb-5">
            <div className="col-12 col-lg-5">
              <img
                className="w-100 h-100 shadow rounded"
                src="https://images.squarespace-cdn.com/content/v1/568e945169492e8fd6b31c79/1608159840897-QU9MFY76NRTX2168NEYK/_99A1837.jpg"
              />
            </div>
            <div className="col-12 col-lg-7 ps-5">
              <h2 className="text-center">Let Us Know How We Can Help!</h2>
              <div className="d-flex justify-content-around py-5 mb-2 text-uppercase mx-auto w-75">
                <a
                  href="tel:8327766969"
                  className="contact-btn btn-hover text-center bg-dark text-white rounded-pill h-50 p-3"
                >
                  <FontAwesomeIcon className="text-pink pe-2" icon={faPhone} />{" "}
                  (832) 776 - 6979
                </a>
                <a
                  href="mailto:ptran@pctranlaw.com?subject=PCT Law Inquiry"
                  className="contact-btn btn-hover text-center bg-dark text-white rounded-pill h-50 p-3"
                >
                  <FontAwesomeIcon
                    className="text-pink pe-2"
                    icon={faEnvelope}
                  />{" "}
                  ptran<span className="text-pink small">@</span>
                  pctranlaw.com
                </a>
              </div>
              <div className="d-flex justify-content-center text-center">
                <form
                  className="text-center"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                >
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
                  <button
                    className="contact-btn btn-hover col-12 bg-black text-white border-0 rounded p-2"
                    type="submit"
                  >
                    Submit
                  </button>
                  <input type="hidden" name="form-name" value="contact" />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-black container-fluid h-75 d-flex flex-column">
        <div className="container-fluid w-75 d-flex flex-column">
          <h1 className="mt-4 py-5 text-uppercase text-white text-thin">
            Client Testimonials
          </h1>
          <div className="mt-4 d-flex justify-content-between">
            {isSmallScreen ? (
              <>
                <div id="testimonialCarousel" className="carousel slide">
                  <div className="carousel-indicators">
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
                      <div className="card">
                        <div className="card-body text-center p-4">
                          <p className="card-text">
                            &quot;Semper risus in hendrerit gravida rutrum
                            quisque non. Commodo quis imperdiet massa tincidunt
                            nunc pulvinar. Sed ullamcorper morbi tincidunt
                            ornare massa. Tempus quam pellentesque nec nam
                            aliquam sem et. Posuere urna nec tincidunt praesent
                            semper feugiat nibh sed pulvinar.&quot;
                          </p>
                          <h5 className="card-title fs-4">- Priscilla C.</h5>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="card">
                        <div className="card-body text-center p-4">
                          <p className="card-text">
                            &quot;Semper risus in hendrerit gravida rutrum
                            quisque non. Commodo quis imperdiet massa tincidunt
                            nunc pulvinar. Sed ullamcorper morbi tincidunt
                            ornare massa. Tempus quam pellentesque nec nam
                            aliquam sem et. Posuere urna nec tincidunt praesent
                            semper feugiat nibh sed pulvinar.&quot;
                          </p>
                          <h5 className="card-title fs-4">- Priscilla C.</h5>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="card">
                        <div className="card-body text-center p-4">
                          <p className="card-text">
                            &quot;Semper risus in hendrerit gravida rutrum
                            quisque non. Commodo quis imperdiet massa tincidunt
                            nunc pulvinar. Sed ullamcorper morbi tincidunt
                            ornare massa. Tempus quam pellentesque nec nam
                            aliquam sem et. Posuere urna nec tincidunt praesent
                            semper feugiat nibh sed pulvinar.&quot;
                          </p>
                          <h5 className="card-title fs-4">- Priscilla C.</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="card">
                  <div className="card-body text-center p-4">
                    <p className="card-text card-text-desktop">
                      &quot;Semper risus in hendrerit gravida rutrum quisque
                      non. Commodo quis imperdiet massa tincidunt nunc pulvinar.
                      Sed ullamcorper morbi tincidunt ornare massa. Tempus quam
                      pellentesque nec nam aliquam sem et. Posuere urna nec
                      tincidunt praesent semper feugiat nibh sed pulvinar.&quot;
                    </p>
                    <h5 className="card-title fs-4">- Priscilla C.</h5>
                  </div>
                </div>
                <div className="card mx-5">
                  <div className="card-body text-center p-4">
                    <p className="card-text card-text-desktop">
                      &quot;Semper risus in hendrerit gravida rutrum quisque
                      non. Commodo quis imperdiet massa tincidunt nunc pulvinar.
                      Sed ullamcorper morbi tincidunt ornare massa. Tempus quam
                      pellentesque nec nam aliquam sem et. Posuere urna nec
                      tincidunt praesent semper feugiat nibh sed pulvinar.&quot;
                    </p>
                    <h5 className="card-title fs-3">- Priscilla C.</h5>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body text-center p-4">
                    <p className="card-text card-text-desktop">
                      &quot;Semper risus in hendrerit gravida rutrum quisque
                      non. Commodo quis imperdiet massa tincidunt nunc pulvinar.
                      Sed ullamcorper morbi tincidunt ornare massa. Tempus quam
                      pellentesque nec nam aliquam sem et. Posuere urna nec
                      tincidunt praesent semper feugiat nibh sed pulvinar.&quot;
                    </p>
                    <h5 className="card-title fs-3">- Priscilla C.</h5>
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
              <a className="modal-btn contact-btn btn-hover text-uppercase text-center bg-dark text-white rounded-pill h-50 p-3 mt-3 mb-4">
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
              <a className="modal-btn contact-btn btn-hover text-uppercase text-center bg-dark text-white rounded-pill h-50 p-3 mt-3 mb-4">
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
              <a className="modal-btn contact-btn btn-hover text-uppercase text-center bg-dark text-white rounded-pill h-50 p-3 mt-3 mb-4">
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
