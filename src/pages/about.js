import React, { useState, useEffect } from 'react';
import About from '../components/About/About';
import { PortfolioProvider } from '../context/context';
import Navbar from '../components/NavBar/Navbar';

import { aboutData } from '../mock/data';

export default function about() {

    const [about, setAbout] = useState([]);

    useEffect(() => {
        setAbout({ ...aboutData });
      }, []);

    return (
        <PortfolioProvider value={{ about }}>
            <Navbar/>
            <About />
        </PortfolioProvider>
    )
}

