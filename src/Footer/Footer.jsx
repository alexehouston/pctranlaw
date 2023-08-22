import "./Footer.css";

export default function Footer() {
  return (
    <div className="container-fluid bg-white">
      <div className="ftr row d-flex justify-content-center align-items-center text-center text-black py-5">
        <div className="col-4 col-lg-2 text-center d-flex flex-column">
          <h6 className="ftr-title fs-5 text-uppercase">Services</h6>
          <a data-bs-toggle="modal" data-bs-target="#personalInjuryModal">
            Personal Injury
          </a>
          <a data-bs-toggle="modal" data-bs-target="#intellectualPropertyModal">
            Intellectual Property
          </a>
          <a data-bs-toggle="modal" data-bs-target="#businessLawModal">
            Business Law
          </a>
        </div>
        <div className="col-4 col-lg-2">
          <img src="/assets/PCT-logo-shadow.png" height="175" />
        </div>
        <div className="col-4 col-lg-2 text-center d-flex flex-column">
          <h6 className="ftr-title fs-5 text-uppercase">Follow Us</h6>
          <a className="text-black" href="" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a
            className="text-black"
            href="https://www.instagram.com/pctlawfirm/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a className="text-black" href="" target="_blank" rel="noreferrer">
            Yelp
          </a>
        </div>
      </div>
      <div className="row pb-5">
        <p className="copyright container-fluid text-center text-uppercase m-0 p-0 pb-3">
          Copyright © 2023 Pctranlaw. All rights reserved.
        </p>
      </div>
    </div>
  );
}
