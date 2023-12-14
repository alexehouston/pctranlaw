import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faScaleBalanced,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import "./Practices.css";

export default function Practices() {
  return (
    <div className="container-fluid bg-black">
      <div className="container text-white" data-aos="fade-up">
        <div className="row">
          <h1 className="py-5 text-uppercase text-thin">Our Practice Areas</h1>
        </div>
        <div className="row">
          <div className="d-flex flex-wrap justify-content-between py-0 py-lg-5">
            <div
              className="gold-plate col-12 col-lg-3 floating btn-hover rounded py-4 my-4 my-lg-0"
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
                <br className="d-none d-lg-block" /> Injury
              </p>
            </div>
            <div
              className="gold-plate col-12 col-lg-3 floating btn-hover rounded py-4 my-4 my-lg-0"
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
                <br className="d-none d-lg-block" /> Property
              </p>
            </div>
            <div
              className="gold-plate col-12 col-lg-3 floating btn-hover rounded py-4 my-4 my-lg-0"
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
                <br className="d-none d-lg-block" /> Law
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
