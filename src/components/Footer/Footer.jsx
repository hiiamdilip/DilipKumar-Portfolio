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
                <div className="card py-4 h-80 border-dark">
                    <div className="card-body text-center">
                        <i className="fa fa-map-pin fa-2x text-primary mb-3"></i>
                        <h4 className="text-uppercase font-weight-bold text-dark">Address</h4>
                        <hr className="my-4 bg-dark" />
                        <h5 className="text-secondary font-weight-bold">D-019, Trifecta Verdure, Sarjapur Road, Bangalore</h5>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-9">
                <div className="card py-4 h-80 border-dark">
                    <div className="card-body text-center">
                        <i className="fa fa-envelope-open fa-2x text-primary mb-3"></i>
                        <h4 className="text-uppercase font-weight-bold text-dark">Email</h4>
                        <hr className="my-4 bg-dark" />
                        <h5 className="text-secondary font-weight-bold">dilip35kumar@gmail.com</h5>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-9">
                <div className="card py-4 h-80 border-dark">
                    <div className="card-body text-center">
                        <i className="fa fa-phone fa-2x text-primary mb-3"></i>
                        <h4 className="text-uppercase font-weight-bold text-dark">Phone</h4>
                        <hr className="my-4 bg-dark" />
                        <h5 className="text-secondary font-weight-bold">+91-9972205592</h5>
                    </div>
                </div>
            </div>
        </div>
        
        <br/><br/>

        <div className="col-lg-6 mx-auto">
            <form action="https://formspree.io/f/xpzkzwgg" method="POST">
                <div className="form-group">
                    <input type="text" name="name" id="name"
                    placeholder="Enter your name" className="form-control form-control-lg border-dark"/>
                </div>
                <div className="form-group">
                    <input type="text" name="email" id="email"
                    placeholder="Enter your email" className="form-control form-control-lg border-dark"/>
                </div>
                <div className="form-group">
                    <input type="text" name="mobile" id="mobile"
                    placeholder="Enter your phone" className="form-control form-control-lg border-dark"/>
                </div>
                <div className="form-group">
                    <textarea type="text" name="message" id="message" rows="5"
                    placeholder="Enter your message" className="form-control form-control-lg border-dark"/>
                </div>
                <button type="submit" value="clear" className="btn btn-lg btn-dark text-white font-weight-bold">Submit</button>
            </form>
        </div>
        
        <hr />
        <p className="text-dark d-flex justify-content-between font-weight-bold">
          Copyright © {new Date().getFullYear()} - Dilip Kumar.
          <span>
            <Link to="hero" smooth duration={1000}>
              <i className="fa fa-chevron-up fa-2x" aria-hidden="true" />
            </Link>
          </span>
        </p>

      </Container>
    </footer>
  );
};

export default Footer;
