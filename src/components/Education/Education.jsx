import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

import "../../style/style.css";

const Education = () => {

  return (
    <section className="bg-theme" id="education">
      <Container>
        <Title title="Education" />

        <div className="d-flex mb-4 flex-md-row text-left flex-column">
            <div className="flex-grow-1">
                <h3 className="font-weight-bold">MS Ramaiah Institute of Technology, Bangalore</h3>
                <h4 className="mb-3">Bachelor of Engineering, (CSE)</h4>
                <p>CGPA: 9.26</p>
            </div>
            <h3 className="text-white font-weight-bold">July 2011 - June 2015</h3>
        </div>
        
        <div className="d-flex mb-4 flex-md-row text-left flex-column">
            <div className="flex-grow-1">
                <h3 className="font-weight-bold">DPS Ranchi</h3>
                <h4 className="mb-3">AISSCE, CBSE</h4>
                <p>Percentage: 91.80%</p>
            </div>
            <h3 className="text-white font-weight-bold">June 2009 - May 2011</h3>
        </div>

        <div className="d-flex mb-4 flex-md-row text-left flex-column">
            <div className="flex-grow-1">
                <h3 className="font-weight-bold">DAV Bharechnagar</h3>
                <h4 className="mb-3">AISSC, CBSE</h4>
                <p>Percentage: 93.50%</p>
            </div>
            <h3 className="text-white font-weight-bold">May 2009</h3>
        </div>
      </Container>
    </section>
  );
};

export default Education;
