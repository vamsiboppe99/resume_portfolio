import React, { useState } from 'react';
import Header from './components/Header';
import Details from './components/Details';
import Summary from './components/Summary';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showResume, setShowResume] = useState(false);

  const handleClick = () => {
    setShowResume(true);
  };

  return (
    <div className="app">
      <Header />
      <main>
        {!showResume ? (
          <section className="welcome">
            <h1>Welcome to My Portfolio</h1>
            <button onClick={handleClick} className="reveal-button">Click Here</button>
          </section>
        ) : (
          <div className="resume-content">
            <Details />
            <Summary />
            <Education />
            <Experience />
            <Projects />
            <TechnicalSkills />
            <Certifications />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
