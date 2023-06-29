import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Social from '../Social/Social';
import Footer from '../Footer/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import 'animate.css';
import "./App.css";

export default function App() {
  return (
    <div className="container-fluid p-0 vh-100">
      <Nav />
      <Home />
      <Social />
      <Footer />
    </div>
  )
}
