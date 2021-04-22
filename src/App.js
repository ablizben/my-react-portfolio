import React, { useEffect } from 'react'
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animation } from './Content';

function App() {

  useEffect(() => {
    AOS.init({
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate
    })
// eslint-disable-next-line
}, [])
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
