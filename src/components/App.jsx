import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import Skill from './Skill/Skill';
import Education from './Education/Education';
import Development from './Development/Development';
import Quote from './Quote/Quote';
import Certificates from './Certificates/Certificates';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, footer }}>
      <Hero />
      <About />
      <Development />
      <Quote />
      <Skill/>
      <Education />
      <Certificates />
      <Projects />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
