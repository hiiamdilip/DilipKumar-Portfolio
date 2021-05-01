import React from 'react';
import { Container } from 'react-bootstrap';
import image from '../../images/mathematician.jpg';

const Quote = () => {

  return (
    <section id="quote" className="bg-theme text-center">
      <Container>
        <div className="row py-lg-3">
            <div className="col-lg-9">
                <h1 className="text-left">"When I’m working on a problem, I never think about beauty. I think only how to solve the problem. But when I have finished, if the solution is not beautiful, I know it is wrong."</h1>
            </div>
            
            <div className="col-lg-3 mt-lg-0 mt-3 text-lg-center tablet-grid">
                <img style={{borderRadius: 50, width:150}} src={image}/>
                <div>
                    <h2 className="mb-0 mt-lg-3 font-weight-bold">Freeman Dyson</h2>
                    <h3 className="mt-1">- Mathematician </h3>
                </div>
            </div>
        </div>
      </Container>
    </section>
  );
};

export default Quote;
