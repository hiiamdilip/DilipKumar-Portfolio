import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);

  return (
    <footer id="footer" className="footer navbar-static-bottom">
      <Container>
        <Title title="Get In Touch" />
        <p>Would you like to work with me? Awesome! Let’s connect!</p>
        <div className="row">
          <div className="col-md-4 mb-9">
                <div className="card py-4 h-100">
                    <div className="card-body text-center">
                        <i className="fa fa-map-pin fa-2x text-primary mb-3"></i>
                        <h4 className="text-uppercase font-weight-bold text-dark">Address</h4>
                        <hr className="my-4 bg-dark" />
                        <h5 className="text-secondary font-weight-bold">D-019, Trifecta Verdure, Sarjapur Road, Bangalore</h5>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-9">
                <div className="card py-4 h-100">
                    <div className="card-body text-center">
                        <i className="fa fa-envelope-open fa-2x text-primary mb-3"></i>
                        <h4 className="text-uppercase font-weight-bold text-dark">Email</h4>
                        <hr className="my-4 bg-dark" />
                        <h5 className="text-secondary font-weight-bold">dilip35kumar@gmail.com</h5>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-9">
                <div className="card py-4 h-100">
                    <div className="card-body text-center">
                        <i className="fa fa-mobile fa-3x text-primary mb-3"></i>
                        <h4 className="text-uppercase font-weight-bold text-dark">Phone</h4>
                        <hr className="my-4 bg-dark" />
                        <h5 className="text-secondary font-weight-bold">+91-9972205592</h5>
                    </div>
                </div>
            </div>
        </div>
        
        <hr />
        <p className="text-white d-flex justify-content-between">
          Copyright © {new Date().getFullYear()} - Dilip Kumar. All Rights reserved.
          <span>
            <Link to="navbar" smooth duration={1000}>
              <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
            </Link>
          </span>
        </p>

      </Container>
    </footer>
  );
};

export default Footer;
