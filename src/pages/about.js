import React, { useState, useEffect } from 'react';
import About from '../components/About/About';
import { PortfolioProvider } from '../context/context';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import Skill from '../components/Skill/Skill';
import Education from '../components/Education/Education';
import Development from '../components/Development/Development';
import Certificates from '../components/Certificates/Certificates';

import { aboutData, footerData } from '../mock/data';

export default function about() {

    const [about, setAbout] = useState([]);
    const [footer, setFooter] = useState({});

    useEffect(() => {
        setAbout({ ...aboutData });
        setFooter({ ...footerData });
      }, []);

    return (
        <PortfolioProvider value={{ about, footer }}>
            <Navbar/>
            <About />
            <Skill/>
            <Education/>
            <Development/>
            <Certificates/>
            <Footer />
        </PortfolioProvider>
    )
}

