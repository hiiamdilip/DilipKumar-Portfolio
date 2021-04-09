import React, { useState, useEffect } from 'react';
import Projects from '../components/Projects/Projects';
import { PortfolioProvider } from '../context/context';
import Navbar from '../components/NavBar/Navbar';

import { projectsData } from '../mock/data';

export default function projects() {
    
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects([...projectsData]);
      }, []);
    
    return (
        <PortfolioProvider value={{ projects }}>
            <Navbar/>
            <Projects />
        </PortfolioProvider>
    )
}

