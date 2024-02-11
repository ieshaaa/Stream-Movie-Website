import 'bootstrap/dist/css/bootstrap.min.css';
// import Swiper styles
import 'swiper/css';

import React, {useState, useEffect} from 'react';
import './App.css';
import Banner from './pages/Banner';
import Header from './pages/Header';
import Main from './pages/Main';
import Footer from './pages/Footer';
import BackToTopBtn from './components/BackToTopBtn';

function App() {
  // the scroll position of window
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener('scroll' , () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);
  return (
    <>
    <Header scroll= {scroll}/>
    <Banner/>
    <Main/>
    <Footer/>
    <BackToTopBtn scroll={scroll}/>
    </>
  );
}

export default App;
