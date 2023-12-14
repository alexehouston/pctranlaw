import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faHouse } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="Nav navbar fixed-top py-0 animate__animated animate__fadeInDown animate__slow bg-black container-fluid border-bottom border-dark">
      <ul className="nav-links col-11 col-lg-10 mx-auto d-flex justify-content-between align-items-center m-0 py-3 px-0">
        <li className="nav-link text-uppercase">
          <a
            href="#"
            className="nav-link-a text-white underline-animation"
          >
            <FontAwesomeIcon icon={faHouse} />
          </a>
        </li>
        <li className="nav-link text-uppercase">
          <div className="dropdown underline-animation d-flex align-items-center">
            <a
              className="dropdown-toggle underline-animation text-white"
              href="#"
              role="button"
              id="navLinksDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Practice Areas{" "}
              <FontAwesomeIcon icon={faChevronDown} className="text-pink" />
            </a>
            <ul className="dropdown-menu" aria-labelledby="navLinksDropdown">
              <li>
                <a
                  className="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#personalInjuryModal"
                >
                  Personal Injury
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#intellectualPropertyModal"
                >
                  Intellectual Property
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#businessLawModal"
                >
                  Business Law
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-link text-uppercase">
          <div className="dropdown underline-animation d-flex align-items-center">
            <a
              className="dropdown-toggle underline-animation text-white"
              href="#"
              role="button"
              id="navLinksDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="d-none d-lg-inline">Legal</span> Team{" "}
              <FontAwesomeIcon icon={faChevronDown} className="text-pink" />
            </a>
            <ul className="dropdown-menu" aria-labelledby="navLinksDropdown">
              <li>
                <a className="dropdown-item">Priscilla C. Tran</a>
              </li>
              <li>
                <a className="dropdown-item">Priscilla C. Tran</a>
              </li>
              <li>
                <a className="dropdown-item">Priscilla C. Tran</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-link text-uppercase">
          <a
            href="#ContactUs"
            className="nav-link-a text-white underline-animation"
          >
            Contact <span className="d-none d-lg-inline">Us</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
