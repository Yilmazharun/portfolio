import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="container py-4">
        <Header />
        <Summary />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Languages />
      </div>
      <Footer />
    </div>
  );
}

export default App;