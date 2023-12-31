import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "animate.css";
import "./App.css";

export default function App() {

  return (
    <div className="container-fluid p-0 vh-100">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}
