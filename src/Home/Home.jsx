import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "./Home.css";

export default function Home() {
  return (
    <>
        <div className="home-banner container-fluid p-0 h-75"></div>

        <div className="home-text position-absolute top-50">
            <img className="home-title pb-5" src="/assets/PCT-logo-txtonly.png" width="600" />
            <h1 className="home-subtitle text-uppercase">Justice With Claws</h1>
            <div className="home-btn parallelogram text-uppercase mt-2">Learn More <FontAwesomeIcon icon={faChevronRight} className="ps-2 text-pink" /></div>
        </div>

        <div className="container-fluid p-0 bg-black">
            <div className="container-fluid w-75 text-white">
                <h1 className="py-5 text-uppercase text-thin">Our Practice Areas</h1>
                <div className="d-flex justify-content-between pb-5 home-services">
                    <div className="col-2 p-5 position-relative parallelogram-inverse">
                        <span className="bg-dark text-pink py-2 px-3 rounded-pill position-absolute top-0 start-0 ms-3 mt-3">1</span>
                    </div>
                    <div className="col-2 p-5 position-relative parallelogram-inverse">
                        <span className="bg-dark text-pink py-2 px-3 rounded-pill position-absolute top-0 start-0 ms-3 mt-3">2</span>
                    </div>
                    <div className="col-2 p-5 position-relative parallelogram-inverse">
                        <span className="bg-dark text-pink py-2 px-3 rounded-pill position-absolute top-0 start-0 ms-3 mt-3">3</span>
                    </div>
                    <div className="col-2 p-5 position-relative parallelogram-inverse">
                        <span className="bg-dark text-pink py-2 px-3 rounded-pill position-absolute top-0 start-0 ms-3 mt-3">4</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid p-0 w-75">
            <h1 className="py-5 text-uppercase text-thin">Contact Us</h1>
        </div>
    </>
  )
}