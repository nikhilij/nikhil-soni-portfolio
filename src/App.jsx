// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Footer from './components/Footer';
import useScrollToTop from './Hooks/useScrollToTop';



import './App.css';



const App = () => {
  useScrollToTop(1000);


  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Achievements />
      <Projects />
      <Footer/>
    </div>
  );
};

export default App;
