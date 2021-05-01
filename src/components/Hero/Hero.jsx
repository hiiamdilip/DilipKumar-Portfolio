import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import heroGif from '../../images/1.gif'
import { SiLeetcode } from "react-icons/si";

const Header = () => {
  const { hero, footer } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;
  const { networks } = footer;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Row >
          <Col md={6} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="hero-title">
                  <h1 style={{fontSize: 45}}>{title || 'Hi, my name is'}{' '} <span className="text-color-main">{name || 'Your Name'}</span></h1>
                  <h1 className="mt-4">{subtitle || "I'm the Unknown Developer."}</h1>
                </div>
              </Fade>
            
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                <p className="hero-cta">
                  <span className="cta-btn cta-btn--hero">
                    <Link to="about" smooth duration={1000}>
                      {cta || 'Know more'}
                    </Link>
                  </span>
                </p>
              </Fade>
          </Col>

          <Col md={6} sm={12}>
            <img className="d-none d-sm-block" src={heroGif}/>
          </Col>
          
          <div className="social-links">
            {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  {name ? <i className={`fa fa-${name} fa-inverse text-dark`} />: <SiLeetcode className="text-dark"/>}
                </a>
              );
            })}     
          </div>

        </Row>

      </Container>
    </section>
  );
};

export default Header;
