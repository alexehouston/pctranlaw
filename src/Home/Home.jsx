import { useEffect } from "react";
import Logo from "../Logo/Logo";
import Practices from "../Practices/Practices";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Testimonials from "../Testimonials/Testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container-fluid home-landing home-text animate__animated animate__fadeInUp animate__slow">
        <div className="container">
          <div className="row vh-100 d-flex align-items-center">
            <div className="col-lg-7">
              <div className="d-flex flex-column align-items-center">
                <Logo />
                <img
                  className="pb-2 mt-lg-5 w-100"
                  src="/assets/PCT-logo-txtonly.png"
                />
                <h1 className="home-subtitle text-uppercase ps-2 mt-3">
                  Justice With Claws
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="licensed-in position-absolute text-uppercase">
          Licensed in Minnesota & Texas
        </div>
      </div>

      <Practices />

      <About />

      <Contact />

      <Testimonials />

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
