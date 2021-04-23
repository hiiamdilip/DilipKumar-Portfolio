import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import certificate1 from '../../images/certificate1.jpg';
import certificate2 from '../../images/certificate2.jpg';
import certificate3 from '../../images/certificate3.jpg';
import certificate4 from '../../images/certificate4.jpg';

import certificate1pdf from '../../images/certificate1.pdf';
import certificate2pdf from '../../images/certificate2.pdf';
import certificate3pdf from '../../images/certificate3.pdf';
import certificate4pdf from '../../images/certificate4.pdf';

import "../../style/style.css";

const Certificates = () => {

  return (
    <section id="certificates">
      <Container>
        <Title title="Certificates" />
        
        <div class="card-deck">
            <div class="card bg-theme border-primary">
                <img class="card-img-top" src={certificate1} alt="Card image cap"/>
                <div class="card-body">
                    <h4 class="card-title font-weight-bold">MERN</h4>
                    <p class="card-text text-white">Full Stack Development MERN Bootcamp issued by <span className="text-primary font-weight-bold">LearnCodeOnline.</span></p>
                </div>
                <div class="card-footer">
                    <a href={certificate1pdf} class="btn btn-primary font-weight-bold">View Certificate</a>
                </div>
            </div>
            <div class="card bg-theme border-primary">
                <img class="card-img-top" src={certificate2} alt="Card image cap"/>
                <div class="card-body">
                    <h4 class="card-title font-weight-bold">OCI - Developer</h4>
                    <p class="card-text text-white">Oracle Cloud Infrastructure Developer 2020 Certified Associate issued by <span className="text-primary font-weight-bold">Oracle.</span></p>
                </div>
                <div class="card-footer">
                    <a href={certificate2pdf} class="btn btn-primary font-weight-bold">View Certificate</a>
                </div>
            </div>
            <div class="card bg-theme border-primary">
                <img class="card-img-top" src={certificate3} alt="Card image cap"/>
                <div class="card-body">
                    <h4 class="card-title font-weight-bold">OCI - Foundations</h4>
                    <p class="card-text text-white">Oracle Cloud Infrastructure Foundations 2020 Certified Associate issued by <span className="text-primary font-weight-bold">Oracle.</span></p>
                </div>
                <div class="card-footer">
                    <a href={certificate3pdf} class="btn btn-primary font-weight-bold">View Certificate</a>
                </div>
            </div>
            <div class="card bg-theme border-primary">
                <img class="card-img-top" src={certificate4} alt="Card image cap"/>
                <div class="card-body">
                    <h4 class="card-title font-weight-bold">Software Architecture</h4>
                    <p class="card-text text-white">Software Architecture: From Developer to Architect issued by <span className="text-primary font-weight-bold">LinkedIn.</span></p>
                </div>
                <div class="card-footer">
                    <a href={certificate4pdf} class="btn btn-primary font-weight-bold">View Certificate</a>
                </div>
            </div>
        </div>
        
      </Container>
    </section>
  );
};

export default Certificates;
