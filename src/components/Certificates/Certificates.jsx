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
        
        <div className="card-deck">
            <div className="card bg-theme border-dark">
                <img className="card-img-top" src={certificate1} alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title font-weight-bold text-dark">MERN Stack</h4>
                    <p className="card-text text-white">Full Stack Development MERN Bootcamp issued by <span className="text-dark font-weight-bold">LearnCodeOnline.</span></p>
                </div>
                <div className="card-footer">
                    <a href={certificate1pdf} target="_blank" className="btn btn-lg btn-dark font-weight-bold">View Certificate</a>
                </div>
            </div>
            <div className="card bg-theme border-dark">
                <img className="card-img-top" src={certificate3} alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title font-weight-bold text-dark">OCI - Foundations</h4>
                    <p className="card-text text-white">Oracle Cloud Infrastructure Foundations 2020 Certified Associate issued by <span className="text-dark font-weight-bold">Oracle.</span></p>
                </div>
                <div className="card-footer">
                    <a href={certificate3pdf} target="_blank" className="btn btn-lg btn-dark font-weight-bold">View Certificate</a>
                </div>
            </div>
            <div className="card bg-theme border-dark">
                <img className="card-img-top" src={certificate2} alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title font-weight-bold text-dark">OCI - Developer</h4>
                    <p className="card-text text-white">Oracle Cloud Infrastructure Developer 2020 Certified Associate issued by <span className="text-dark font-weight-bold">Oracle.</span></p>
                </div>
                <div className="card-footer">
                    <a href={certificate2pdf} target="_blank" className="btn btn-lg btn-dark font-weight-bold">View Certificate</a>
                </div>
            </div>
            <div className="card bg-theme border-dark">
                <img className="card-img-top" src={certificate4} alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title font-weight-bold text-dark">Software Architecture</h4>
                    <p className="card-text text-white">Software Architecture: From Developer to Architect issued by <span className="text-dark font-weight-bold">LinkedIn.</span></p>
                </div>
                <div className="card-footer">
                    <a href={certificate4pdf} target="_blank" className="btn btn-lg btn-dark font-weight-bold">View Certificate</a>
                </div>
            </div>
        </div>
        
      </Container>
    </section>
  );
};

export default Certificates;
