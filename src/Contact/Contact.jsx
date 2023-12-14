import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

export default function Contact() {
  return (
    <div
      id="ContactUs"
      className="container py-3 py-lg-5 mb-5"
      data-aos="fade-up"
    >
      <div className="row">
        <div className="col-12">
          <h1 className="py-5 text-uppercase text-thin">Contact Us</h1>
        </div>
        <div className="col-12 col-lg-5 mb-5 mb-lg-0">
          <div className="d-flex flex-column justify-content-between text-uppercase h-100">
            <a
              href="tel:8327766969"
              className="btn-shadow btn-hover text-center bg-black text-white rounded-pill p-3 my-3 col-12 col-lg-9"
            >
              <FontAwesomeIcon className="text-pink pe-2" icon={faPhone} />{" "}
              (832) 776 - 6979
            </a>
            <a
              href="mailto:contact@pctranlaw.com?subject=PCT Law Inquiry"
              className="btn-shadow btn-hover text-center bg-black text-white rounded-pill p-3 my-3 col-12 col-lg-9"
            >
              <FontAwesomeIcon className="text-pink pe-2" icon={faEnvelope} />{" "}
              contact<span className="text-pink small">@</span>
              pctranlaw.com
            </a>
            <img
              className="col-12 col-lg-9 rounded shadow mt-5"
              src="/assets/office.webp"
              alt="Houston Office"
            />
            <div className="d-flex flex-column justify-content-center align-items-center text-center col-12 col-lg-9 mt-5">
              <h4 className="w-75 mx-auto">Visit Our Office</h4>
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
            <a
              href="https://www.google.com/maps/place/5718+Westheimer+Rd+1000+1125,+Houston,+TX+77057/@29.7384872,-95.4814493,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c3d8b898e3b1:0x29bce29c9e907e33!8m2!3d29.7384826!4d-95.4788744?entry=ttu"
              target="_blank"
              rel="noreferrer"
              className="btn-shadow btn-hover text-center bg-black text-white rounded-pill p-3 my-3 col-12 col-lg-9 mb-5 mb-lg-0"
            >
              <FontAwesomeIcon
                className="text-pink pe-2"
                icon={faLocationDot}
              />{" "}
              Get Directions
            </a>
          </div>
        </div>
        <div className="col-lg-7 mt-5 mt-lg-0">
          <div className="gold-plate rounded shadow px-3">
            <div className="contact-img col-8 col-md-7 col-lg-7 mx-auto">
              <img
                className="w-100"
                src="/assets/headshots/priscilla_3_transparent.png"
              />
            </div>
            <div className="col-12 col-md-11 col-lg-11 d-flex justify-content-center text-center gold-plate p-4 p-lg-5 rounded mx-auto mb-3 mb-md-4 mb-lg-5 shadow text-white">
              <form className="text-center col-12" name="contact" method="POST">
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
                        <FontAwesomeIcon className="text-pink" icon={faPhone} />{" "}
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
                        <FontAwesomeIcon className="text-pink" icon={faPhone} />{" "}
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
                  className="btn-shadow btn-hover col-4 bg-black text-white border-0 rounded p-2"
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
  );
}
