import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <div className="container-fluid p-0 vh-100">
      <Nav />

      <div className="home-banner container-fluid p-0 h-75"></div>

      <div className="home-text position-absolute">
        <h1 className="home-title text-uppercase text-white">Justice With Claws</h1>
        <div className="home-btn parallelogram text-uppercase mt-2">Learn More <FontAwesomeIcon icon={faChevronRight} className="ps-2 text-pink" /></div>
      </div>
      
      <Footer />
    </div>
  )
}
