import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Skill = () => {

  return (
    <section id="skill">
      <Container>
        <Title title="Technologies & Skills" />
        
        <div className="container">
            <div className=" row mx-auto font-weight-bold text-white" style={{fontSize:'15px'}}>
                <div className="col-md-2 col-sm-4 p-3">
                    <div className="p-4 bg-dark">Java</div>
                </div>
                <div className="col-md-2 col-sm-4 p-3">
                    <div className="p-4 bg-primary">Javascript</div>
                </div>
                <div className="col-md-2 col-sm-4 p-3">
                    <div className="p-4 bg-warning">Oracle Jet</div>
                </div>
                <div className="col-md-2 col-sm-4 p-3">
                    <div className="p-4 bg-info">Node Js</div>
                </div>
                <div className="col-md-2 col-sm-4 p-3">
                    <div className="p-4 bg-success">React</div>
                </div>
                <div className="col-md-2 col-sm-4 p-3">
                    <div className="p-4 bg-secondary">Microservices</div>
                </div>
            </div>
        </div>

      </Container>
    </section>
  );
};

export default Skill;
