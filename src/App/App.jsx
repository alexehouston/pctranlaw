import {useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Social from '../Social/Social';
import Footer from '../Footer/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import 'animate.css';
import "./App.css";

export default function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 576);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 vh-100">
      <Nav isSmallScreen={isSmallScreen} />
      <Home isSmallScreen={isSmallScreen} />
      <Social isSmallScreen={isSmallScreen} />
      <Footer isSmallScreen={isSmallScreen} />
    </div>
  )
}
