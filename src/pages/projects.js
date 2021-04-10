import React, { useState, useEffect } from 'react';
import Projects from '../components/Projects/Projects';
import { PortfolioProvider } from '../context/context';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';

import { projectsData, footerData } from '../mock/data';

export default function projects() {
    
    const [projects, setProjects] = useState([]);
    const [footer, setFooter] = useState({});

    useEffect(() => {
        setProjects([...projectsData]);
        setFooter({ ...footerData });
      }, []);
    
    return (
        <PortfolioProvider value={{ projects, footer }}>
            <Navbar/>
            <Projects />
            <Footer />
        </PortfolioProvider>
    )
}

