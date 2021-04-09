import React, { useState, useEffect } from 'react';
import Contact from '../components/Contact/Contact';
import { PortfolioProvider } from '../context/context';
import Navbar from '../components/NavBar/Navbar';

import {contactData} from '../mock/data';

export default function contact() {

    const [contact, setContact] = useState({});

    useEffect(() => {
        setContact({ ...contactData });
      }, []);

    return (
        <PortfolioProvider value={{ contact }}>
            <Navbar/>
            <Contact />
        </PortfolioProvider>
    )
}

